import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/auth/authService";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const tokenDetails = JSON.parse(localStorage.getItem("userInfo"));
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(tokenDetails?.encodedToken);
  const [userDetails, setUserDetails] = useState(tokenDetails?.foundUser);
  const navigate = useNavigate();

  const onLoginHandler = (email, password) => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const {
          data: { encodedToken, foundUser },
        } = await loginService(email, password);

        if (encodedToken || foundUser) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ encodedToken, foundUser })
          );
          setToken(encodedToken);
          setUserDetails(foundUser);
          toast.success("user loggin in successfully");
          navigate("/");
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err.response.data);
        toast.error(err.response.data.errors[0]);
        setIsLoading(false);
      }
    }, 1000);
  };

  const signUpHandler = async (firstName, lastName, email, password) => {
    try {
    } catch (err) {}
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userDetails,
        isLoading,
        setIsLoading,
        onLoginHandler,
        signUpHandler,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
