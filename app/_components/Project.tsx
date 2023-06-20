
import Image from "next/image";
import { Iproject } from "../projectsList";
import styles from './Project.module.scss';
import github from '@/public/github_icon.webp'
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
                        {project.tech.map((t) => <div className={styles.techContainer} key={t.title}><Image src={t.icon.src} alt={t.title+' icon'} sizes='(max-width: 768px) 100%, 33%' fill/></div>)}
                    </div>
                    {project.githubUrl.client && <a className={styles.button} href={project.githubUrl.client} aria-label='link to client code'><div className={styles.techContainer}><Image src={github.src} alt={'github icon'} sizes='(max-width: 768px) 100%, 33%' fill/></div> <span>(Client)</span></a>}
                    {project.githubUrl.server && <a className={styles.button} href={project.githubUrl.server} aria-label='link to server code'><div className={styles.techContainer}><Image src={github.src} alt={'github icon'} sizes='(max-width: 768px) 100%, 33%' fill/></div><span>(Server)</span></a>}            
                </div>

            </div>
        </div>
    )
}