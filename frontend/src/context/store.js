import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [user, setUser] = useState('');
    let [baseUrl] = useState('http://localhost:3050/api/v1');

    let states = {
        userinfo: [user, setUser],
        url: [baseUrl],
    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;