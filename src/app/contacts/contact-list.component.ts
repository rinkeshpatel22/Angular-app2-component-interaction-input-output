import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contactList:any = [{ name: 'Rinkesh', mobile: '0987654321'}];
  updatedContactList:any = [];
 
  public onContactUpdated(updtaedList): void{
   this.updatedContactList = updtaedList;
  }
}
