export default class ModuleComponent {
  constructor(index, disciplines) {
    this.index = index;
    this.disciplines = disciplines;
  }

  render() {
    let disciplinesHtml = "";

    this.disciplines.forEach((discipline) => {
      disciplinesHtml += `<li>${discipline}</li>`;
    });

    return `<div class="module"><div class="module__heading"><span>${this.index} модуль</span></div><ul>
    ${disciplinesHtml}
    </ul>
    </div>
    `;
  }
}
