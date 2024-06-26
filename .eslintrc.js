{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    "ignorePatterns": [
        "**/test/*.js",
        "**/*.test.js"
    ],
        "extends": [
            "eslint:recommended"
        ],
        "parser": "@babel/eslint-parser",
        "plugins": [
                    "prettier"
        ],
        "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ],
        "no-console": "error",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off"
    }
}