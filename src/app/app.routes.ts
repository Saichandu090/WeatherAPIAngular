import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'weather',
        component:WeatherComponent
    }
];
