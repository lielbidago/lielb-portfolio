import Project from "../_components/Project";
import { projects } from "../projectsList";
import styles from './page.module.scss';

export default function Projects(){
    return (
        <main className={styles.mainContainer}>
            <div className={styles.mainContent+' glass'}>
            <h1 className={styles.title+' pageHeader'}>My Projects</h1>
            <div className={styles.projectsMain}>
               {projects.map((p, index)=> <Project project={p} key={index}/>)} 
            </div>                
            </div>

            
        </main>
    )
}