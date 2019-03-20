import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    constructor() {}

    private Date: any;
    private Time: any;

    heroes = HEROES;

    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    save(a: any, b: any) {
       if (a != null && b != null) {
           console.log(this.Date + ' ' + this.Time);
       }
    }

    ngOnInit(): void {
    }


}
