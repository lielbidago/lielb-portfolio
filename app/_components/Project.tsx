
import Image from "next/image";
import { Iproject } from "../projectsList";
import styles from './Project.module.scss';
interface projectProps{
    project:Iproject
}

export default function Project({project}:projectProps){

    return (
        <div className={styles.project}>
            <div className={styles.example}>
                <a href={project.websiteUrl} target="_blank">
                    <Image src={project.media.src} alt={project.title+' image'} fill/>
                </a>
            </div>
            <div className={styles.desc}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.descp}>{project.desc}</p>
                <div className={styles.code_and_stack}>
                    <div className={styles.stack}>
                        {project.tech.map((t) => <div className={styles.techContainer}><Image src={t.icon.src} alt={t.title+' icon'}  key={t.title} fill/></div>)}
                    </div>
                    {project.githubUrl.client && <a className={styles.button} href={project.githubUrl.client}>Code <span>(Client)</span></a>}
                    {project.githubUrl.server && <a className={styles.button} href={project.githubUrl.server}>Code <span>(Server)</span></a>}            
                </div>

            </div>
        </div>
    )
}