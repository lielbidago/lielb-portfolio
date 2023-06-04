'use client'
import styles from './Header.module.scss';
import img from '../../public/bg2.jpg';
import MenuList from './MenuList';
import { useState } from 'react';
import Menu from './Menu';


export default function Header(){
    const [showMenu, setShowMenu] = useState(false)
    const toggleShowMenu = () => {setShowMenu(!showMenu)}

    return (
        <>        
            <header className={styles.Header}>
                <div className={styles.logo}>
                <a href='/'><h1>lielb.</h1></a> 
                </div>

                <nav className={styles.NavBar}>

                    {!showMenu && <button className={styles.menuButton} onClick={()=>{toggleShowMenu()}}>
                        <svg width="28" height="17" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
                    </button>}
                    <MenuList/>
                </nav>
                
            </header>
            {showMenu && <Menu toggleShowMenu={toggleShowMenu}/>}
        </>

        
    )
}