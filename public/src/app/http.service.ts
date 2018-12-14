import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets() { return this._http.get('/api/pets'); }

  addPet(data) {return this._http.post('/api/pet/new', data); }

  deletePet(id) { return this._http.delete('/api/pet/' + id); }

  getPet(id) { return this._http.get('/api/pet/' + id); }

  editPet(id, data) { return this._http.put('/api/pet/' + id, data); }

  likePet(id, data) { return this._http.put('/api/pet/like/' + id, data); }
}
