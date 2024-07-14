import jwt from 'jsonwebtoken'; 

//get the secret jwt pw
const jwtSecret = process.env.JWT_SECRET_PW; 

//user authentication - how long they should be logged in even if idle after an hour
export const generateToken = (data) =>{
    return jwt.sign(data, jwtSecret, {expiresIn: "24h"})
}

// helps with user log-in / with registration:  validate that the object token is mine and has NOT been altered
export const getData = (token) => {
    return jwt.verify(token, jwtSecret)    
}