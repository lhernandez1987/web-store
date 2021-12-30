import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { EditorModule } from "@tinymce/tinymce-angular";

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { StartComponent } from './components/start/start.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { IndexCustomerComponent } from './components/customer/index/index-customer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RegistrationComponent } from './components/customer/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProductComponent } from './components/products/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SidebarComponent,
    LoginComponent,
    IndexCustomerComponent,
    FilterPipe,
    RegistrationComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgbPaginationModule,
    BrowserAnimationsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
