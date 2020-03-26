import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../../marvel.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private marvelService: MarvelService) { }

  data = this.marvelService.heroes$;
  ngOnInit(): void {
  }

}
