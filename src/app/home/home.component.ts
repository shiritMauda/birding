import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: UserService, private app: AppService) { }

  ngOnInit() {
    console.log('ngOnInit Home');
    this.app.init(true);

  }

}
