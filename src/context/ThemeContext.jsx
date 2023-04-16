import { createContext, useReducer } from "react";


export const ThemeContext = createContext();

const INITIAL_STATE = {darkMode:false};

const themeReducer = (state, action)=>{
switch (action.type){
    case "TOGGLE": 
    return {darkMode: !state.darkMode};
    default:  return state; //false
}
}

const ThemeContextProvider =(props)=>{
    const [ state, dispatch] = useReducer(themeReducer, INITIAL_STATE);// above state is different from this one ....square brackets
    return(
        <ThemeContext.Provider value={{state, dispatch}}> 
        {/* this state is the state in useReducer */}
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;