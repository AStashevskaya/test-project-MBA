import create from "../utils/createNode";
import ModuleComponent from "./Module";
import { MODULES_SIZE, DISCIPLINE_SIZE } from "../constants";

export default class Program {
  constructor(layout, data) {
    this.wrapper = layout.content;
    this.data = data;
    this.content = create("div", "program");
    this.modules = [];
  }

  init() {
    for (let i = 0; i < MODULES_SIZE; i++) {
      const disciplines = this.data.specializedSubjects.slice(
        i * DISCIPLINE_SIZE,
        i * DISCIPLINE_SIZE + DISCIPLINE_SIZE
      );
      this.modules.push(new ModuleComponent(i + 1, disciplines));
    }

    this.content.innerHTML = this.render();
    this.wrapper.appendChild(this.content);
  }

  render() {
    let modulesHtml = "";

    this.modules.forEach((module) => {
      modulesHtml += module.render();
    });
    return `<h2>${this.data.title}</h2>
    <div class="program__content">
    ${modulesHtml}
    </div>`;
  }
}
