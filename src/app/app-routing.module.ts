import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoommatesComponent } from './roommates/roommates.component';
import { ContactComponent } from './contact/contact.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'roommates', component: RoommatesComponent},
  { path:'contact', component: ContactComponent},
  { path:'photo-album', component: PhotoAlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
