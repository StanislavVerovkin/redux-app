import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';
import { PullsComponent } from './pulls/pulls.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { gitReducer } from './redux/git.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TestEffect } from './redux/test.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';

const reducers = {
  gitPage: gitReducer
};

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    PullsComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictStateSerializability: true,
      },
    }),
    EffectsModule.forRoot([ TestEffect ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
