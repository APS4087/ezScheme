import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth.context";
import { data } from "autoprefixer";


const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async ({ firstName, lastName, userName, password, confirmPassword, gender }) => {
        //console.log(firstName, lastName)
		const success = handleInputErrors({ firstName, lastName, userName, password, confirmPassword, gender });
        //console.log(success);
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ firstName, lastName, userName, password, confirmPassword, gender }),
			});
            
			try {
                const data = await res.json();
                console.log(data);
                // Process data
            } catch (error) {
                
                console.error("Error parsing JSON response:", error);
                // Handle error gracefully, e.g., display a generic error message to the user
            }
            
            console.log(data)
			if (data.error) {
                console.log("inside error")
				throw new Error(data.error);
			}
            localStorage.setItem("sys-user", JSON.stringify(data))
            
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ firstName, lastName, userName, password, confirmPassword, gender }) {
    //console.log("1")
	if (!firstName || !lastName || !userName || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}
    //console.log("2")

	if (password !== confirmPassword) {
      //  console.log("inside password check")
		toast.error("Passwords do not match");
		return false;
	}
    //console.log("3")
	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}