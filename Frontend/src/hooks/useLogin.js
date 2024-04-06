import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth.context";
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();

	const login = async (userName, password) => {
		const success = handleInputErrors(userName, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userName, password }),
			});
            console.log(userName, password);
            
            
			
            const data = await res.json();
                console.log(data);
                // Process data
            
			if (data.error) {
				throw new Error(data.error);
			}
            console.log("here")
			localStorage.setItem("sys-user", JSON.stringify(data));
			setAuthUser(data);
            //navigate('/hm')

		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
