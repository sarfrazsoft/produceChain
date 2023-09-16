import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProducersComponent } from './producers/producers.component';
import { WholesalersComponent } from './wholesalers/wholesalers.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signup/signin/signin.component';
import { NavComponent } from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { JoinComponent } from './join/join.component';
import {MatTableModule} from '@angular/material/table';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { WelcomeDialogComponent } from './dashboard-home/welcome-dialog/welcome-dialog.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {DemoMaterialModule} from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './dashboard-home/account/account.component';
import { OrdersComponent } from './dashboard-home/orders/orders.component';
import { ProduceComponent } from './dashboard-home/produce/produce.component';
import { MessagesComponent } from './dashboard-home/messages/messages.component';
import { NewListingComponent } from './dashboard-home/produce/new-listing/new-listing.component';
import { OrderDetailComponent } from './dashboard-home/orders/order-detail/order-detail.component';
import { PendingOrderDetailComponent } from './dashboard-home/orders/pending-order-detail/pending-order-detail.component';
import { PastOrderDetailComponent } from './dashboard-home/orders/past-order-detail/past-order-detail.component';
import { LiveTrackingComponent } from './dashboard-home/orders/order-detail/live-tracking/live-tracking.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordRecoveryComponent } from './signup/password-recovery/password-recovery.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerDashboardHeaderComponent } from './buyer-dashboard/buyer-dashboard-header/buyer-dashboard-header.component';
import { BuyerDashboardMenuComponent } from './buyer-dashboard/buyer-dashboard-menu/buyer-dashboard-menu.component';
import { BuyerDashboardRegisterComponent } from './buyer-dashboard/buyer-dashboard-register/buyer-dashboard-register.component';
import { BuyerDashboardOrdersComponent } from './buyer-dashboard/buyer-dashboard-orders/buyer-dashboard-orders.component';
import { BuyerDashboardCartComponent } from './buyer-dashboard/buyer-dashboard-cart/buyer-dashboard-cart.component';
import { BuyerDashboardAccountComponent } from './buyer-dashboard/buyer-dashboard-account/buyer-dashboard-account.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    ProducersComponent,
    WholesalersComponent,
    LogisticsComponent,
    ContactComponent,
    SigninComponent,
    NavComponent,
    FooterComponent,
    DashboardHomeComponent,
    DashboardMenuComponent,
    DashboardHeaderComponent,
    JoinComponent,
    WelcomeDialogComponent,
    AccountComponent,
    OrdersComponent,
    ProduceComponent,
    MessagesComponent,
    NewListingComponent,
    OrderDetailComponent,
    PendingOrderDetailComponent,
    PastOrderDetailComponent,
    LiveTrackingComponent,
    SignupComponent,
    PasswordRecoveryComponent,
    BuyerDashboardComponent,
    BuyerDashboardHeaderComponent,
    BuyerDashboardMenuComponent,
    BuyerDashboardRegisterComponent,
    BuyerDashboardOrdersComponent,
    BuyerDashboardCartComponent,
    BuyerDashboardAccountComponent,
    
  ],
  imports: [
    HttpClientModule,
    DemoMaterialModule,
    CdkStepperModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
    SlideshowModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlGeZ3awhxdpwODJN8R5KGSJYN1v6R10E'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ WelcomeDialogComponent, NewListingComponent, OrderDetailComponent, PendingOrderDetailComponent, PastOrderDetailComponent, LiveTrackingComponent ]
})
export class AppModule { }
