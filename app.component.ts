import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html',
  styleUrls:['./app/css/app.component.css']
})
export class AppComponent {
	public items = ['Choclates','Fruits','Fastfood','Icecreams','Cakes','Chats'];
	public recentItems = "None";
	public cart = [];

	ItemSelected(item){
		this.recentItems = item;
		this.cart.push(item);

	}  
}
