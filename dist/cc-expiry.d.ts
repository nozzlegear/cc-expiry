/**
 * Formats a credit card expiry string to MM / YY or MM / YYYY format.
 * @param expiry The expiry string to format.
 * @param separator A string that should separate the months and years in result. Default: " / ".
 * @param yearLength Optional, the length to allow for year digits. Can be 2 or 4.
 */
export declare function format(expiry: string, separator: string, fourDigitYear: boolean): string;
