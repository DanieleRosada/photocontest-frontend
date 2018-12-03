import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { ViewChild } from '@angular/core';

@ViewChild('fileInput')
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  file: File;
  fileName: string = "";
  arrayPhoto;
  vote: boolean = false;
  constructor(private storage: StorageService, private router: Router) {
    if (!sessionStorage.getItem('token')) this.router.navigateByUrl('/login');
    this.arrayPhoto = this.loadPhoto();
  }
  ngOnInit() {
  }

  logout() {
    this.storage.logout();
    this.router.navigate(['/login']);
  }

  upload() {
    this.storage.upload(this.file)
      .subscribe(data => {
        this.router.navigate(['/home']);
        console.log("data", data)
      }, err => {
        console.log("err", err)
      });
  }

  loadPhoto() {
    this.storage.load().then(res => this.arrayPhoto = res);
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }
}
