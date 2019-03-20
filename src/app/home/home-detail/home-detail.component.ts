import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-home-detail',
    templateUrl: './home-detail.component.html',
    styleUrls: ['./home-detail.component.scss'],
})
export class HomeDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor() { }

    ngOnInit() {}

}
