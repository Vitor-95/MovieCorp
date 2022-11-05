import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { BillboardComponent } from './pages/billboard/billboard.component';
import { TheatersComponent } from './pages/theaters/theaters.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'theaters', pathMatch: 'full' },
  { path: 'theaters', component: TheatersComponent },
  { path: 'billboard', component: BillboardComponent },
  { path: 'movie/:id', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
