import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteMessageModalComponent } from './delete-message-modal/delete-message-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { HeaderComponent } from './header/header.component';
import { InviteModalComponent } from './invite-modal/invite-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListingPageFooterComponent } from './listing-page-footer/listing-page-footer.component';
import { ListingPageHeaderComponent } from './listing-page-header/listing-page-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { ListingRatingComponent } from './listing-rating/listing-rating.component';

@NgModule({
	declarations: [
		SidebarComponent,
		HeaderComponent,
		InviteModalComponent,
		DeleteModalComponent,
		DeleteMessageModalComponent,
  		ListingPageFooterComponent,
		ListingPageHeaderComponent,
  ListingRatingComponent,
	],
	imports: [
		RouterModule,
		CommonModule,
		FormsModule,
		FontAwesomeModule,
		MatDialogModule,
		MatSelectModule,
		MatExpansionModule,
		MatInputModule,
		MatMenuModule
	],
	exports: [
		 SidebarComponent,
		 HeaderComponent,
		 ListingPageHeaderComponent,
  		 ListingPageFooterComponent,
		 ListingRatingComponent
		],
	entryComponents: [InviteModalComponent, DeleteModalComponent],
})
export class ComponentsModule {}
