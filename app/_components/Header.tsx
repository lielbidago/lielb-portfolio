import styles from './Header.module.scss';

export default function Header(){
    return (
        <header className={styles.Header}>
            <div className={styles.logo}>
            <a href='/'><h1>lielb.</h1></a> 
            </div>
            <nav className="NavBar">
                <ul>
                    <li className="About">
                        <a href='#about'>About</a>
                    </li>

                    <li className="Projects">
                        <a href='projects'>Projects</a>
                    </li>

                    <li className="Contact">
                        <a href='#contact'>Contact</a>
                    </li>   

                    <li className="Resume">
                        <a href='Resume'>Resume</a>
                    </li>   
                                   
                </ul>
            </nav>
        </header>
    )
}