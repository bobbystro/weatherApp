export class MessageFormModel {
  public name: string;
  public email: string;
  public message: string;

  constructor(name = '', email = '', message = '') {
    this.name = name;
    this.email = email;
    this.message = message;
  }
}
