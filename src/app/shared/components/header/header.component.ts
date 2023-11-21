import { Component } from '@angular/core';
import { Flowbite } from "../../decorators/flowbite";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Flowbite()
export class HeaderComponent {
  closeModals(){ var event = new KeyboardEvent('keydown', { key: 'Escape' }); document.body.dispatchEvent(event); }

}
