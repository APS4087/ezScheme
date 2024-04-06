import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth.context";
import { useNavigate } from 'react-router-dom';

const useAddAdditionalInfo = () => {
    const [loading, setLoading] = useState(false);
    const { authUser, updateAuthUser } = useAuthContext(); // Use the updateAuthUser function
    const [redirectToHome, setRedirectToHome] = useState(false); // State to manage redirection
    //const { authUser } = useAuthContext(); // Assuming you have access to the authenticated user
    const navigate = useNavigate();

    const addingInfo = async (additionalInfo, fromSignupPage) => {
        const success = handleInputErrors(additionalInfo);
        if (!success) return;

        setLoading(true);
        try {
            if (authUser) {
                // If coming from the signup page and user is logged in, save to DB
                const res = await fetch("api/users/additional-Info", {
                    method: "POST", 
                    headers: { 
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authUser.token}` // Assuming you have a token in authUser
                    },
                    body: JSON.stringify(additionalInfo),
                });

                if (!res.ok) {
                    throw new Error("Failed to add additional information");
                }

                const data = await res.json();
                const updatedUserData = { additionalInfo };
                updateAuthUser(updatedUserData);
            } else {
                // Otherwise, save to session storage
                sessionStorage.setItem('additionalInfo', JSON.stringify(additionalInfo));
            }

            // Redirect to home page
            navigate('/');
            
            toast.success("Additional information added successfully");
        } catch (error) {
            console.error("Error adding additional information:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, addingInfo };
};

function handleInputErrors(additionalInfo) {
    const { businessName, sector, subSector, yrsInOperation, numberOfEmployees, annualSalesTurnover, percentageOfSingapore_PR_owned, registered_in_sg, GST_registered_business } = additionalInfo;

    if (!businessName || !sector || !subSector || !yrsInOperation || !numberOfEmployees || !annualSalesTurnover || !percentageOfSingapore_PR_owned || !registered_in_sg || !GST_registered_business) {
        toast.error("Please fill in all fields except Unique Entity Number");
        return false;
    }

    return true;
}



export default useAddAdditionalInfo;
