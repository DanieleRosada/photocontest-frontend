import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  photos: any = null;
  message: string = null;
  constructor(private storage: StorageService, private router: Router) {
    this.raking();
    if (this.photos) {
      this.message = "Ranking not available";
    }
  }


  ngOnInit() {
   }

  raking() {
    this.storage.ranking().then(res => this.photos = res);
    console.log(this.photos);
  }

  ViewphotoDetail(photo_id) {
    let url: string = "/photo/" + photo_id;
    this.router.navigateByUrl(url);
  }
  
  back(){
    this.router.navigate(['/home']);
  }
}
