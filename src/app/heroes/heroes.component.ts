import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';

import { HEROES } from '../../app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  public hero: Hero = {
    id: 1,
    humanName: 'Clark Kent',
    realName: 'Kal-El',
    alterego: 'Superman'
  };

  public heroes: Hero[] = HEROES;
}
