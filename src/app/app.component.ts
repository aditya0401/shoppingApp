import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemSelected= 'recipe';
  onItemClicked(value){
    console.log("call from", value);
    this.itemSelected= value;
  }
}
