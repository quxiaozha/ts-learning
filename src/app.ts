import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

const projectInput = new ProjectInput();
const activeProjects = new ProjectList("active");
const finishedProjects = new ProjectList("finished");
