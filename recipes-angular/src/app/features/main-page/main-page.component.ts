import { Component, Input } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RecipeCardComponent, ButtonComponent, SearchBarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
}
