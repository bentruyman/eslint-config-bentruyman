module.exports = {
  "root": true,
  "extends": "eslint:recommended",
  "env": {
    "es6": true,
   "node": true
  },
 "ecmaFeatures": {
   "arrowFunctions": true,
   "blockBindings": true,
   "classes": true,
   "forOf": true,
   "generators": true,
   "objectLiteralComputedProperties": true,
   "objectLiteralShorthandMethods": true,
   "objectLiteralShorthandProperties": true,
   "spread": true,
   "superInFunctions": true,
   "templateStrings": true
  },
 "globals": {
   "after": true,
   "afterEach": true,
   "before": true,
   "beforeEach": true,
   "console": true,
   "describe": true,
   "expect": true,
   "it": true,
   "xdescribe": true,
   "xit": true
  },
 "rules": {
    // Possible Errors
    "no-console": 0,

    // Best Practices
    "complexity": [2, 6],
    "consistent-return": 2,
    "curly": 2,
    "default-case": 2,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-caller": 2,
    "no-else-return": 2,
    "no-empty-label": 2,
    "no-empty-pattern": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [2, {"enforceConst": true }],
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 2,
    "no-process-env": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "no-with": 2,
    "wrap-iife": 2,
    "yoda": 2,

    // Variables
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-unused-vars": [2, {
     "args": "after-used",
     "argsIgnorePattern": "^next|reject|resolve|stderr|stdout"
    }],
    "no-use-before-define": [2, "nofunc"],

    // Node.js and CommonJS
    "callback-return": 2,
    "global-require": 2,
    "handle-callback-err": 2,
    "no-mixed-requires": [1, {"grouping": true }],
    "no-new-require": 2,
    "no-path-concat": 2,

    // Stylistic
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {"allowSingleLine": true }],
    "camelcase": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "consistent-this": [2, "self"],
    "eol-last": 2,
    "func-names": 2,
    "indent": [2, 2],
    "key-spacing": 2,
    "linebreak-style": 2,
    "lines-around-comment": [2,
      {
       "allowBlockStart": true,
       "allowArrayStart": true,
       "allowObjectStart": true,
       "beforeBlockComment": true,
       "beforeLineComment": true
      }
    ],
    "max-nested-callbacks": [2, 3],
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 2,
    "no-inline-comments": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, {"max": 1 }],
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [2, "always"],
    "one-var": [2, {"uninitialized": "always", "initialized": "never" }],
    "operator-linebreak": 2,
    "padded-blocks": [2, "never"],
    "quote-props": [2, "consistent-as-needed"],
    "quotes": 2,
    "semi-spacing": 2,
    "semi": 2,
    "sort-vars": [2, {"ignoreCase": true }],
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],
    "space-before-keywords": 2,
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "wrap-regex": 2,

    // ECMAScript 6
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "constructor-super": 2,
    "generator-star-spacing": 2,
    "no-arrow-condition": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": [2, "always"],
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-template": 2
  }
};
