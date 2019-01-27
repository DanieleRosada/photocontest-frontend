import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-rank-users',
  templateUrl: './rank-users.component.html',
  styleUrls: ['./rank-users.component.css']
})
export class RankUsersComponent implements OnInit {
  users: any = null;
  message: string = null;
  constructor(private storage: StorageService, private router: Router) {
  }

  ngOnInit() {
    this.userRaking();
  }

  userRaking() {
    this.storage.userRaking().then(res => {
      if (res.length == 0) this.message = "Users ranking not available";
      else this.users = res;
    });
  } 
}
