import { createContext, useEffect, useState } from "react";
import axios from "axios";
const Context = createContext();
const AppContext = ({ children }) => {
    const [array, setArray] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/doctors").then((res) => {
            setArray(res.data);
            console.log(res.data);
        });
    }, []);
    return (
        <Context.Provider
            value={{
                array
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, AppContext }; 
