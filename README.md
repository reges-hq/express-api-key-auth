express-error-handler
=========

A api key auth

## Installation

`npm install @reges-hq/express-api-key-auth`

Or with yarn

`yarn add @reges-hq/express-api-key-auth`


## Usage

In your applications main entry point add:

```javascript
const auth = require('@reges-hq/express-api-key-auth');

const key = 'something'
app.use(auth(key));
```