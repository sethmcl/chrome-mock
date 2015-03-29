# chrome-mock

Chrome API mocking library.

```
npm install chrome-mock
```

[![Build Status](https://travis-ci.org/sethmcl/chrome-mock.svg?branch=master)](https://travis-ci.org/sethmcl/chrome-mock)
[![Coverage Status](https://img.shields.io/coveralls/sethmcl/chrome-mock.svg)](https://coveralls.io/r/sethmcl/chrome-mock?branch=master)

# usage

In most cases you will want to set this as a global at the top of your test file, because chrome is a global in your extension code.

```
chrome = require('chrome-mock')
```

# i18n

To use the I18n library, chrome-mock loads a default messages.json file that has only one string in it, 'test'
If you pass a string that does not exist, you will receive a blank string back.  

If you want to load a different messages.json file, for example the one you use in your chrome extension then use 
the method below in your test file.

```
chrome.setMessagesPath(path)
```