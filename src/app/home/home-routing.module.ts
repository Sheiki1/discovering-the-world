import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import {TravelComponent} from './components/travel/travel.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'travel',
        component: TravelComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
    ],
    exports: [
        RouterModule,
    ]
})
export class HomeRoutingModule {}