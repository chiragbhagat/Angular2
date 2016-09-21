import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';

// Bootstrap application with AppComponent
bootstrap(AppComponent, [])
    .then(success => console.log('Bootstrap successful!'))
    .catch(error => console.log(error));
