import jwt from "jsonwebtoken"

export const generateToken = async (userid) => {
    try {
        const token = await jwt.sign({ id: userid }, process.env.JWT_SECRET, { expiresIn: "7d" })
        console.log(token)
        return token
    } catch (error) {
        console.error("Error generating token:", error)
    }
}
