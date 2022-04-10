/// <reference path="base-component.ts" />

namespace App {
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input");
      this.titleInputElement = this.element.querySelector("#title")!;
      this.descriptionInputElement =
        this.element.querySelector("#description")!;
      this.peopleInputElement = this.element.querySelector("#people")!;
      this.configure();
    }

    configure() {
      this.element.addEventListener("submit", this.submitHandler);
    }

    renderContent(): void {}

    private gatherUserInputs(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidatable: Validatable = {
        value: enteredTitle,
        requred: true,
      };

      const descValidatable: Validatable = {
        value: enteredDescription,
        requred: true,
        minLength: 5,
      };

      const peopleValidatable: Validatable = {
        value: +enteredPeople,
        requred: true,
        min: 1,
        max: 5,
      };

      if (
        !validate(titleValidatable) ||
        !validate(descValidatable) ||
        !validate(peopleValidatable)
      ) {
        alert("Invalid input.");
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
    }

    private clearInputs() {
      this.titleInputElement.value = "";
      this.descriptionInputElement.value = "";
      this.peopleInputElement.value = "";
    }

    @autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInputs = this.gatherUserInputs();
      if (Array.isArray(userInputs)) {
        const [title, desc, people] = userInputs;
        console.log(title, desc, people);
        projectState.addProject(title, desc, people);
        this.clearInputs();
      }
    }
  }
}
