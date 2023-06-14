import emoji from '../public/liel-emoji.png';
import image from '../public/liel-cropped.png';
import image2 from '../public/liel-img-2.jpg';
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
          <div className={styles.introContent+' glass'}>
            <div className={styles.text}>
              <span>Hi! <span className={styles.accent}>Im liel, </span>A junior <span className={styles.accent}>web developer!</span> <br/></span>
              </div>
            <div className={styles.imageContainer}>
              <Image src={image.src} alt='image-of-liel-1' fill/>
            </div>
        </div>
      </div>
      <div className={styles.about} id="about">
        <div className={styles.aboutContent+' glass'}>
            <h1 className='pageHeader'>About Me</h1>
              
              <div className={styles.imageContainer+' glass'}>
                <Image src={image2.src} alt='image-of-liel-2' className={styles.liel} fill/>
              </div>
              
            <div className={styles.text}>
              <p>Possessing a passion for creating clean, efficient code, dynamic and
                      user-friendly websites and a drive to continuously learn.
              </p>
            </div>
            <div className={styles.techStack+' glass'}>
              {Object.keys(techStack).map((tch)=><div className={styles.techContainer} key={techStack[tch as techT].title}><Image src={techStack[tch as techT].icon.src} alt={techStack[tch as techT].title}  fill/></div>)}
              
            </div>            
          </div>
      </div>
      <div className={styles.projects} id='projects'>
        <div className={styles.projectsContent+' glass'}>
            <h1 className='pageHeader'>Projects</h1>
            <div className={styles.container}>
              {projects.slice(Math.min(0,projects.length,2)).map((p)=> <Project project={p} key={p.title}/>)}
            </div>
            <a href="/projects" className={styles.button+' button'}>For More..</a>
          </div>
      </div>
      <div className={styles.contact} id='contact'>
      
        <div className={styles.contactContent+' glass'}>
        <h1 className='pageHeader'>Contact</h1>
          <div className={styles.linksSection+' glass'}>

            <div className={styles.linksDiv+' glass'}>
              <p>contact me at:</p>
              <a href="https://github.com/lielbidago" className={styles.links} target='_blank'><GithubSVG/></a><span className={styles.or}>or</span> 
              <a href="https://www.linkedin.com/in/liel-bidago/" className={styles.links} target='_blank'><LinkedinSVG/></a>              
            </div>
            <div className={styles.emailLink+' glass'}>
              <p>email me  </p>
              <a href="mailto:lielbidago@gmail.com" className={styles.email+' button' } >here</a> 
            </div>
            <div className={styles.resumeLink+' glass'}>
              <p>get my</p>
              <a className={styles.email+' button' } href={'resume.pdf'} download={'LielBidago_Resume.pdf'}>resume</a>
            </div>
            



          </div>
          
        </div>    
      </div>
        
      
    </div>
  )
}
