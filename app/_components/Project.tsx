import { Iproject } from "../projectsList";
import styles from './Project.module.scss';
interface projectProps{
    project:Iproject
}

export default function Project({project}:projectProps){

    return (
        <div className={styles.project}>
            <div className={styles.example}>
                <a href={project.websiteUrl}>
                    <img src={project.media.src} alt={project.title+' image'} />
                </a>
            </div>
            <div className={styles.desc}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.descp}>{project.desc}</p>
                <div className={styles.code_and_stack}>
                    <div className={styles.stack}>
                        {project.tech.map((t) => <img src={t.icon.src} alt={t.title+' icon'} width='5%'/>)}
                    </div>
                    {project.githubUrl.client && <a href={project.githubUrl.client}>Code (Client)</a>}
                    {project.githubUrl.server && <a href={project.githubUrl.server}>Code (Server)</a>}            
                </div>

            </div>
        </div>
    )
}