import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-inline-error',
  templateUrl: './message-inline-error.component.html',
  styleUrls: ['./message-inline-error.component.scss']
})
export class MessageInlineErrorComponent implements OnInit {

  @Input() field: FormControl;
  errors = {
    required: "Es un campo obligatorio",
    pattern: "Debe coincidir con el patron",
    email: "no es un email correcto"
  }
 
  constructor() { }

  ngOnInit(): void {
  }

  get errorsMessage(): string[] {
    let messages = []
    for (let propertyName in this.field.errors) {
      if (this.errors.hasOwnProperty(propertyName)) {
        messages.push(this.errors[propertyName])
      }
    }
    return messages
  }

  get fieldErrors() { return this.field.errors; }

}
