import create from "../utils/createNode";

export default class Layout {
  constructor() {
    this.container = create("div", "container");
    this.header = create("header");
    this.content = create("div", "content");

    this.init()
  }

  init() {
    this.container.appendChild(this.header);
    this.container.appendChild(this.content)

    document.body.appendChild(this.container);
  }
}
