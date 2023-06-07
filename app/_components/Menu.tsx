import styles from './Menu.module.scss';
import MenuList from './MenuList';

interface MenuProps{
    toggleShowMenu():void
}
export default function Menu({toggleShowMenu}:MenuProps){
    
    
    return (
        <div className={styles.MenuBg}>
            <div className={styles.Menu+' glass'}>
                <span onClick={()=>{toggleShowMenu()}} className={styles.close}>&times;</span>
                <div onClick={()=>{toggleShowMenu()}}><MenuList/></div>
                
            </div>
        </div>
    )
}