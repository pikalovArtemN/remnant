module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-idiomatic-order", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-declaration-block-no-ignored-properties"],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "selector-class-pattern": [
      "^\.[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$", {
        resolveNestedSelectors: true,
        message: (value) => `Класс ${value} не является на БЭМ-подобным`
      }
    ],
    "unit-disallowed-list": [["px"], {
      ignoreProperties: {
        "px": ["/width/", "/height/", "top", "right", "bottom", "left",  "$units", "$breakpoints"]
      },
      ignoreMediaFeatureNames: {
        "px": ["/width/", "/height/"]
      }
    }],
    "color-hex-length": "short",
    "no-unknown-animations": true,
    "max-nesting-depth": 6,
    "font-weight-notation": "numeric",
    "declaration-no-important": [true, {
      severity: "error"
    }],
    "scss/at-mixin-pattern": "^[a-z]+(_[a-z]+)*$",
    "scss/at-function-pattern": "^_?[a-z]+(-[a-z]+)*$",
    "scss/operator-no-newline-after": null,
  }
}
