import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to angular';
  orderid = 1;
  ordername = 'abc';
  orderedproduct ='mango';

  employee = {
    name:'harsh',
    age:23,
    married:true
  }
}
