/**
 * Formats a credit card expiry string to MM / YY or MM / YYYY format.
 * @param expiry The expiry string to format.
 * @param separator A string that should separate the months and years in result. Default: " / ".
 * @param yearLength Optional, the length to allow for year digits. Can be 2 or 4.
 */
export function format(expiry: string, separator: string = " / ", fourDigitYear: boolean)
{
    //Separator must be a string
    if (typeof separator !== "string")
    {
        console.warn(`Invalid separator value of ${separator} passed to expiry.format function. Separator must be a string. Defaulting to " / ".`);
        
        separator = " / ";
    }
    
    //Expiry must exist
    if (!expiry) expiry = "";
    
    const digitSearch = /\D/g;
    const expiryMaxLength = 2 + (fourDigitYear ? 4 : 2);
    
    //Replace non-numeric characters
    expiry = expiry.replace(digitSearch, "");
    
    // Only add the separator after the 3rd digit. Adding on the second can prevent backspaces 
    // in some cases (e.g. when expiry is connected to a React state).
    if (expiry.length >= 3)
    {
        expiry = expiry.slice(0, 2) + separator + expiry.slice(2, expiryMaxLength);
    }
    
    return expiry;
}