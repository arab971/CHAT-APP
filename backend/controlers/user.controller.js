import User from "../db/schemma.js";
export const getUsers = async(req, res) => {
    try {
        const logedin = req.user._id;
        const allUsers = await User.find({ _id: { $ne: logedin } }).select("-password");
        res.status(200).json(allUsers);
    } catch (error) {
      console.log("error in getuser controller", error.message)  
      res.status(500).json({ message: "internal server error" });
    }
}