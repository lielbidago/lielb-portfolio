import Project from "../_components/Project";
import { projects } from "../projectsList";


export default function Projects(){
    return (
        <main>
            <h1>My Projects</h1>
            {projects.map((p)=> <Project project={p}/>)}
        </main>
    )
}