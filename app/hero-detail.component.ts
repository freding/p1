import {Component, Input} from 'angular2/core';
import { Hero } from './Hero';
import { Companion } from './Companion';

@Component({
    selector: 'my-hero-detail1',
    template: `
    <div *ngIf="hero" class="details-hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>

            <li *ngFor="#oCompanionLoop of aCompanions">
                <span *ngIf="hero.id === oCompanionLoop.heroId">
                    <span class="badge">{{oCompanionLoop.heroId}}</span> {{oCompanionLoop.nomComplet}}
                </span>    
            </li>

       
    </div>
    `,
    styles:[`
       .details-hero{
           border:2px solid black;
       }
       .companion{
           color:red;
       }
    `]      
})
export class HeroDetailComponent {
    @Input() 
    hero: Hero;
    @Input()
    companion : Companion;   
    @Input()
    aCompanions : Companion[];  
}