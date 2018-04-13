import { RouterModule, Routes } from '@angular/router';
import { BirlasoftNoidaComponent } from './birlasoft-noida/birlasoft-noida.component';
import { BirlasoftChennaiComponent } from './birlasoft-chennai/birlasoft-chennai.component';
import { BranchOneComponent } from './birlasoft-chennai/branch-one/branch-one.component';
import { BranchTwoComponent } from './birlasoft-chennai/branch-two/branch-two.component';

const routes: Routes = [

    { path: 'birlasoft-noida', component: BirlasoftNoidaComponent, },
    
    { path: 'birlasoft-chennai', component: BirlasoftChennaiComponent,

    children: [
        { path: 'branch-one', component: BranchOneComponent },
        { path: 'branch-two', component: BranchTwoComponent }
      ]

    },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);