import {Component} from 'angular2/core';
import {PersonList} from './person-list';

@Component({
  selector: 'home',
  directives: [PersonList],
  template: `
    <i class="fa fa-home" aria-hidden="true"></i>
    <span>I'm the home template</span>
    <i class="fa fa-home" aria-hidden="true"></i>
    
    <hr>
    
    <person-list (select)="onSelect($event)" [people]="people"></person-list>
`
})
export class Home{
  people = [{name:"John"}];

  onSelect(person){
    console.log(person);
  }
}
