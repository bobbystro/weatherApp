import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageFormModel} from './message-form.model';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.less']
})
export class MessageFormComponent implements OnInit {
  contactForm: MessageFormModel;

  constructor() {
  }

  messageForm: FormGroup;

  ngOnInit() {
    this.contactForm = new MessageFormModel();
    this.messageForm = new FormGroup({
      'nameForm': new FormControl(this.contactForm.name, [Validators.required, Validators.minLength(2)]),
      'messageText': new FormControl(this.contactForm.message, Validators.required),
      'emailForm': new FormControl(this.contactForm.email, [Validators.required, Validators.email])
    });
  }

  get nameForm() {
    return this.messageForm.get('nameForm');
  }

  get messageText() {
    return this.messageForm.get('messageText');
  }

  get emailForm() {
    return this.messageForm.get('emailForm');
  }

}
