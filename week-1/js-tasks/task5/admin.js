// admin.js

import { User } from './user.js';

export class Admin extends User {
  #adminCode; // private field

  constructor(username, email, password, adminCode) {
    super(username, email, password); // call User constructor
    this.#adminCode = adminCode;
  }

  getAdminDetails() {
    return `${this.getDetails()} - Admin Code: ${this.#adminCode}`;
  }

  // override checkPassword to include adminCode check
  checkPassword(pwd, code) {
    return super.checkPassword(pwd) && code === this.#adminCode;
  }
}
