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
  users: any = null;
  message: string = "Ranking not available";
  photoUser:boolean = true;
  constructor(private storage: StorageService, private router: Router) {
    this.raking();
  }


  ngOnInit() {
   }

  raking() {
    this.photoUser = true;
    this.storage.ranking().then(res => this.photos = res);
  }

  userraking() {
    this.photoUser = false;
    this.storage.userranking().then(res => this.users = res);
  }

  ViewphotoDetail(photo_id) {
    let url: string = "/photo/" + photo_id;
    this.router.navigateByUrl(url);
  }
  
  back(){
    this.router.navigate(['/home']);
  }
}
