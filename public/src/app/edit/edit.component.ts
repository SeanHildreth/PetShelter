import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  private sub: any;
  pet: any;
  errors: any;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    const obs = this._httpService.getPet(this.id);
    obs.subscribe(data => {
      console.log(data);
      this.pet = data[0];
    });
  }

  editPet() {
    console.log(this.pet);
    const obs = this._httpService.editPet(this.id, this.pet);
    obs.subscribe(data => {
      if(!data['errors']) {
        console.log("Updated", data);
        this._router.navigate(['' + this.id])
      }
      console.log("Now I'm here", data);
      this.errors = data['errors'];
    } )
  }

}
