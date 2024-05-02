import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { SalesModule } from './components/sales/sales.module';
import { CouponsModule } from './components/coupons/coupons.module';
import { PagesModule } from './components/pages/pages.module';
import { MediaModule } from './components/media/media.module';
import { MenusModule } from './components/menus/menus.module';
import { VendorsModule } from './components/vendors/vendors.module';
import { UsersModule } from './components/users/users.module';
import { LocalizationModule } from './components/localization/localization.module';
import { InvoiceModule } from './components/invoice/invoice.module';
import { SettingModule } from './components/setting/setting.module';;
import { ReportsModule } from './components/reports/reports.module';
import { AuthModule } from './components/auth/auth.module';

import { PurchaseModule } from "./components/purchase/purchase.module";
import { QueriesModule } from "./components/queries/queries.module";
import { RegistrationModule } from "./components/registration/registration.module";
import { HashLocationStrategy,LocationStrategy } from "@angular/common";

import { HttpClientModule  } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { httpInterceptorProviders } from './components/auth/http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),ModalModule.forRoot(),
    AppRoutingModule,HttpClientModule,
    DashboardModule,
    InvoiceModule,ModalModule,
    SettingModule,
    ReportsModule,
    AuthModule,
    SharedModule,
    LocalizationModule,
    ProductsModule,
    SalesModule,
    VendorsModule,
    CouponsModule,
    PagesModule,
    MediaModule,
    MenusModule,
    UsersModule,
    
    PurchaseModule,
    QueriesModule,
    RegistrationModule,ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders,

    {provide: LocationStrategy, useClass: HashLocationStrategy}],
    // provider used to create fake backend
  bootstrap: [AppComponent]
})
export class AppModule { }
