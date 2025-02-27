import React, { useContext } from 'react';
import { ThemeContext } from '..//Themecontext'; // Ensure the correct import path

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className="p-2 rounded focus:outline-none">
            {theme === 'light' ? (
                // Sun Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.636 18.364l-1.414 1.414M17.657 17.657l-1.414-1.414M6.343 6.343l-1.414-1.414" />
                </svg>
            ) : (
                // Moon Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.657 0 3.164-.5 4.414-1.414A6.978 6.978 0 0019 12c0-3.866-3.134-7-7-7z" />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;