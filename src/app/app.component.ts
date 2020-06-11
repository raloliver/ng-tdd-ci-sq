import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'sq-root',
  template: '{{person?.name}}',
  styles: []
})
export class AppComponent implements OnInit {

  person: any;

  constructor(private appService?: AppService) { }

  ngOnInit() {
    this.getPerson('Luke');
  }

  welcomeMessage(userName: string): string {
    return `Welcome ${userName}`;
  }

  getPerson(name) {
    return this.appService.getPerson(name).subscribe(res => this.person = res.results[0]);
  }
}
