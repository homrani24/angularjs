import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  productName="mounir";
  products=['mounir','sniper'];
  isDisable=false;
  Addproduct(){
    this.products.push(this.productName);

  }
  romeProduct(productName : string){
    this.products=this.products.filter(p => p !== productName);

  }

}
