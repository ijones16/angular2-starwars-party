import {Component} from 'angular2/core';
import {First} from './components/first.component';

@Component({
  selector: 'app',
  directives:[First],
  template: `
        <First></First>{{message}}
    `
})
export class App{
}
