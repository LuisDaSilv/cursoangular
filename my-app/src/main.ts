import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Calendar } from './app/calendar/calendar';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
