import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user = JSON.parse(sessionStorage.getItem('token'));
  constructor(private storage: StorageService, private router: Router) {
    if (!this.user)  this.router.navigate(['/login']);
    
    this.storage.user().subscribe(() => {}
      , err => {
        this.router.navigate(['/login']);
      });
  }
  ngOnInit() {}

  logout() {
    this.storage.logout();
    this.router.navigate(['/login']);
  }
}
