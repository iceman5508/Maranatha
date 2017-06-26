import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PastorsComponent } from './pastors/pastors.component';
import { ContactComponent } from './contact/contact.component';
/**
 * Created by parker10 on 6/26/2017.
 */
export var Site_Route = RouterModule.forRoot([
    { path: 'Home', component: HomeComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Pastors', component: PastorsComponent },
    { path: 'Contact', component: ContactComponent },
    { path: '**', redirectTo: '/Home', pathMatch: 'full' },
]);
//# sourceMappingURL=C:/Users/parker10/Desktop/Angular/MARANATHA/src/app/site.route.js.map