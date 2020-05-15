import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { SquareButtonComponent } from './shared/square-button/square-button.component';
import { RectangleCardComponent } from './shared/rectangle-card/rectangle-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormModalComponent } from './shared/form-modal/form-modal.component';
import { RecipeHeaderComponent } from './components/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SquareButtonComponent,
    RectangleCardComponent,
    DashboardComponent,
    FormModalComponent,
    RecipeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
