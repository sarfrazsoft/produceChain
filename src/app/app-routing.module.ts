import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ProducersComponent } from './producers/producers.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signup/signin/signin.component';
import { WholesalersComponent } from './wholesalers/wholesalers.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { JoinComponent } from './join/join.component';
import { AccountComponent } from './dashboard-home/account/account.component';
import { OrdersComponent } from './dashboard-home/orders/orders.component';
import { ProduceComponent } from './dashboard-home/produce/produce.component';
import { MessagesComponent } from './dashboard-home/messages/messages.component';
import { PasswordRecoveryComponent } from './signup/password-recovery/password-recovery.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerDashboardRegisterComponent } from './buyer-dashboard/buyer-dashboard-register/buyer-dashboard-register.component';
import { BuyerDashboardOrdersComponent } from './buyer-dashboard/buyer-dashboard-orders/buyer-dashboard-orders.component';
import { BuyerDashboardCartComponent } from './buyer-dashboard/buyer-dashboard-cart/buyer-dashboard-cart.component';
import { BuyerDashboardAccountComponent } from './buyer-dashboard/buyer-dashboard-account/buyer-dashboard-account.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'producers', component: ProducersComponent },
	{ path: 'wholesalers', component: WholesalersComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'logistics', component: LogisticsComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'password-recovery', component: PasswordRecoveryComponent },
	{ path: 'join', component: JoinComponent },
	{ path: 'dashboard-home', component: DashboardHomeComponent },
	{ path: 'dashboard-home/account', component: AccountComponent },
	{ path: 'dashboard-home/orders', component: OrdersComponent },
	{ path: 'dashboard-home/produce', component: ProduceComponent },
	{ path: 'dashboard-home/messages', component: MessagesComponent },
	{ path: 'buyer-dashboard', component: BuyerDashboardComponent },
	{ path: 'buyer-dashboard-register', component: BuyerDashboardRegisterComponent },
	{ path: 'buyer-dashboard-orders', component: BuyerDashboardOrdersComponent },
	{ path: 'buyer-dashboard-cart', component: BuyerDashboardCartComponent },
	{ path: 'buyer-dashboard-account', component: BuyerDashboardAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
