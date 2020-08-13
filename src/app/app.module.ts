import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SectionComponent } from './home/section/section.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './home/footer/footer.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
