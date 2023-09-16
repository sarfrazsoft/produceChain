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
import { BuyerDashboardCartComponent } from './buyer-dashboard/buyer-dashboard-cart/buyer-dashboard-cart.component';
import { BuyerDashboardAccountComponent } from './buyer-dashboard/buyer-dashboard-account/buyer-dashboard-account.component';
import { BuyerDashboardNewOrderComponent } from './buyer-dashboard/buyer-dashboard-new-order/buyer-dashboard-new-order.component';
import { BuyerDashboardMessagesComponent } from './buyer-dashboard/buyer-dashboard-messages/buyer-dashboard-messages.component';
import { BuyerDashboardOrderHistoryComponent } from './buyer-dashboard/buyer-dashboard-order-history/buyer-dashboard-order-history.component';

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
	{ path: 'buyer-dashboard-cart', component: BuyerDashboardCartComponent },
	{ path: 'buyer-dashboard-account', component: BuyerDashboardAccountComponent },
	{ path: 'buyer-dashboard-new-order', component: BuyerDashboardNewOrderComponent },
	{ path: 'buyer-dashboard-messages', component: BuyerDashboardMessagesComponent },
	{ path: 'buyer-dashboard-order-history', component: BuyerDashboardOrderHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
