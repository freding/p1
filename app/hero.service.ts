import { Injectable  } from 'angular2/core';

import { Hero } from './Hero';
import { aHeros } from './mock-heroes';

@Injectable()
export class HeroService{
    getHeros ():Promise<Hero[]>{
        return Promise.resolve(aHeros);
    }
    
    getHerosSlow():Promise<Hero[]>{
        return new Promise<Hero[]>(resolve =>setTimeout(
                                                        ()=>resolve(aHeros), 2000) 
                                                       );
    }
    
} 
