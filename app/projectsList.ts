import { StaticImageData } from "next/image"
import html5 from '../public/html5.png';
import react from '../public/react.png';
import js from '../public/javascript.png';
import ts from '../public/typescript.png';
import sass from '../public/sass.png';
import bootstrap from '../public/bootstrap.png';
import PomodoTodo from '../public/pomodotodo.png';
import wordle from '../public/wordle.png';
import python from '../public/python.png';
import express from '../public/express.png';
import sql from '../public/sql.png';
import node from '../public/node.png';

export interface Iproject{
    title:string,
    githubUrl:{
      client?:string,
      server?:string
    },
    websiteUrl:string,
    desc:string,
    tech:Itech[],
    media:StaticImageData
}
export interface Itech{
  title:string,
  icon:StaticImageData
}

export const techStack = {react:{title:'React', icon:react}, 
bootstrap:{title:'Bootstrap',icon:bootstrap},
html:{title:'HTML5', icon:html5},
js:{title:'JavaScript', icon:js},
ts:{title:'TypeScript', icon:ts},
sass:{title:'Sass', icon:sass},
node:{title:'NodeJs', icon:node},
python:{title:'Python', icon:python},
express:{title:'Express', icon:express},
sql:{title:'SQL', icon:sql}}
  
export const projects:Iproject[] = [
    {title:'PomodoTodo', 
    desc:"create and manage your to-do list, time your work, and track your progress.", 
    tech:[techStack.react, techStack.ts, techStack.bootstrap, techStack.sass], 
    githubUrl:{client:'https://github.com/lielbidago/Todo-Pomodoro'}, 
    websiteUrl:'https://pomodotodo.vercel.app/', 
    media:PomodoTodo},
    {title:'Wordle', 
    desc:"guess the hidden word in 6 tries.", 
    tech:[techStack.react,techStack.express, techStack.ts, techStack.bootstrap, techStack.sass], 
    githubUrl:{client:'https://github.com/lielbidago/Wordle', server:'https://github.com/lielbidago/wordle-server-side'}, 
    websiteUrl:'https://wordle-lb.vercel.app/', 
    media:wordle}];
