import styles from './Menu.module.scss';
import MenuList from './MenuList';
import ThemeToggle from './ThemeToggle';

interface MenuProps{
    toggleShowMenu():void,
    setTheme(themeNew:string):void,
    theme:string
}
export default function Menu({toggleShowMenu, setTheme, theme}:MenuProps){
    
    
    return (
        <div>
            <div onClick={()=>{toggleShowMenu()}} className={styles.MenuBg}></div>
            <div className={styles.Menu+' glass'}>
                <span onClick={()=>{toggleShowMenu()}} className={styles.close}>&times;</span>
                <div className={styles.themeContainer}>
                    <ThemeToggle theme={theme} setTheme={setTheme}/>  
                </div>

                <div onClick={()=>{toggleShowMenu()}}><MenuList/></div>
            </div>
        </div>
    )
}