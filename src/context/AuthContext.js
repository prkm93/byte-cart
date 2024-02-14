import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/auth/authService";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginHandler = async (email, password) => {
    setIsLoading(true);
    try {
      const {
        data: { encodedToken, foundUser },
      } = await loginService(email, password);

      if (encodedToken) {
        localStorage.setItem("userInfo", encodedToken);
        toast.success("user loggin in successfully");
        navigate("/");
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err.response.data);
      toast.error(err.response.data.errors[0]);
      setIsLoading(false);
    }
  };

  const signUpHandler = async (firstName, lastName, email, password) => {
    try {
    } catch (err) {}
  };

  return (
    <AuthContext.Provider value={{ isLoading, onLoginHandler, signUpHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
