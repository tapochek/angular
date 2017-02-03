import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { APP_ROUTES_PROVIDER } from './app/app.routes';
import { LoggingService } from './app/logging.service';
import { HttpModule } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [APP_ROUTES_PROVIDER, LoggingService, HttpModule]);
