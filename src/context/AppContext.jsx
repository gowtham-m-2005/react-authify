import React, {useState, createContext, useEffect} from "react";
import {AppConstants} from "../util/Constants.js";
import {toast} from "react-toastify";
import axios from "axios";

axios.defaults.withCredentials = true;

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const backendURL = AppConstants.BACKEND_URL
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)

    const getUserData = async () => {
        try{
            const response = await axios.get(backendURL + "/profile")
            if(response.status === 200){
                setUserData(response.data)
                setIsLoggedIn(true)
            }else {
                toast.error("Unable to retrieve user data")
            }
        }catch (e) {
            if(e.response?.status === 401){
                setUserData(null)
                setIsLoggedIn(false)
            } else {
                toast.error(e.message)
            }
        }
    }

    const getAuthState = async () => {
        try{
            const response = await axios.get(backendURL + "/is-authenticated")
                if (response.status === 200 && response.data === true) {
                    setIsLoggedIn(true)
                    await getUserData()
                } else {
                    setIsLoggedIn(false)
                    setUserData(null)
                }
            }
            catch (error){
                console.error(error)
            }
        }

    useEffect(() => {
        getAuthState()
    }, []);

    const contextValue = {
        backendURL,
        isLoggedIn,setIsLoggedIn,
        userData, setUserData, getUserData
    }
    return(
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}