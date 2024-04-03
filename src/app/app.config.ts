import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//       //...
//   ],
//   //...
// })
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([BrowserModule, BrowserAnimationsModule, HttpClientModule])
  ],
};
