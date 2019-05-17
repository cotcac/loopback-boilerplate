# getting-started

# Nodejs 10 recommended.
# Loopback 4
```
npm install -g @loopback/cli
```
# Development
## dataSource
The dataSource already there so no need to touch it.
## editor Config
We use editorConfig to standardize text editor configuration.
Visit [https://editorconfig.org/](https://editorconfig.org/) for more information.

## coding convention.
File naming: use dashes ex:hello-world.ts
Code naming: lower Camel case: ex: helloWorld

## Spell check extension.
by street side software.

## eslint
Run eslint.
```
npm run -s eslint .
```
## simple rules
We use eslint best practice. [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/).
Beside all of the recommended we have some customs rules.
- "no-multiple-empty-lines": "warn",
- "no-var": "error",
- "prefer-const": "error"

## vs code extensions.

- eslint
Add this code to your setting.json for eslint check typescript files.
setting.json
```
   "eslint.validate": [
        "javascript",
        "typescript"
    ]
```
## Nodemon for run app and auto restart if change.
```
npm start
//Test your code with mysql.
NODE_ENV=production npm start

```
[http://localhost:3000/](http://localhost:3000/)

# Good news.
Developer only need to focus on code. No need to care about database as we use LB in-memory db.

# Production
- If you don't want to know you can just ignore this part.
##.env
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=11111111
DB_DATABASE=lb4
```

