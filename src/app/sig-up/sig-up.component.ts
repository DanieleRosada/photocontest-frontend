import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrls: ['./sig-up.component.css']
})
export class SigUpComponent implements OnInit {

  constructor(private storage: StorageService, private router: Router) { }
  sigupAlert: string = null;
  ngOnInit() {
  }

  sigup(data: NgForm) {
    if (data.valid && this.validationUser(data.value.username) && this.validateEmail(data.value.email)) {
      this.storage
        .createUser(data.value.username, data.value.password, data.value.email)
        .subscribe(data => {
          this.router.navigate(['/login']);
          this.sigupAlert = null;
        }, err => {
          this.sigupAlert = err.statusText + (err.error.message ? ` - ${err.error.message}` : '');
        });
    } else {
      this.sigupAlert = 'Not valid fields';
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()) && email.length < 64;
  }
   
  validationUser(user) {
    return user.length < 64;
  }
}
