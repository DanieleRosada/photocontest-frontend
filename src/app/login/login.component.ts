import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private storage: StorageService, private router: Router) { }
  loginAlert: string = null;
  ngOnInit() { }

  login(data: NgForm) {
    if (data.valid) {
      this.storage
        .login(data.value.username, data.value.password)
        .subscribe(data => {
          this.storage.saveToken(data);
          this.router.navigate(['/home']);
          this.loginAlert = null;
        }, err => {
          data.reset();
          this.loginAlert = err.statusText + (err.error.message ? ` - ${err.error.message}` : '');
        });
    } else {
      this.loginAlert = 'One ore more fields missing';
    }
  }
}
