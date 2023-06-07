import styles from './MenuList.module.scss';

// interface MenuListProps{
//     toggleShowMenu():void
// }{toggleShowMenu}:MenuListProps


export default function MenuList(){
    

    return (
        <ul className={styles.MenuList}>
            
            <li className={styles.About}>
                <a href='/#about'>ABOUT</a>
            </li>

            <li className={styles.Projects}>
                <a href='projects'>PROJECTS</a>
            </li>

            <li className={styles.Contact}>
                <a href='/#contact'>CONTACT</a>
            </li>   

            <li className={styles.Resume}>
                <a href={'resume.pdf'} download={'LielBidago_Resume.pdf'}>RESUME</a>
            </li>   
                            
        </ul>)
}

