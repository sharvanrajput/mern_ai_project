import User from "../models/usesModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/token.js";

export const signup = async (req, res) => {
    try {
        const { name, email, role, password } = req.body;

        const existingUser = await User.findOne({ email })

        if (existingUser) res.status(400).send({ message: "User already exists" })

        if (!validator.isEmail(email)) return res.status(400).send({ message: "Invalid email format" });

        if (password.length < 8) return res.status(400).send({ message: "Password must be at least 8 characters long" });

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({ name, email, role, password: hashedPassword })

        const token = await generateToken(user._id)

        res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

        res.status(201).send({ message: "User created successfully", user });
    } catch (error) {
        console.error("Error during signup:", error)
        res.status(500).send({ message: "signup error" })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) return res.status(400).send({ message: "User not found" })

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) return res.status(400).send({ message: "Invalid Password" })

        const token = await generateToken(user._id)

        res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "strict", maxAge: 7 * 24 * 60 * 60 * 1000 });

        res.status(200).send({ message: "Login successful", user });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({ message: "Login error" });
    }

}

export const logout = async (req, res) => {
    try {
       await res.clearCookie("token");
        res.status(200).send({ message: "Logout successful" });
    } catch (error) {
        console.error("Error during logout:", error);
        res.status(500).send({ message: "Logout error" });
    }
}