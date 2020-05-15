import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeHeaderComponent } from './components/recipe-detail/recipe-detail.component';

const newLocal = 'view-recipe';
const routes: Routes = [
  { path: '', redirectTo: 'cart-page', pathMatch: 'full' },
  { path: 'cart-page', component: DashboardComponent },
  { path: newLocal, component: RecipeHeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
