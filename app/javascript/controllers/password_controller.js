import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "password", "progressbar", "suggestion" ]

    connect() {
        console.log(this.suggestionTarget)
      };

    unhide(e) {
      if (this.passwordTarget.type === "password") {
        e.target.classList.remove('fa-eye-slash');
        e.target.classList.add('fa-eye');
        this.passwordTarget.type = "text";
      } else {
        e.target.classList.remove('fa-eye');
        e.target.classList.add('fa-eye-slash');
        this.passwordTarget.type = "password";
      }
    }
}