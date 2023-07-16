'use client'

import { useCallback, useState } from "react";

export default function useTheme(){

    const getMediaPrefrenceColorScheme = useCallback(() => {
        const prefrenceQuery = window.matchMedia("(prefers-color-scheme: light)");
        if (prefrenceQuery && prefrenceQuery.matches){
            setTheme('light');
        }
    },[]);

    const [theme, setTheme] = useState('dark');


    return {theme, setTheme, getMediaPrefrenceColorScheme }
}