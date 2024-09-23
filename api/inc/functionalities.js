
//function to validate callup Number
export const validateCallup = ( callup ) => {

    // Example format: NYSC/ODT/2024/119640
    const regex = /^NYSC\/[A-Z]{3}\/\d{4}\/\d{6}$/;

    // check its typpe of string
    if (typeof callup !== 'string') return false;

    // Trim whitespace and convert to uppercase
    const capCallup = callup.trim().toUpperCase();

    // check user input
    const check = regex.test(capCallup);

    //check input is empty
    if(check) return true; // Valid call-up number

    return false; // Invalid call-up number 
}