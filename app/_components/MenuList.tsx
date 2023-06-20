import styles from './MenuList.module.scss';

export default function MenuList(){
    

    return (
        <ul className={styles.MenuList}>
            
            <li className={styles.About}>
                <a href='/#about' aria-label='about section link'>ABOUT</a>
            </li>

            <li className={styles.Projects}>
                <a href='/#projects' aria-label='projects section link'>PROJECTS</a>
            </li>

            <li className={styles.Contact}>
                <a href='/#contact' aria-label='contact section link'>CONTACT</a>
            </li>   

            <li className={styles.Resume}>
                <a href={'resume.pdf'} aria-label='resume download link' download={'LielBidago_Resume.pdf'}>RESUME</a>
            </li>   
                            
        </ul>)
}

