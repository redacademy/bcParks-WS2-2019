import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const initialState = {
        id: null,
        email: null
    }
    console.log("init user provider")
    const [user, setUser] = useState(initialState);



    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
};
export { AuthProvider };
export default AuthContext;