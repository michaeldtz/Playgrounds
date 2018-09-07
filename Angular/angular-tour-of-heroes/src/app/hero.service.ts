import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    var heroes = HEROES;
    heroes.map(function(hero : Hero){
      hero.name += " the best";
    })

    this.messageService.add("Heroes loaded");

    return of(heroes);
  }
}
