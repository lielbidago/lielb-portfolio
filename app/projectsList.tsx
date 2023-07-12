import { StaticImageData } from "next/image"

// import html5 from '../public/html5.webp';
// import react from '../public/react.webp';
// import js from '../public/javascript.webp';
//import ts from '../public/typescript.webp';
// import sass from '../public/sass.webp';
// import bootstrap from '../public/bootstrap.webp';
// import python from '../public/python.webp';

// import sql from '../public/sql.webp';
// import node from '../public/node.webp';
// import git from '../public/git.webp';

import express from '../public/express.webp';
import PomodoTodo from '../public/pomodotodo.webp';
import wordle from '../public/wordle.webp';

import Html5 from './_logos/html5.svg';
import react from './_logos/react.svg';
import js from './_logos/javaScript.svg';
import ts from './_logos/typeScript.svg';
import sass from './_logos/sass.svg';
import bootstrap from './_logos/bootstrap.svg';
import python from './_logos/python.svg';
// import express from './_logos/express.svg';
import sql from './_logos/sql.svg';
import node from './_logos/node.svg';
import git from './_logos/git.svg';
import github from './_logos/github.svg';

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

export type techT =keyof typeof techStack;

export const techStack = {
  react:{title:'React', icon:react}, 
  bootstrap:{title:'Bootstrap',icon:bootstrap},
  html:{title:'HTML5', icon:Html5},
  js:{title:'JavaScript', icon:js},
  ts:{title:'TypeScript', icon:ts},
  sass:{title:'Sass', icon:sass},
  node:{title:'NodeJs', icon:node},
  python:{title:'Python', icon:python},
  express:{title:'Express', icon:express},
  sql:{title:'SQL', icon:sql},
  git:{title:'git',icon:git},
  github:{title:github, icon:github}
}
  
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
