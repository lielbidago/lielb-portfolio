'use client'
import styles from './Header.module.scss';
import MenuList from './MenuList';
import { useState } from 'react';
import Menu from './Menu';
import ThemeToggle from './ThemeToggle';


export default function Header(){
    const [showMenu, setShowMenu] = useState(false);
    const toggleShowMenu = () => {setShowMenu(!showMenu)};
    const [theme, setTheme] = useState('light');

    return (
        <>        
            <header className={styles.Header+` `+theme}>
                <div className={styles.logo}>
                    <a href='/' aria-label='home page link'><h1>Lielb.</h1></a> 
                </div>
                <ThemeToggle theme={theme} setTheme={setTheme}/>

                <nav className={styles.NavBar}>

                    {!showMenu && <button className={styles.menuButton} aria-label='menu button' onClick={()=>{toggleShowMenu()}}>
                        <svg width="28" height="17" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
                    </button>}
                    <MenuList />
                </nav>
                
            </header>
            {showMenu && <Menu toggleShowMenu={toggleShowMenu} theme={theme} setTheme={setTheme}/>}
        </>

        
    )
}