import Project from "../_components/Project";
import { projects } from "../projectsList";
import styles from './page.module.scss';

export default function Projects(){
    return (
        <main>
            <h1 className={styles.title}>My Projects</h1>
            <div className={styles.projectsMain}>
               {projects.map((p, index)=> <Project project={p} key={index}/>)} 
            </div>
            
        </main>
    )
}