import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

@NgModule({
  declarations: [ContactListComponent, ContactUpdateComponent],
  exports: [ContactListComponent],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
