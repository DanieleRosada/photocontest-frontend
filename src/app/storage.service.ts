import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  base_url = "http://127.0.0.1:3000";
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

  upload(file, userid, title, description, username) {
    let formData: FormData = new FormData();
    formData.append('photo', file);
    formData.append('userid', userid);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('username', username);
    return this.http.post(this.base_url + '/upload', formData, this.options);
  }

  vote(vote, idphoto, iduser) {
    return this.http.post(this.base_url + '/vote', { vote, idphoto, iduser }, this.options);
  }

  deletePhoto(idphoto) {
    return this.http.post(this.base_url + '/deletephoto', { idphoto }, this.options);
  }

  async load(userid) {
    let form = JSON.stringify({ "userid": userid });
    return await fetch(this.base_url + '/photos', {
      method: "POST",
      body: form,
      headers: { 'x-access-token': sessionStorage.getItem('token'), 'Content-Type': 'application/json' }
    }).then(res => res.json());
  }

  async photo(idphoto) {
    let form = JSON.stringify({ "idphoto": idphoto });
    return await fetch(this.base_url + '/photo', {
      method: "POST",
      body: form,
      headers: { 'x-access-token': sessionStorage.getItem('token'), 'Content-Type': 'application/json' }
    }).then(res => res.json());
  }

  async photosRaking() {
    return await fetch(this.base_url + '/ranking/photos', this.options).then(res => res.json());
  }
  async userRaking() {
    return await fetch(this.base_url + '/ranking/users', this.options).then(res => res.json());
  }

  async owenPhoto(userid) {
    let form = JSON.stringify({ "userid": userid });
    return await fetch(this.base_url + '/owenphotos', {
      method: "POST",
      body: form,
      headers: { 'x-access-token': sessionStorage.getItem('token'), 'Content-Type': 'application/json' }
    }).then(res => res.json());
  }

  async search(name, userid) {
    let form = JSON.stringify({ "search": name, "userid": userid});
    return await fetch(this.base_url + '/search', {
      method: "POST",
      body: form,
      headers: { 'x-access-token': sessionStorage.getItem('token'), 'Content-Type': 'application/json' }
    }).then(res => res.json());
  }

  user() {
    return this.http.get(this.base_url + '/user', this.options);
  }
}
