import { Component, OnInit, Input } from '@angular/core';
import { ISpot } from 'src/models/spot.model';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {
  label = {
    title: 'התצפיות שלי'
  };

  @Input() spot: ISpot;
  constructor() { }

  ngOnInit() {
  }

}
