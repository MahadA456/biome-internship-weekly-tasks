// user.js

export class User {
  #password; // private field

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.#password = password; // private
  }

  getDetails() {
    return `User: ${this.username} (${this.email})`;
  }

  // method to verify password (just for example)
  checkPassword(pwd) {
    return pwd === this.#password;
  }
}
