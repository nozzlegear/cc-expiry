/**
 * Formats a credit card expiry string to MM / YY or MM / YYYY format.
 * @param expiry The expiry string to format.
 * @parm withSpaces Whether the output should have spaces surrounding the slash (e.g. MM / YY vs. MM/YY)
 * @param yearLength Optional, the length to allow for year digits. Can be 2 or 4.
 */
export declare function format(expiry: string, withSpaces?: boolean, yearLength?: number): string;
