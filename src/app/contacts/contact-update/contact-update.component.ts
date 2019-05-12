import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent {

  @Input() contacts: any;
  @Output() onUpdated =  new EventEmitter<any>();
  updatedContacts:any = [];

  updateValue(): void{
    this.updatedContacts = [{name:'Rinkesh', mobile:'9999999999'}];
    this.onUpdated.emit(this.updatedContacts);
  }

}
