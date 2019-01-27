import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayPhoto;
  vote: number;
  votes = [{ "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }, { "value": 5 }];
  search = [{ "value": "photo name" }, { "value": "author" }, { "value": "title" }, { "value": "description" }];
  user = JSON.parse(sessionStorage.getItem('token'));


  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
    this.loadPhoto();
  }

  loadPhoto() {
    this.storage.load(this.user.id).then(res => this.arrayPhoto = res);
  }

  research(data: NgForm) {
    if (data.valid) {
      this.storage.search(data.value.search, this.user.id).then(res => console.log(res));
    }
  }

  votePhoto(data: NgForm, element) {
    if (data.value.vote && data.valid) {
      element.isDisabled = true;
      this.storage.vote(data.value.vote, data.value.id, this.user.id).subscribe(() => {
        this.loadPhoto();
      }, err => {
        console.log(err);
      });
    }
  }

  photoDetail(photo_id: number) {
    let url: string = "/photo/" + photo_id;
    this.router.navigateByUrl(url);
  }
}
