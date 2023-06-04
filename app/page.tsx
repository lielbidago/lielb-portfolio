import emoji from '../public/liel-emoji.png';
import image from '../public/liel-cropped.png';
import styles from './page.module.scss';
import Project from './_components/Project';
import { projects, techStack } from './projectsList';
import LinkedinSVG from './_logos/linkedin';
import GithubSVG from './_logos/github';
import Image from 'next/image';


type techT =keyof typeof techStack;

export default function Home() {
  
  return (
    <div className={styles.main}>

      <div className={styles.intro} aria-label='introduction'>
          <div className={styles.introContent}>
            <div className={styles.text}>
              <span>hi! <br/><span className={styles.accent}>Im liel</span>,and I&apos;m a junior <span className={styles.accent}>web developer!</span> <br/></span>
              </div>
            <div className={styles.imageContainer}>
              <Image src={emoji.src} alt='emoji-of-liel' fill/>
            </div>
        </div>
      </div>
      <div className={styles.about} id="about">
        <div className={styles.aboutContent}>
            <h1>About Me</h1>
              <div className={styles.imageContainer}>
                <Image src={image.src} alt='image-of-liel' fill/>
              </div>
              
            <div className={styles.text}>
              <span >Possessing a passion for creating clean, efficient code, dynamic and
                      user-friendly websites and a drive to continuously learn.</span>
            </div>
            <div className={styles.techStack}>
              {Object.keys(techStack).map((tch)=><img src={techStack[tch as techT].icon.src} alt={techStack[tch as techT].title} key={techStack[tch as techT].title} />)}
              
            </div>            
          </div>
      </div>
      <div className={styles.projects}>
          <h1>Projects</h1>
          <div className={styles.container}>
            {projects.slice(Math.min(0,projects.length,2)).map((p)=> <Project project={p}/>)}
          </div>
          <a href="/projects" className="for-more button">For More..</a>
      </div>
      <div className={styles.contact} id='contact'>
      <h1>Contact me</h1>
        <div className={styles.contactMain}>
          <div className={styles.linksSection}>
            <p>contact me at:</p>
            <a href="https://github.com/lielbidago" className={styles.links} target='_blank'><GithubSVG/></a><span className={styles.or}>or</span> 
            <a href="https://www.linkedin.com/in/liel-bidago/" className={styles.links} target='_blank'><LinkedinSVG/></a>
            <p>or email me  </p>
            <a href="mailto:lielbidago@gmail.com" className={styles.email} >here</a> 
          </div>
          
        </div>    
      </div>
        
      
    </div>
  )
}
