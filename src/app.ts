/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-item.ts" />

namespace App {
  const projectInput = new ProjectInput();
  const activeProjects = new ProjectList("active");
  const finishedProjects = new ProjectList("finished");
}
