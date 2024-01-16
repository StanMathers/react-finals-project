
import React, { useState, useEffect } from 'react';

const useTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || 'light';

    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;