import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'problem', loadChildren: './problem/problem.module#ProblemPageModule' },
  { path: 'MyMP', loadChildren: './my-mp/my-mp.module#MyMPPageModule' },
  { path: 'description', loadChildren: './description/description.module#DescriptionPageModule' },
  { path: 'stream', loadChildren: './stream/stream.module#StreamPageModule' },
  { path: 'pupdate', loadChildren: './pupdate/pupdate.module#PupdatePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
