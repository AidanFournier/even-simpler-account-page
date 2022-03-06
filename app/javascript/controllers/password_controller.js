import { Controller } from "stimulus"
import zxcvbn from "zxcvbn"
export default class extends Controller {
    static targets = [ "password", "progressbar", "suggestion" ]

    connect() {
        // console.log(this.suggestionTarget);
        // console.log((this.passwordTarget.value));
        // console.log(this.passwordTarget.input);
        // this.passwordValue = this.passwordTarget.value;
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

    passwordbarfill(e) {
      // Use zxcvbn library to calculate password strength:
      this.password = e.target.value;
      this.testResult = zxcvbn(this.password);
      this.num = this.testResult.score * 100/4;
      this.progressbarTarget.style.width = `${this.num}%`;
    }

    progresscolor(e) {
      this.password = e.target.value;
      this.testResult = zxcvbn(this.password);
      if (this.testResult.score === 0) {
        this.progressbarTarget.style.backgroundColor = '#828282';
      } else if (this.testResult.score === 1) {
        this.progressbarTarget.style.backgroundColor = '#EA1111';
      } else if (this.testResult.score === 2) {
        this.progressbarTarget.style.backgroundColor = '#FFAD00';
      } else if (this.testResult.score === 3) {
        this.progressbarTarget.style.backgroundColor = '#FADE1E';
      } else if (this.testResult.score === 4) {
        this.progressbarTarget.style.backgroundColor = '#00b500';
      } else {
        return 'none';
      }
    }

    strengthsuggestion(e) {
      this.password = e.target.value;
      this.testResult = zxcvbn(this.password);
      console.log(this.testResult);
      if (this.testResult.score === 0) {
        this.suggestionTarget.innerHTML = "Make sure it's strong! 🧐";
      } else if (this.testResult.score === 1) {
        this.suggestionTarget.innerHTML = "Not great 😬";
      } else if (this.testResult.score === 2) {
        this.suggestionTarget.innerHTML = "It'll do... 🤔";
      } else if (this.testResult.score === 3) {
        this.suggestionTarget.innerHTML = 'Much better! 😌';
      } else if (this.testResult.score === 4) {
        this.suggestionTarget.innerHTML = "Now that's a strong password! 🤯";
      } else {
        return 'none';
      }
    }
}