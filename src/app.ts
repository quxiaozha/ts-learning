import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

const projectInput = new ProjectInput();
const activeProjects = new ProjectList("active");
const finishedProjects = new ProjectList("finished");
