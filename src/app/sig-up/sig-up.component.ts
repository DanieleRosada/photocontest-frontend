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
    console.log("sigup");
    if (data.valid) {
      this.storage
        .createUser(data.value.username, data.value.password, data.value.email)
        .subscribe(data => {
          this.router.navigate(['/login']);
          this.sigupAlert = null;
        }, err => {
          this.sigupAlert = err.statusText + (err.error.message ? ` - ${err.error.message}` : '');
        });
    } else {
      this.sigupAlert = 'One ore more fields missing';
    }
  }
}
