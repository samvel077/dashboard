import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import {
	BrowserModule,
	BrowserTransferStateModule,
} from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthHeaderComponent } from 'src/app/common/auth/auth-header/auth-header.component';
import { CompanyVerifyComponent } from 'src/app/common/auth/company-verify/company-verify.component';
import { LoginComponent } from 'src/app/common/auth/login/login.component';
import { SignupComponent } from 'src/app/common/auth/signup/signup.component';
import { IconsService } from 'src/app/common/icons.service';
import { TokenInterceptor } from 'src/app/common/util/token.interceptor';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		CompanyVerifyComponent,
		SignupComponent,
		AuthHeaderComponent,
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		HttpClientModule,
		BrowserTransferStateModule,
		// TransferHttpCacheModule,
		ReactiveFormsModule,
		FormsModule,
		FontAwesomeModule,
		ComponentsModule,
		BrowserAnimationsModule,
		FontAwesomeModule,
		MatDialogModule,
		MatSelectModule,
		MatExpansionModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true,
		},
		IconsService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
