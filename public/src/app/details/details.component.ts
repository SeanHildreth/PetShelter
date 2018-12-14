import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  private sub: any;
  pet: any;
  showLike = true;

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

  likePet() {
    this.showLike = false;
    this.pet.likes += 1;
    const obs = this._httpService.likePet(this.id, this.pet);
    obs.subscribe(data => {
      console.log(data);
      this.pet = data[0];
    });
  }

  adoptPet() {
    const obs = this._httpService.deletePet(this.id);
    obs.subscribe(data => {
      this._router.navigate([''])
    })
  }
}
