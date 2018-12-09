import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  id;
  photo;
  constructor(private routeid: ActivatedRoute, private storage: StorageService, private router: Router) {
    this.routeid.params.subscribe(params => {
      this.id = params['id']
    });
    this.loadDetail();
  }

  ngOnInit() {

  }

  back(){
    this.router.navigateByUrl('/home');
  }

  loadDetail() {
    this.storage.photo(this.id).then(res => this.photo = res);
  }

}
