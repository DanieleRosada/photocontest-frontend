import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@ViewChild('fileInput')
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  file: File;
  fileName: string;
  arrayPhoto;
  user = JSON.parse(sessionStorage.getItem('token'));
  uploadDisable: boolean = false;
  message: string = null;

  constructor(private storage: StorageService, private router: Router) {}

  ngOnInit() {
    this.owenPhoto();
  }

  owenPhoto() {
    this.storage.owenPhoto(this.user.id).then(res => this.arrayPhoto = res);
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  uploadPhoto(data: NgForm) {
    if (this.file && data.valid) {
      this.message = "We have taken your request";
      this.uploadDisable = true;
      this.storage.upload(this.file, this.user.id, data.value.title, data.value.description).subscribe(() => {
        this.file = null;
        this.fileName = null;
        data.resetForm();
        this.message = null;
        this.uploadDisable = false;
        this.owenPhoto();
      }, err => {
        console.log("err", err);
      });
    }
    else {
      this.message = "Form not valid"
    }
  }

  deletePhoto(idphoto, data) {
    data.isDisabled = true;
    this.storage.deletePhoto(idphoto).subscribe(() => {
      this.owenPhoto();
    }, err => {
      console.log("err", err);
    });
  }

  photoDetail(photo_id: number) {
    let url: string = "/photo/" + photo_id;
    this.router.navigateByUrl(url);
  }
}
