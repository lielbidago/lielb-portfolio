import styles from './Header.module.scss';
import img from '../../public/bg1.jpg';

export default function Header(){
    return (
        <header className={styles.Header}>
            <div className={styles.logo}>
            <a href='/'><h1>lielb.</h1></a> 
            </div>
            <nav className="NavBar">
                <ul>
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
                                   
                </ul>
            </nav>
        </header>
    )
}