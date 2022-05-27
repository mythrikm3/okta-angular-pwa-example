import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: DetailsComponent, canActivate: [OktaAuthGuard] },
  { path: 'callback', component: OktaCallbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: MovieListPageComponent,canActivate: [OktaAuthGuard] },
  {path: 'movie/:id', component: MovieDetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
