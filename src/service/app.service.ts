import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private service: UserService, private router: Router) { }

  init(isLogin = true) {
    //this.loaderOn()  'יום יבןא ונממש את הלואדר הזה
    if (isLogin && !this.service.isConnected) {
      this.navTo('login');
    }
  }

  navTo(route) {
    this.router.navigate([route]);
  }


}
