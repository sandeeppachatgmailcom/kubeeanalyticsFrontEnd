import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRouter from "../hooks/useRouter";
import axiosApi from "../api/axiosApi";
import { userApi } from "../api/apiPaths";
import { login } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useRouter()
    const dispatch = useDispatch()
    const [error,setError] = useState('') 
    const user = useSelector((state)=>state.user.user)
    const handlesignup = ()=>{
        navigate('signup')
    } 
    useEffect(()=>{
        console.log(Object.keys(user).length ,'Object.keys(user).length ')
        
    },[user])
    const handleSubmit = async(e) => {
        e.preventDefault();
        const result = await axiosApi.post(userApi.userLogin,{email,password},{withCredentials:true})
        console.log(result,'result')
        if(result.data.result){
            dispatch(login(result.data))
            navigate('homePage') 
        }
        else{
            setError(result.data.message)
        }
        console.log("Logging in with:", { email, password });
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <h2 id="sandeep" className="text-2xl font-bold text-center text-gray-500">
                    Sign In
                </h2>
                <h2 className="text-sm text-center text-red-500">
                {error}
                </h2>

                <form className="space-y-6 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                    <div className="w-11/12 flex flex-col">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            placeholder="yourmail@email.com"
                        />
                    </div>

                    <div className="w-11/12 flex flex-col">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className=" w-11/12 md:flex-row flex-col flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-5/12  px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        Sign in
                    </button>
                </form>

                <p className="mt-2 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <a onClick={()=>handlesignup()}  className="font-medium text-blue-600 hover:text-blue-500">
                        Sign up here
                    </a>
                </p>
            </div>
        </div>
    )
}


export default Login