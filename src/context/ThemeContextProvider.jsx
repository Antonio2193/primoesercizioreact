import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isSearchDisabled, setIsSearchDisabled }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
