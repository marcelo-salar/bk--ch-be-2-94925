import bcrypt from "bcrypt" ;

const SALT_ROUND = 10;

// hashea contraseña

export const createHash  = async (password) => {
    return await bcrypt.hash(password, SALT_ROUND);
}

export const isValidPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
} 