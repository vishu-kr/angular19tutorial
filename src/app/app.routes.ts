import { Routes } from '@angular/router';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path:'ng-class',
        component:NgClassComponent
    },
    {
        path:'ng-if',
        component:NgIfComponent
    },
    {
        path:'ng-for',
        component: NgForComponent
    },
    {
        path:'ng-style',
        component: NgStyleComponent
    },
    {
        path:'template-form',
        component: TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent
    }
];
