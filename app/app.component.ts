import { Component }       from 'angular2/core';
import { HeroService }     from './hero.service';
import { HerosComponent } from './heros.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-heros></my-heros>
  `,
  directives: [HerosComponent],
  providers: [
    HeroService
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}