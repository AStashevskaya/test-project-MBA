export default class Conclusion {
  render = () => this.renderPrecticalModules() + this.renderAttestation();

  renderPrecticalModules = () => ` <div class="conclusion__modules">
        <div class="conclusion__heading">
            Практические модули
        </div>
        <div class="conclusion__content">
            Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
        </div>
    </div>`;

  renderAttestation = () => ` <div class="conclusion__attestation">
        <div class="conclusion__heading">
       Итоговая аттестация
        </div>
        <div class="conclusion__content">
            <ul>
            <li>
            Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
            </li>
            <li>
            Защита итоговой аттестационной работы
            </li>
            </ul>
        </div>
    </div>`;
}
