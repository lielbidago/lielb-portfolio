import emoji from '../public/liel-emoji.png';
import image from '../public/liel-cropped.png';
import styles from './page.module.css';
import Project from './_components/Project';
import { Itech, projects, techStack } from './projectsList';
import { ReactNode } from 'react';

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
              <span >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, fuga laborum! Quasi aspernatur architecto dolore recusandae inventore labore magni, fuga enim quod molestiae doloribus quidem magnam hic officia consequuntur? Debitis.</span>
            </div>
            <div className="tech-stack">
              {Object.keys(techStack).map((tch)=><img src={techStack[tch as techT].icon.src} alt={techStack[tch as techT].title} />)}
              
            </div>            
          </div>
      </div>
        <div className="projects">
          <h1>Projects</h1>
          {projects.slice(Math.min(0,projects.length,2)).map((p)=> <Project project={p}/>)}
          <a href="/projects" className="for-more button">For More..</a>
      </div>

      <div className="contact" id='contact'>
          <h1>Contact Me</h1>
          <div className="form">
          <form>
            <div className="name">
              <label htmlFor="name">Name:</label>
              <input type='text' minLength={2} id='name' maxLength={100}></input>
            </div>
            <div className="Email">
              <label htmlFor="email">Email:</label>
              <input type='email' id='email' required></input>
            </div>
            <div className="message">
              <label htmlFor="message">Message:</label>
              <textarea id='message' rows={6} placeholder='hi:)' required minLength={2} maxLength={500}/>
            </div>
            <button type='submit'>Send</button>
            
          </form>            
          </div>

    </div>
        
      
    </main>
  )
}
