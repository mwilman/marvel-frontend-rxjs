import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../../marvel.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private marvelService: MarvelService) {
  }

  data$ = this.marvelService.heroes$.pipe(
    tap(x => console.log(x)),
    map((array: Array<any>) => array
      .map(
        element => element.name
      )
    )
  );

  ngOnInit(): void {
  }

}
