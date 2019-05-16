# getting-started

#Nodejs 10+
# Loopback 4
```
npm install -g @loopback/cli
```

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

# eslint
Run eslint.
```
npm run -s eslint .
```
# simple rules
We use eslint best practice. [link](https://eslint.org/docs/rules/).
Beside all of the recommand we have some custome rules.
- "no-multiple-empty-lines": "warn",
- "no-var": "error",
- "prefer-const": "error"

# vs code extentions.

- eslint
Add this code to your setting.json for eslint check typescript files.
setting.json
```
   "eslint.validate": [
        "javascript",
        "typescript"
    ]
```
# Nodemon for run app and auto restart if change.
```
nodemon index.js
```
[check your app](http://localhost:3000/)

# Good news.
Developer only need to focus on code. No need to care about database as we use LB in-memory db.

