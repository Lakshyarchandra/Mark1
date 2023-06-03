import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public productDetails: any;

  public getProductDetail(product:any){
    console.log(product);

    this.productDetails=product;
  }
  public products=[
    {
    id: 1,
    name: 'Product 1',
    price:'100',
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    imgURL: 'assets/images/home/img.png'
    },

    {
      id: 2,
      name: 'Product 2',
      price:'200',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL: 'assets/images/home/img.png'
    },

    {
      id: 3,
      name: 'Product 3',
      price:'300',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL: 'assets/images/home/img.png'
    },

    {
      id: 4,
      name: 'Product 4',
      price:'400',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL: 'assets/images/home/img.png'
    },

    {
      id: 5,
      name: 'Product 5',
      price:'500',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL: 'assets/images/home/img.png'
    },

      


  ]
}
