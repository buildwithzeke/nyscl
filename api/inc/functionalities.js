
//function to validate callup Number
export const validateCallup = ( callup ) => {
    
    const capCallup = callup.toUpperCase();
    // Example format: NYSC/ODT/2024/1199640
    const regex = /^NYSC\/[A-Z]{3}\/\d{4}\/\d{6}$/;

    //check input is empty
    if(!regex.test(capCallup)) return false; // Invalid call-up number
    return true; // Valid call-up number
}