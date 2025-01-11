

export const validateData = (email,password,mobileNumber) => {
    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const isMobileNumberValid = /^([a-fA-F0-9 ]+)$/.test(mobileNumber);

    if(!isEmailValid) return "Invalid Email"
    if(!isPasswordValid) return "Invalid Password"
    if(!isMobileNumberValid) return "Invalid Mobile Number"


    return null;

}
