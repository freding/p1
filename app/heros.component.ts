import {Component, OnInit } from 'angular2/core';
import { Hero } from './Hero';
import {HeroDetailComponent} from './hero-detail.component';
import { Companion } from './Companion';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heros',
    template: `
        <h1>{{title}}</h1>
        <h2>List</h2>
        <ul class="heroes">
            <li *ngFor="#hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail1 [hero]="selectedHero" [companion]="companion" [aCompanions]="aCompanions"></my-hero-detail1>    
    `,
styles:[`

  `],
  directives: [HeroDetailComponent]       
})



export class HerosComponent implements OnInit {
  title = '- Openjet -';
  companion = oCompanion;
  aCompanions= aCompanions;
  
  heroes : Hero[];  
  selectedHero : Hero;
    
  onSelect(hero: Hero) { this.selectedHero = hero; }  
  
  
  constructor(private _heroService: HeroService) { }  
  getHeroes() {
    this._heroService.getHerosSlow().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }  
  
   
}





var oCompanion : Companion = {nomComplet:"le companion",heroId:1};

var aCompanions : Companion[] = [
    {nomComplet:"Companion 1 lié hero 1",heroId:1},
    {nomComplet:"Companion 2 lié hero 1",heroId:1},    
    {nomComplet:"Companion 3 lié hero 2",heroId:2},    
    {nomComplet:"Companion 4 lié hero 2",heroId:2}  
];
