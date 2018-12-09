import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@ViewChild('fileInput')
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  file: File;
  fileName: string = "";
  arrayPhoto = null;
  vote;
  votes = [{"value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }, { "value": 5 }];
  user = JSON.parse(sessionStorage.getItem('token'));
  constructor(private storage: StorageService, private router: Router) {
    if (!this.user) this.router.navigateByUrl('/login');
    this.loadPhoto();
  }
  ngOnInit() {
  }

  logout() {
    this.storage.logout();
    this.router.navigate(['/login']);
  }

  upload() {
    this.storage.upload(this.file, this.user.id)
      .subscribe(() => {
        this.loadPhoto();
      }, err => {
        console.log("err", err)
      });

  }

  loadPhoto() {
    this.storage.load(this.user.id).then(res => this.arrayPhoto = res);
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  votePhoto(data: NgForm) {
    if (data.valid) {
      this.storage.vote(data.value.vote, data.value.id, this.user.id).subscribe(data => {
          this.storage.saveToken(data); 
          this.loadPhoto();
        }, err => {
          console.log(err)
        });
   }
}


ViewphotoDetail(photo_id){
  let url: string = "/photo/" + photo_id;
  this.router.navigateByUrl(url);
}
}
