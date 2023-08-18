import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
 enableProdMode();
}
/** 
 * detect browser language**/ 
if(window.navigator.language){console.log(window.navigator.language,'lang');}





platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
