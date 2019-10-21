import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'abstract',
    loadChildren: () => import('./admin-abstracts/admin-abstracts.module').then(value => value.AdminAbstractsModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./admin-users/admin-users.module').then(value => value.AdminUsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
