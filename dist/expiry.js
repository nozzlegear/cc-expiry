"use strict";
/**
 * Formats a credit card expiry string to MM / YY or MM / YYYY format.
 * @param expiry The expiry string to format.
 * @parm withSpaces Whether the output should have spaces surrounding the slash (e.g. MM / YY vs. MM/YY)
 * @param yearLength Optional, the length to allow for year digits. Can be 2 or 4.
 */
function format(expiry, withSpaces, yearLength) {
    if (withSpaces === void 0) { withSpaces = true; }
    if (yearLength === void 0) { yearLength = 2; }
    //Yearlength must be 2 or 4
    if (yearLength !== 2)
        yearLength = 4;
    if (!expiry)
        expiry = "";
    var digitSearch = /\D/g;
    var expiryMaxLength = 2 + yearLength;
    //Replace non-numeric characters
    expiry = expiry.replace(digitSearch, "");
    // Only add the slash after the 3rd digit. Adding on the second can prevent backspaces 
    // in some cases (e.g. when expiry is connected to a React state).
    if (expiry.length >= 3) {
        var separator = withSpaces ? " / " : "/";
        expiry = expiry.slice(0, 2) + separator + expiry.slice(2, expiryMaxLength);
    }
    return expiry;
}
exports.format = format;
