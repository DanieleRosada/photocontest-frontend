import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  base_url = "http://localhost:3000";
  options;
  constructor(private http: HttpClient) {
    this.getToken();
  }

  login(username, password) {
    return this.http.post(this.base_url + '/login', { username, password });
  }

  getToken() {
    this.options = { headers: { 'x-access-token': sessionStorage.getItem('token') } };
  }

  saveToken(token) {
    sessionStorage.setItem('token', JSON.stringify(token));
    this.getToken();
  }

  createUser(username, password, email) {
    return this.http.post(this.base_url + '/sigup', { username, password, email });
  }

  upload(file) {
    let formData:FormData = new FormData();
    formData.append('photo', file, file.name);
    return this.http.post(this.base_url + '/upload',  formData);
  }

  logout() {
    sessionStorage.clear();
  }

  vote(vote,id_photo,id_user){
    return this.http.post(this.base_url + '/vote', { vote,id_photo,id_user });
  }

  async load(){
    return await fetch(this.base_url + '/home', this.options).then(res => res.json());
  }

}
