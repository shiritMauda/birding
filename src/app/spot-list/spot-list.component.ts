import { Component, OnInit } from '@angular/core';
import { ISpot } from 'src/models/spot.model';
import { ReplaySubject, Observable } from 'rxjs';
import { BirdService } from 'src/service/bird.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.scss']
})
export class SpotListComponent implements OnInit {
  private _spots$ = new ReplaySubject<ISpot[]>(1);
  constructor(private service: BirdService,private user: UserService) { }

  public get spots$(): Observable<ISpot[]> {
    return this._spots$.asObservable();
  }
  ngOnInit() {
    this.getData();
  }

  getData() {

    this.service.getListOfspots(this.user.email).subscribe(res => {
      console.log('spots from server', res);
      this._spots$.next(res);

    });
  }

}
