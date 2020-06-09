import { Component } from '@angular/core';

@Component({
  selector: 'sq-root',
  template: '',
  styles: []
})
export class AppComponent {

  welcomeMessage(userName: string): string {
    return `Welcome ${userName}`;
  }
}
