import img from '../../public/bg2.jpg';
import styles from './MenuList.module.scss';

export default function MenuList(){
    return (
        <ul className={styles.MenuList}>
            
            <li className={styles.About}>
                <a href='/#about'>About</a>
            </li>

            <li className={styles.Projects}>
                <a href='projects'>Projects</a>
            </li>

            <li className={styles.Contact}>
                <a href='/#contact'>Contact</a>
            </li>   

            <li className={styles.Resume}>
                <a href={img.src} download>Resume</a>
            </li>   
                            
        </ul>)
}