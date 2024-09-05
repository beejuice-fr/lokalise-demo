import { formatter } from "@lingui/format-json"

module.exports = {
    locales: ["en", "ru"],
    sourceLocale: "en",
    catalogs: [
        {
            path: "<rootDir>/src/locales/{locale}/messages",
            include: ["src"]
        }
    ],
    format: formatter({ style: "minimal" }),
};