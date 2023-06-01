import emoji from '../public/liel-emoji.png';
import image from '../public/liel-cropped.png';
import styles from './page.module.css';
import Project from './_components/Project';
import { projects, techStack } from './projectsList';
import { FormEvent } from 'react';
import Contactform from './_components/Form';
import LinkedinSVG from './_logos/linkedin';
import GithubSVG from './_logos/github';


const langOptions = {
  he:'he',
  en:'en'
} as const
type langOptionType = keyof typeof langOptions;

// export interface Iproject{
//   title:string,
//   githubUrl:string,
//   websiteUrl:string,
//   desc:string,
//   tech:Itech[],
//   media:StaticImageData
// }
// interface Itech{
//   title:string,
//   icon:StaticImageData
// }

type techT =keyof typeof techStack;

export default function Home() {
  


  // const projects:Iproject[] = [{title:'PomodoTodo', desc:"create and manage your to-do list, as well as track your progress.", tech:[{title:'React', icon:react}], githubUrl:'https://github.com/lielbidago/Todo-Pomodoro', websiteUrl:'https://pomodotodo.vercel.app/', media:PomodoTodo}]
  // const [lang, setLang] = useState<langOptionType>(langOptions.en);
  
  return (
    <main className={styles.main}>

      <div className="intro" aria-label='introduction'>
          <div className="intro-content">
            <div className="text">
              <span>hi! <br/> im liel,and I'm a junior web developer!<br/></span>
              </div>
            <div className="emoji">
              <img src={emoji.src} alt='emoji-of-liel'/>
            </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="about-content">
            <h1>About Me</h1>
              <img src={image.src} alt='image-of-liel'/>
            <div className="text">
              <span >Possessing a passion for creating clean, efficient code, dynamic and
                      user-friendly websites and a drive to continuously learn.</span>
            </div>
            <div className="tech-stack">
              {Object.keys(techStack).map((tch)=><img src={techStack[tch as techT].icon.src} alt={techStack[tch as techT].title} />)}
              
            </div>            
          </div>
      </div>
      <div className="projects">
          <h1>Projects</h1>
          <div className="container">
            {projects.slice(Math.min(0,projects.length,2)).map((p)=> <Project project={p}/>)}
          </div>
          <a href="/projects" className="for-more button">For More..</a>
      </div>
      <div className="contact" id='contact'>
        <div className="contactMain">
          <h1>Contact me</h1>
          <div className="linksSection">
            <p>contact me at:</p>
            <a href="https://github.com/lielbidago" className="links" target='_blank'><GithubSVG/></a><span className='or'>or</span> 
            <a href="https://www.linkedin.com/in/liel-bidago/" className="links" target='_blank'><LinkedinSVG/></a>
            <p>or email me  </p>
            <a href="mailto:lielbidago@gmail.com" className='email'>here</a> 
          </div>
          
        </div>    
      </div>
        
      
    </main>
  )
}
