import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-rank-photos',
  templateUrl: './rank-photos.component.html',
  styleUrls: ['./rank-photos.component.css']
})
export class RankPhotosComponent implements OnInit {
  photos;
  message: String = null;
  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
    this.rankPhotos();
  }

  rankPhotos() {
    this.storage.photosRaking().then(res => {
      if (res.length == 0) this.message = "Photos ranking not available";
      else  this.photos = res;
    });
  }

  ViewphotoDetail(photo_id) {
    let url: string = "/photo/" + photo_id;
    this.router.navigateByUrl(url);
  }

}
