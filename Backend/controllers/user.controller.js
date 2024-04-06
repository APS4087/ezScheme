import User from "../models/user.model.js";
import AdditionalInfo from "../models/additionDetails.model.js";


export const getUser = async (req, res) => {

    try {

        const logInUserID = req.user._id;
        const allUsers_notCurrent = await User.find({_id: {$ne: logInUserID}}).select("-password");  // find all users except logInUser // doesn't send password with select

        res.status(200).json(allUsers_notCurrent)
    } catch (error) {
        console.error("Error in user Controller: ", error.message);
        res.status(500).json({error: "Internal Server Error !"});
    }
}

// Controller function to add additional information
export const addAdditionalInfo = async (req, res) => {
    try {
        const userId = req.user._id; // Extract user ID from the authenticated user object
        const {
            businessName,
            uniqueEntityNumber,
            sector,
            subSector,
            yrsInOperation,
            numberOfEmployees,
            annualSalesTurnover,
            percentageOfSingapore_PR_owned,
            registered_in_sg,
            GST_registered_business
        } = req.body;

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if additional information already exists for the user
        if (user.additionalInfo) {
            return res.status(400).json({ error: "Additional information already provided for this user" });
        }

        // Create additional information object
        const additionalInfo = new AdditionalInfo({
            businessName,
            uniqueEntityNumber,
            sector,
            subSector,
            yrsInOperation,
            numberOfEmployees,
            annualSalesTurnover,
            percentageOfSingapore_PR_owned,
            registered_in_sg,
            GST_registered_business
        });

        await additionalInfo.save();

        // Link additional info to the user
        user.additionalInfo = additionalInfo._id;
        await user.save();

        res.status(201).json({ message: "Additional information added successfully", additionalInfo });
    } catch (error) {
        console.error("Error in addAdditionalInfo controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};