module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "plugin:i18next/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
    ],
    rules: {
        "linebreak-style": 0,
        quotes: [2, "double"],
        indent: [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "max-len": ["error", { ignoreComments: true, code: 100 }],

        "react/jsx-props-no-spreading": "warn",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-shadow": "off",
        "react/require-default-props": "off",
        "react/function-component-definition": "off",
        "no-underscore-dangle": "warn",
        "i18next/no-literal-string": [
            "error",
            { markupOnly: true, ignoreAttribute: ["data-testid", "to"] },
        ],

        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".tsx"] },
        ],
        "react/react-in-jsx-scope": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ["**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
};
