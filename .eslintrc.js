module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "max-lines-per-function": [
            "error",
            {
                "max": 20,
                "skipBlankLines": true,
                "skipComments": true
            }
        ],
        "max-len": [
            "error",
            {
                "code": 120,
                "ignoreComments": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],	
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
