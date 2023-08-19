"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLocaleNumber = void 0;
function parseLocaleNumber(stringNumber, locale) {
    let thousandSeparator = Intl.NumberFormat(locale)
        .format(11111)
        .replace(/\p{Number}/gu, "");
    let decimalSeparator = Intl.NumberFormat(locale)
        .format(1.1)
        .replace(/\p{Number}/gu, "");
    return parseFloat(stringNumber
        .replace(new RegExp("\\" + thousandSeparator, "g"), "")
        .replace(new RegExp("\\" + decimalSeparator), "."));
}
exports.parseLocaleNumber = parseLocaleNumber;
