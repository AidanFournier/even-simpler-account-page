import { Controller } from "stimulus"
import "zxcvbn"

export default class extends Controller {
    static targets = [ "password", "progressbar", "suggestion" ]

    connect() {
        // console.log(this.suggestionTarget);
        console.log(zxcvbn(this.passwordTarget.score));
      };

    // Hide/unhide action:
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

    // Password strength meter:
    
    passwordinput() {
      this.progressbarTarget.style.width = "20%";
      this.progressbarTarget.style.backgroundColor = "yellow";
      console.log(this.passwordTarget.score);
    }
}