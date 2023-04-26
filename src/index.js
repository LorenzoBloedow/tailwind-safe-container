const plugin = require("tailwindcss/plugin");

function addContainerOverflowKeywords ({ addUtilities }) {
    addUtilities({
        ".justify-center-safe": {
            "justify-content": "safe center",
        },
        ".justify-center-unsafe": {
            "justify-content": "unsafe center",
        },

        ".justify-items-center-safe": {
            "justify-items": "safe center",
        },
        ".justify-items-center-unsafe": {
            "justify-items": "unsafe center",
        },

        ".justify-self-center-safe": {
            "justify-self": "safe center",
        },
        ".justify-self-center-unsafe": {
            "justify-self": "unsafe center",
        },

        ".content-center-safe": {
            "align-content": "safe center",
        },
        ".content-center-unsafe": {
            "align-content": "unsafe center",
        },

        ".items-center-safe": {
            "align-items": "safe center",
        },
        ".items-center-unsafe": {
            "align-items": "unsafe center",
        },

        ".self-center-safe": {
            "align-self": "safe center",
        },
        ".self-center-unsafe": {
            "align-self": "unsafe center",
        }
    });
}

module.exports = plugin(addContainerOverflowKeywords);