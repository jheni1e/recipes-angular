import { Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { AboutComponent } from './features/about/about.component';
import { FavoritesComponent } from './features/favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
