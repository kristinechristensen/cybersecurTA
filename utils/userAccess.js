import bcrypt from 'bcrypt'; 

//number of times to salt encrypted pw
const SALT = 10; 

//create function to hash the password
export const hashPassword = async(password) => {
    return await bcrypt.hash(password,SALT);
}

//create function to check the password
export const comparePassword = async(password,hashed) => {
    return await bcrypt.compare(password,hashed)
}



