import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/core/src/util';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  base_url = "http://localhost:3000";
  options;
  constructor(private http: HttpClient) {
    this.getToken();
  }

  getToken() {
    this.options = { headers: { 'x-access-token': sessionStorage.getItem('token') } };
  }

  saveToken(token) {
    sessionStorage.setItem('token', JSON.stringify(token));
    this.getToken();
  }

  login(username, password) {
    return this.http.post(this.base_url + '/login', { username, password });
  }

  logout() {
    sessionStorage.clear();
  }

  createUser(username, password, email) {
    return this.http.post(this.base_url + '/sigup', { username, password, email });
  }

  upload(file, user_id) {
    let formData: FormData = new FormData();
    formData.append('photo', file, user_id + "_" + file.name);
    return this.http.post(this.base_url + '/upload', formData);
  }

  vote(vote, id_photo, id_user) {
    return this.http.post(this.base_url + '/vote', { vote, id_photo, id_user });
  }

  async load(userid) { 
    let form = JSON.stringify({"userid": userid});  
    return await fetch(this.base_url + '/home', {
      method: "POST",
      body: form,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }

  async photo(idphoto){
    let form = JSON.stringify({"idphoto": idphoto});  
    return await fetch(this.base_url + '/photo', {
      method: "POST",
      body: form,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }

}
