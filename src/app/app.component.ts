import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'practice';
  password = '';
  includeLetters: boolean = false;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  OnButtonClick() {
    this.password = 'passsword';
    console.log('Button was clicked');
  }

  getPassword() {
    return this.password;
  }

  getname() {
    return this.title;
  }






}
