import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addPet(stuff) {
    console.log("I'm here", stuff);
    const obs = this._httpService.addPet(stuff);
    obs.subscribe(data => {
      if(!data['errors']) {
        this._router.navigate([''])
      }
      this.errors = data['errors'];
      console.log("Errors!", data['errors']);
    } )
  }

}
