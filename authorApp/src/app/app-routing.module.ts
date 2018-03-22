import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { QuoteComponent } from './quote/quote.component';
import { WritequoteComponent } from './writequote/writequote.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'alpha',component: AlphaComponent },
  { path: 'new',component: NewComponent },
  { path: 'edit/:id',component: EditComponent },
  { path: 'quote/:id',component: QuoteComponent },
  { path: 'writequote/:id',component: WritequoteComponent },
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
