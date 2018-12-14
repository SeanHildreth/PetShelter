import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    const obs = this._httpService.getPets();
    obs.subscribe(data => {
      console.log(data);
      this.pets = data;
      this.pets.sort((a,b) => {
        a = a.type.toLowerCase();
        b = b.type.toLowerCase();
        return a < b ? -1 : a > b ? 1: 0;
      });
    });
  }
}
