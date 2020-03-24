import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(initialState);

    const initialState = {
        id: null,
        email: null
    }

    const query = `query {
        User {
          id
          email
      }`;

    useEffect(() => {
        fetchData(query).then(data => {
            setUser(data.User);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
};
export { AuthProvider };
export default AuthContext;