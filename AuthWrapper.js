import { createContext, useContext, useState, useEffect } from "react";
import { RenderHeader } from "../components/structure/Header";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({ name: "", isAuthenticated: false });


    useEffect(() => {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userName, password) => {
        return new Promise((resolve, reject) => {
            if (password === "letmein") {
                const loggedInUser = { name: userName, isAuthenticated: true };
                setUser(loggedInUser);
                localStorage.setItem("authUser", JSON.stringify(loggedInUser)); 
                resolve("success");
            } else {
                reject("Incorrect password");
            }
        });
    };

    const logout = () => {
        const loggedOutUser = { name: "", isAuthenticated: false };
        setUser(loggedOutUser);
        localStorage.removeItem("authUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <>
                <RenderHeader />
                <RenderMenu />
                <RenderRoutes />
            </>
        </AuthContext.Provider>
    );
};
