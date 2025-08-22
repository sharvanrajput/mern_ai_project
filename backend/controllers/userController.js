import User from "../models/userModel.js";

export const getCurrentuser = async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select("-password")
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(user)

    } catch (error) {
        console.log(error)
    }
}
