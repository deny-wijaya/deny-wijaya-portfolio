import {useEffect, useState} from 'react';

export default function useDarkMode() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('darkMode');
            setIsDark(saved === 'true'); // Convert string to boolean
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const html = document.documentElement;

            if (isDark) {
                html.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            } else {
                html.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
        }
    }, [isDark]);

    return [isDark, setIsDark] as const;
}
