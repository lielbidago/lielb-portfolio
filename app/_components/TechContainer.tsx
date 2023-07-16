import { Itech } from '../projectsList';
import styles from './TechContainer.module.scss';
import Image from 'next/image';

interface techContainerProps{
    tech:Itech,
    sizes?:string
}

export default function TechContainer({tech, sizes='(max-width: 768px) 100%, 33%'}:techContainerProps){
    return (
        <div className={styles.techContainer} key={tech.title}><Image src={tech.icon} loading='lazy' alt={tech.title} sizes={sizes} fill/></div>
    )
}