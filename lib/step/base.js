const color = require('chalk')
const Secret = require('../secret')
const { getCurrentTimeout } = require('./timeout')
const { ucfirst, humanizeString } = require('../utils')

const STACK_LINE = 4

/**
 * Each command in test executed through `I.` object is wrapped in Step.
 * Step allows logging executed commands and triggers hook before and after step execution.
 * @param {string} name
 */
class Step {
  constructor(name) {
    /** @member {string} */
    this.name = name
    /** @member {Map<number, number>} */
    this.timeouts = new Map()

    /** @member {Array<*>} */
    this.args = []

    /** @member {Record<string,any>} */
    this.opts = {}
    /** @member {string} */
    this.actor = 'I' // I = actor
    /** @member {string} */
    this.helperMethod = name // helper method
    /** @member {string} */
    this.status = 'pending'
    /** @member {string} */
    this.prefix = this.suffix = ''
    /** @member {string} */
    this.comment = ''
    /** @member {any} */
    this.metaStep = undefined
    /** @member {string} */
    this.stack = ''

    this.setTrace()
  }

  setMetaStep(metaStep) {
    this.metaStep = metaStep
  }

  run() {
    throw new Error('Not implemented')
  }

  /**
   * @returns {number|undefined}
   */
  get timeout() {
    return getCurrentTimeout(this.timeouts)
  }

  /**
   * @param {number} timeout - timeout in milliseconds or 0 if no timeout
   * @param {number} order - order defines the priority of timeout, timeouts set with lower order override those set with higher order.
   *                         When order below 0 value of timeout only override if new value is lower
   */
  setTimeout(timeout, order) {
    this.timeouts.set(order, timeout)
  }

  /** @function */
  setTrace() {
    Error.captureStackTrace(this)
  }

  /** @param {Array<*>} args */
  setArguments(args) {
    this.args = args
  }

  setActor(actor) {
    this.actor = actor || ''
  }

  /** @param {string} status */
  setStatus(status) {
    this.status = status
    if (this.metaStep) {
      this.metaStep.setStatus(status)
    }
  }

  /** @return {string} */
  humanize() {
    return humanizeString(this.name)
  }

  /** @return {string} */
  humanizeArgs() {
    return this.args
      .map(arg => {
        if (!arg) {
          return ''
        }
        if (typeof arg === 'string') {
          return `"${arg}"`
        }
        if (Array.isArray(arg)) {
          try {
            const res = JSON.stringify(arg)
            return res
          } catch (err) {
            return `[${arg.toString()}]`
          }
        } else if (typeof arg === 'function') {
          return arg.toString()
        } else if (typeof arg === 'undefined') {
          return `${arg}`
        } else if (arg instanceof Secret) {
          return arg.getMasked()
        } else if (arg.toString && arg.toString() !== '[object Object]') {
          return arg.toString()
        } else if (typeof arg === 'object') {
          const returnedArg = {}
          for (const [key, value] of Object.entries(arg)) {
            returnedArg[key] = value
            if (value instanceof Secret) returnedArg[key] = value.getMasked()
          }
          return JSON.stringify(returnedArg)
        }
        return arg
      })
      .join(', ')
  }

  /** @return {string} */
  line() {
    const lines = this.stack.split('\n')
    if (lines[STACK_LINE]) {
      return lines[STACK_LINE].trim()
        .replace(global.codecept_dir || '', '.')
        .trim()
    }
    return ''
  }

  /** @return {string} */
  toString() {
    return ucfirst(`${this.prefix}${this.actor} ${this.humanize()} ${this.humanizeArgs()}${this.suffix}`).trim()
  }

  /** @return {string} */
  toCliStyled() {
    return `${this.prefix}${this.actor} ${color.italic(this.humanize())} ${color.yellow(this.humanizeArgs())}${this.suffix}`
  }

  /** @return {string} */
  toCode() {
    return `${this.prefix}${this.actor}.${this.name}(${this.humanizeArgs()})${this.suffix}`
  }

  isMetaStep() {
    return this.constructor.name === 'MetaStep'
  }

  /** @return {boolean} */
  hasBDDAncestor() {
    let hasBDD = false
    let processingStep
    processingStep = this

    while (processingStep.metaStep) {
      if (processingStep.metaStep.actor.match(/^(Given|When|Then|And)/)) {
        hasBDD = true
        break
      } else {
        processingStep = processingStep.metaStep
      }
    }
    return hasBDD
  }
}

module.exports = Step