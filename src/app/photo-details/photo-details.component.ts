import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  photo;
  constructor(private routeid: ActivatedRoute, private storage: StorageService, private router: Router) {}

  ngOnInit() {
    this.routeid.params.subscribe(params => {
      this.loadDetail(params['id']); 
    });
  }

  loadDetail(id) {
    this.storage.photo(id).then(res => this.photo = res);
  }
  
}
