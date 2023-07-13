
import Image from "next/image";
import { Iproject, techStack, techT } from "../projectsList";
import styles from './Project.module.scss';
import TechContainer from "./TechContainer";


interface projectProps{
    project:Iproject
}

export default function Project({project}:projectProps){
    return (
        <div className={styles.project+' glass'}>
            <div className={styles.example}>
                <a href={project.websiteUrl} aria-label={`${project.title} - project link`} target="_blank">
                    <Image src={project.media.src} alt={project.title+' image'} fill sizes='(max-width: 768px) 100%, 33%'/>
                </a>
            </div>
            <div className={styles.desc}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.descp}>{project.desc}</p>
                <div className={styles.code_and_stack}>
                    <div className={styles.stack}>
                        {project.tech.map((t) => <TechContainer key={t.title} tech={t}/>)}
                    </div>
                    {project.githubUrl.client && <a className={styles.button} href={project.githubUrl.client} aria-label='link to client code'><TechContainer tech={techStack['github']}/><span>Client</span></a>}
                    {project.githubUrl.server && <a className={styles.button} href={project.githubUrl.server} aria-label='link to server code'><TechContainer tech={techStack['github']}/><span>Server</span></a>}            
                </div>

            </div>
        </div>
    )
}