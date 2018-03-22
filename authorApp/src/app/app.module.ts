import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthorService } from './author.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { QuoteComponent } from './quote/quote.component';
import { WritequoteComponent } from './writequote/writequote.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    PagenotfoundComponent,
    EditComponent,
    NewComponent,
    QuoteComponent,
    WritequoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
