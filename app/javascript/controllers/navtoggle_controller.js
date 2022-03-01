import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "toggleicon", "link" ]

    connect() {
        console.log(this.linkTargets)
      };

    toggle(event) {
        this.linkTargets.forEach((link) => {
            link.classList.toggle("show-links");
        });
    }
}