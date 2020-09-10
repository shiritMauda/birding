import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBird } from 'src/models/bird.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IArea } from 'src/models/area.model';
import { ISpot } from 'src/models/spot.model';
import { environment } from '../environments/environment';
const BASEAPI = environment.api;
@Injectable({
  providedIn: 'root'
})
export class BirdService {
  url: string;
  constructor(private http: HttpClient, private router: Router) { }

  getListOfbirds(): Observable<IBird[]> {
    this.url = BASEAPI + 'bird';
    return this.http.get<IBird[]>(this.url);
  }
  getListOfspots(email: string): Observable<ISpot[]> {
    const url = BASEAPI + 'spotList?email=' + email;
    return this.http.get<ISpot[]>(url);
  }
  addBird(bird): Observable<number> {
    this.url = BASEAPI + 'bird';
    return this.http.post<number>(this.url, bird);
  }
  addSpot(spot): Observable<number> {
    this.url = BASEAPI + 'spot';
    return this.http.post<number>(this.url, spot);
  }
  addArea(area): Observable<number> {
    this.url = BASEAPI + 'area';
    return this.http.post<number>(this.url, area);
  }
  navToBirdList() {
    const url = 'home/birdList';
    this.router.navigate([url]);
  }

  getAllAreas(): Observable<IArea[]> {
    this.url = BASEAPI + 'area';
    return this.http.get<IArea[]>(this.url);
  }
}
