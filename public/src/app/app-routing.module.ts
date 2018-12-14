import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from "./pets/pets.component";
import { NewComponent } from "./new/new.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: '', children: [
      { path: '', component: PetsComponent },
      { path: 'new', component: NewComponent },
      { path: ':id', component: DetailsComponent },
      { path: ':id/edit', component: EditComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
