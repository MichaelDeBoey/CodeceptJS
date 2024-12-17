[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://stand-with-ukraine.pp.ua)




[<img src="https://img.shields.io/badge/slack-@codeceptjs-purple.svg?logo=slack">](https://join.slack.com/t/codeceptjs/shared_invite/enQtMzA5OTM4NDM2MzA4LWE4MThhN2NmYTgxNTU5MTc4YzAyYWMwY2JkMmZlYWI5MWQ2MDM5MmRmYzZmYmNiNmY5NTAzM2EwMGIwOTNhOGQ) [<img src="https://img.shields.io/badge/discourse-codeceptjs-purple">](https://codecept.discourse.group) [![NPM version][npm-image]][npm-url] [<img src="https://img.shields.io/badge/dockerhub-images-blue.svg?logo=codeceptjs">](https://hub.docker.com/r/codeceptjs/codeceptjs)
[![AI features](https://img.shields.io/badge/AI-features?logo=openai&logoColor=white)](https://github.com/codeceptjs/CodeceptJS/edit/3.x/docs/ai.md) [![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md) 

Build Status:

Appium Helper:
[![Appium V2 Tests - Android](https://github.com/codeceptjs/CodeceptJS/actions/workflows/appiumV2_Android.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/appiumV2_Android.yml)

Web Helper:
[![Playwright Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/playwright.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/playwright.yml)
[![Puppeteer Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/puppeteer.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/puppeteer.yml)
[![WebDriver Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/webdriver.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/webdriver.yml)
[![TestCafe Tests](https://github.com/codeceptjs/CodeceptJS/actions/workflows/testcafe.yml/badge.svg)](https://github.com/codeceptjs/CodeceptJS/actions/workflows/testcafe.yml)

# CodeceptJS [![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)

Reference: [Helpers API](https://github.com/codeceptjs/CodeceptJS/tree/master/docs/helpers)

## Supercharged E2E Testing

CodeceptJS is a new testing framework for end-to-end testing with WebDriver (or others).
It abstracts browser interaction to simple steps that are written from a user's perspective.
A simple test that verifies the "Welcome" text is present on a main page of a site will look like:

```js
Feature('CodeceptJS demo');

Scenario('check Welcome page on site', ({ I }) => {
  I.amOnPage('/');
  I.see('Welcome');
});
```

CodeceptJS tests are:

* **Synchronous**. You don't need to care about callbacks or promises or test scenarios which are linear. But, your tests should be linear.
* Written from **user's perspective**. Every action is a method of `I`. That makes test easy to read, write and maintain even for non-tech persons.
* Backend **API agnostic**. We don't know which WebDriver implementation is running this test.

CodeceptJS uses **Helper** modules to provide actions to `I` object. Currently, CodeceptJS has these helpers:

* [**Playwright**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Playwright.md) - is a Node library to automate the Chromium, WebKit and Firefox browsers with a single API.
* [**Puppeteer**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Puppeteer.md) - uses Google Chrome's Puppeteer for fast headless testing.
* [**WebDriver**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/WebDriver.md) - uses [webdriverio](http://webdriver.io/) to run tests via WebDriver or Devtools protocol.
* [**TestCafe**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/TestCafe.md) - cheap and fast cross-browser test automation.
* [**Appium**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Appium.md) - for **mobile testing** with Appium
* [**Detox**](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/Detox.md) - This is a wrapper on top of Detox library, aimed to unify testing experience for CodeceptJS framework. Detox provides a grey box testing for mobile applications, playing especially well for React Native apps.

And more to come...

## Why CodeceptJS?

CodeceptJS is a successor of [Codeception](http://codeception.com), a popular full-stack testing framework for PHP.
With CodeceptJS your scenario-driven functional and acceptance tests will be as simple and clean as they can be.
You don't need to worry about asynchronous nature of NodeJS or about various APIs of Playwright, Selenium, Puppeteer, TestCafe, etc. as CodeceptJS unifies them and makes them work as they are synchronous.


## Features
 
* 🪄 **AI-powered** with GPT features to assist and heal failing tests.
* ☕ Based on [Mocha](https://mochajs.org/) testing framework.
* 💼 Designed for scenario driven acceptance testing in BDD-style.
* 💻 Uses ES6 natively without transpiler.
* Also plays nice with TypeScript.
* </> Smart locators: use names, labels, matching text, CSS or XPath to locate elements.
* 🌐 Interactive debugging shell: pause test at any point and try different commands in a browser.
* Easily create tests, pageobjects, stepobjects with CLI generators.

## Installation

```sh
npm i codeceptjs --save
```

Move to directory where you'd like to have your tests (and CodeceptJS config) stored, and execute:

```sh
npx codeceptjs init
```

to create and configure test environment. It is recommended to select WebDriver from the list of helpers, if you need to write Selenium WebDriver tests.

After that create your first test by executing:

```sh
npx codeceptjs generate:test
```

Now test is created and can be executed with

```sh
npx codeceptjs run
```

If you want to write your tests using TypeScript just generate standard Type Definitions by executing:

```sh
npx codeceptjs def .
```

Later you can even automagically update Type Definitions to include your own custom [helpers methods](docs/helpers.md).

Note:
- CodeceptJS requires Node.js version `12+` or later. 

## Usage

Learn CodeceptJS by examples. Let's assume we have CodeceptJS installed and WebDriver helper enabled.

### Basics

Let's see how we can handle basic form testing:

```js
Feature('CodeceptJS Demonstration');

Scenario('test some forms', ({ I }) => {
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
  I.fillField('Email', 'hello@world.com');
  I.fillField('Password', secret('123456'));
  I.checkOption('Active');
  I.checkOption('Male');
  I.click('Create User');
  I.see('User is valid');
  I.dontSeeInCurrentUrl('/documentation');
});
```

All actions are performed by `I` object; assertions functions start with `see` function.
In these examples all methods of `I` are taken from WebDriver helper, see [reference](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/WebDriver.md) to learn how to use them.

Let's execute this test with `run` command. Additional option `--steps` will show us the running process. We recommend use `--steps` or `--debug` during development.

```sh
npx codeceptjs run --steps
```

This will produce an output:

```sh
CodeceptJS Demonstration --
 test some forms
 • I am on page "http://simple-form-bootstrap.plataformatec.com.br/documentation"
 • I fill field "Email", "hello@world.com"
 • I fill field "Password", "****"
 • I check option "Active"
 • I check option "Male"
 • I click "Create User"
 • I see "User is valid"
 • I dont see in current url "/documentation"
 ✓ OK in 17752ms
```

CodeceptJS has an ultimate feature to help you develop and debug your test.
You can **pause execution of test in any place and use interactive shell** to try different actions and locators.
Just add `pause()` call at any place in a test and run it.

Interactive shell can be started outside test context by running:

```sh
npx codeceptjs shell
```

### Actions

We filled form with `fillField` methods, which located form elements by their label.
The same way you can locate element by name, `CSS` or `XPath` locators in tests:

```js
// by name
I.fillField('user_basic[email]', 'hello@world.com');
// by CSS
I.fillField('#user_basic_email', 'hello@world.com');
// don't make us guess locator type, specify it
I.fillField({css: '#user_basic_email'}, 'hello@world.com');
```

Other methods like `checkOption`, and `click` work in a similar manner. They can take labels or CSS or XPath locators to find elements to interact.

### Assertions

Assertions start with `see` or `dontSee` prefix. In our case we are asserting that string 'User is valid' is somewhere in a webpage.
However, we can narrow the search to particular element by providing a second parameter:

```js
I.see('User is valid');
// better to specify context:
I.see('User is valid', '.alert-success');
```

In this case 'User is valid' string will be searched only inside elements located by CSS `.alert-success`.

### Grabbers

In case you need to return a value from a webpage and use it directly in test, you should use methods with `grab` prefix.
They are expected to be used inside `async/await` functions, and their results will be available in test:

```js
Feature('CodeceptJS Demonstration');

Scenario('test page title', async ({ I }) => {
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
  const title = await I.grabTitle();
  I.expectEqual(title, 'Example application with SimpleForm and Twitter Bootstrap'); // Avaiable with Expect helper. -> https://codecept.io/helpers/Expect/
});
```

The same way you can grab text, attributes, or form values and use them in next test steps.

### Before/After

Common preparation steps like opening a web page, logging in a user, can be placed in `Before` or `Background`:

```js
const { I } = inject();

Feature('CodeceptJS Demonstration');

Before(() => { // or Background
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
});

Scenario('test some forms', () => {
  I.click('Create User');
  I.see('User is valid');
  I.dontSeeInCurrentUrl('/documentation');
});

Scenario('test title', () => {
  I.seeInTitle('Example application');
});
```

## PageObjects

CodeceptJS provides the most simple way to create and use page objects in your test.
You can create one by running

```sh
npx codeceptjs generate pageobject
```

It will create a page object file for you and add it to the config.
Let's assume we created one named `docsPage`:

```js
const { I } = inject();

module.exports = {
  fields: {
    email: '#user_basic_email',
    password: '#user_basic_password'
  },
  submitButton: {css: '#new_user_basic input[type=submit]'},

  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  }
}
```

You can easily inject it to test by providing its name in test arguments:

```js
Feature('CodeceptJS Demonstration');

Before(({ I }) => { // or Background
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
});

Scenario('test some forms', ({ I, docsPage }) => {
  docsPage.sendForm('hello@world.com','123456');
  I.see('User is valid');
  I.dontSeeInCurrentUrl('/documentation');
});
```

When using Typescript, replace `module.exports` with `export` for autocompletion.


## Contributing

 - ### [Contributing Guide](https://github.com/codeceptjs/CodeceptJS/blob/master/.github/CONTRIBUTING.md)
 - ### [Code of conduct](https://github.com/codeceptjs/CodeceptJS/blob/master/.github/CODE_OF_CONDUCT.md) 


## Contributors



<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
  
<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/DavertMik" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/220264?v=4" width="100" height="100" style="border-radius: 50%;" alt="DavertMik">
  </a>
  <br>
  <a href="https://github.com/DavertMik" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>DavertMik</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/kobenguyent" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/7845001?v=4" width="100" height="100" style="border-radius: 50%;" alt="kobenguyent">
  </a>
  <br>
  <a href="https://github.com/kobenguyent" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>kobenguyent</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/Vorobeyko" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/11293201?v=4" width="100" height="100" style="border-radius: 50%;" alt="Vorobeyko">
  </a>
  <br>
  <a href="https://github.com/Vorobeyko" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>Vorobeyko</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/reubenmiller" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/3029781?v=4" width="100" height="100" style="border-radius: 50%;" alt="reubenmiller">
  </a>
  <br>
  <a href="https://github.com/reubenmiller" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>reubenmiller</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/Arhell" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/26163841?v=4" width="100" height="100" style="border-radius: 50%;" alt="Arhell">
  </a>
  <br>
  <a href="https://github.com/Arhell" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>Arhell</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/APshenkin" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/14344430?v=4" width="100" height="100" style="border-radius: 50%;" alt="APshenkin">
  </a>
  <br>
  <a href="https://github.com/APshenkin" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>APshenkin</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/fabioel" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/9824235?v=4" width="100" height="100" style="border-radius: 50%;" alt="fabioel">
  </a>
  <br>
  <a href="https://github.com/fabioel" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>fabioel</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/pablopaul" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/635526?v=4" width="100" height="100" style="border-radius: 50%;" alt="pablopaul">
  </a>
  <br>
  <a href="https://github.com/pablopaul" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>pablopaul</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/mirao" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/12584138?v=4" width="100" height="100" style="border-radius: 50%;" alt="mirao">
  </a>
  <br>
  <a href="https://github.com/mirao" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>mirao</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/Georgegriff" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/9056958?v=4" width="100" height="100" style="border-radius: 50%;" alt="Georgegriff">
  </a>
  <br>
  <a href="https://github.com/Georgegriff" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>Georgegriff</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/KMKoushik" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/24666922?v=4" width="100" height="100" style="border-radius: 50%;" alt="KMKoushik">
  </a>
  <br>
  <a href="https://github.com/KMKoushik" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>KMKoushik</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/nikocanvacom" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/83254493?v=4" width="100" height="100" style="border-radius: 50%;" alt="nikocanvacom">
  </a>
  <br>
  <a href="https://github.com/nikocanvacom" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>nikocanvacom</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/elukoyanov" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/11647141?v=4" width="100" height="100" style="border-radius: 50%;" alt="elukoyanov">
  </a>
  <br>
  <a href="https://github.com/elukoyanov" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>elukoyanov</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/gkushang" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/3663389?v=4" width="100" height="100" style="border-radius: 50%;" alt="gkushang">
  </a>
  <br>
  <a href="https://github.com/gkushang" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>gkushang</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/thomashohn" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/3414869?v=4" width="100" height="100" style="border-radius: 50%;" alt="thomashohn">
  </a>
  <br>
  <a href="https://github.com/thomashohn" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>thomashohn</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/tsuemura" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/17092259?v=4" width="100" height="100" style="border-radius: 50%;" alt="tsuemura">
  </a>
  <br>
  <a href="https://github.com/tsuemura" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>tsuemura</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/EgorBodnar" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/63167966?v=4" width="100" height="100" style="border-radius: 50%;" alt="EgorBodnar">
  </a>
  <br>
  <a href="https://github.com/EgorBodnar" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>EgorBodnar</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/VikalpP" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/11846339?v=4" width="100" height="100" style="border-radius: 50%;" alt="VikalpP">
  </a>
  <br>
  <a href="https://github.com/VikalpP" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>VikalpP</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/elaichenkov" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/29764053?v=4" width="100" height="100" style="border-radius: 50%;" alt="elaichenkov">
  </a>
  <br>
  <a href="https://github.com/elaichenkov" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>elaichenkov</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/BorisOsipov" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/6514276?v=4" width="100" height="100" style="border-radius: 50%;" alt="BorisOsipov">
  </a>
  <br>
  <a href="https://github.com/BorisOsipov" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>BorisOsipov</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/ngraf" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/7094389?v=4" width="100" height="100" style="border-radius: 50%;" alt="ngraf">
  </a>
  <br>
  <a href="https://github.com/ngraf" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>ngraf</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/nitschSB" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/39341455?v=4" width="100" height="100" style="border-radius: 50%;" alt="nitschSB">
  </a>
  <br>
  <a href="https://github.com/nitschSB" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>nitschSB</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/hubidu" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/13134082?v=4" width="100" height="100" style="border-radius: 50%;" alt="hubidu">
  </a>
  <br>
  <a href="https://github.com/hubidu" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>hubidu</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/jploskonka" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/669483?v=4" width="100" height="100" style="border-radius: 50%;" alt="jploskonka">
  </a>
  <br>
  <a href="https://github.com/jploskonka" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>jploskonka</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/maojunxyz" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/28778042?v=4" width="100" height="100" style="border-radius: 50%;" alt="maojunxyz">
  </a>
  <br>
  <a href="https://github.com/maojunxyz" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>maojunxyz</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/abhimanyupandian" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/36107381?v=4" width="100" height="100" style="border-radius: 50%;" alt="abhimanyupandian">
  </a>
  <br>
  <a href="https://github.com/abhimanyupandian" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>abhimanyupandian</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/martomo" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/1850135?v=4" width="100" height="100" style="border-radius: 50%;" alt="martomo">
  </a>
  <br>
  <a href="https://github.com/martomo" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>martomo</strong>
  </a>
</div>
      

<div style="text-align: center; margin: 10px;">
  <a href="https://github.com/hatufacci" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/4963181?v=4" width="100" height="100" style="border-radius: 50%;" alt="hatufacci">
  </a>
  <br>
  <a href="https://github.com/hatufacci" target="_blank" style="text-decoration: none; color: inherit;">
    <strong>hatufacci</strong>
  </a>
</div>
      
</div>
    
