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
            JSON.stringify({ encodedToken, user: foundUser })
          );
          setToken(encodedToken);
          setUserDetails(foundUser);
          toast.success(`Hi 👋, Welcome back ${foundUser.firstName}`);
          navigate("/");
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err.response?.data);
        toast.error(err.response?.data?.errors[0]);
        setIsLoading(false);
      }
    }, 1000);
  };

  const onLogoutHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("userInfo");
      setToken(null);
      setUserDetails(null);
      setIsLoading(false);
      navigate("/login");
    }, 1000);
  };

  const signUpHandler = (firstName, lastName, email, password) => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const {
          data: { encodedToken, createdUser },
        } = await signupService(firstName, lastName, email, password);

        if (encodedToken) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ encodedToken, user: createdUser })
          );
          setToken(encodedToken);
          setUserDetails(createdUser);
          toast.success("User signed up successfully");
          navigate("/");
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err.response?.data);
        toast.error(err.response?.data?.errors[0]);
        setIsLoading(false);
      }
    }, 1000);
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
        onLogoutHandler,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
