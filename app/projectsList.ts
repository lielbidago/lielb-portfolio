import { StaticImageData } from "next/image"
import html5 from '../public/html5.webp';
import react from '../public/react.webp';
import js from '../public/javascript.webp';
import ts from '../public/typescript.webp';
import sass from '../public/sass.webp';
import bootstrap from '../public/bootstrap.webp';
import PomodoTodo from '../public/pomodotodo.webp';
import wordle from '../public/wordle.webp';
import python from '../public/python.webp';
import express from '../public/express.webp';
import sql from '../public/sql.webp';
import node from '../public/node.webp';

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
