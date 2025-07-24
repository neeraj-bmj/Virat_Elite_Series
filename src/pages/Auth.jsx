import { useState } from "react";
import { loginUser, registerUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required to filled data.");
      toast.error('Please fill vaild information.')
      return;
    }

    if (isLogin) {
      const isValid = loginUser(email, password);
      if (isValid) {
        navigate("/");
        toast.success("login successfull.")
      } else {
        setError("Invalid email or password. Please try again.");
        toast.error("Invalid email or password. Please try again.");
      }
    } else {
      registerUser(email, password);
      toast.success("Registered successfully! You can now log in.");
      setIsLogin(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-600 px-4">
      <div className="bg-gray-500 p-8 rounded-xl shadow-2xl w-full max-w-md transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-rose-800 mb-6">
          {isLogin ? "Please login here " : "Create Your Account"}
        </h1>
       {/* here show error if user enter invalid data*/}
        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded text-sm mb-4">
            {error}
          </p>
        )}
         
         {/* form */}
        <form onSubmit={handleSubmit} className="text-zinc-50 space-y-4">
          {/* this is input */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border-b px-4 py-2 outline-0"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
            
            {/* here is password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border-b px-4 py-2 outline-0"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
           
           {/* submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold text-lg py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setEmail("");
              setPassword("");
            }}
            className="text-red-600 hover:underline font-semibold"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}