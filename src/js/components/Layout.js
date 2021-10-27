import Program from "./Program";
import create from "../utils/createNode";
import { API_URL, PROGRAM_SIZE, MOBILE_SIZE } from "../constants";
import Conclusion from "./Conclusion";

export default class Layout {
  constructor() {
    this.container = create("div", "container");
    this.header = create("h1");
    this.content = create("div", "content");
    this.footer = create("div", "conclusion");
    this.conclusion = new Conclusion();
    this.windowSize = document.documentElement.clientWidth;

    this.init();
  }

  async init() {
    this.footer.innerHTML = this.conclusion.render();
    this.header.innerText = "Специализированные дисциплины";

    this.container.appendChild(this.header);
    this.container.appendChild(this.content);
    this.container.appendChild(this.footer);
    document.body.appendChild(this.container);

    await this.getData();
    this.initListeners();
  }

  async getData() {
    const { data } = await fetch(API_URL).then((answer) => answer.json());
    const programs = data
      .filter(
        (program) =>
          program.specializedSubjects &&
          program.specializedSubjects.length >= 10
      )
      .slice(0, PROGRAM_SIZE);

    this.programs = programs.map((program) => new Program(this, program));
    this.programs.forEach((element) => {
      element.init();
    });
  }

  initListeners() {
    window.addEventListener("resize", this.handleResize.bind(this));

    this.buttons = Array.from(document.querySelectorAll(".module__heading"));
    this.buttons.forEach((button) =>
      button.addEventListener("click", this.handleClick.bind(this))
    );
  }

  handleClick = (event) => {
    if (this.windowSize > MOBILE_SIZE) {
      return;
    }

    const { currentTarget } = event;

    if (currentTarget.parentNode.classList.contains("active")) {
      currentTarget.parentNode.classList.remove("active");
    } else {
      currentTarget.parentNode.classList.add("active");
    }
  };

  handleResize = () => {
    this.windowSize = document.documentElement.clientWidth;
  };
}
