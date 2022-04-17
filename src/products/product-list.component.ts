import { Component, OnInit } from "@angular/core";
/*import { listenerCount } from "process";*/
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})


export class ProductListComponent implements OnInit{
pageTitle: string ='Product List!';
imageWidth:number= 50;
imageMargin:number=2;
showImg :boolean = false;


private _listFilter:string= '' ;
get listFilter ():string{
    return this._listFilter;

}
set listFilter(value:string){
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredProducts = this.performFilter(value);
}
filteredProducts:IProduct[]=[];
products: IProduct[] =[
   
];

constructor (private productService: ProductService){

}

performFilter(filterBY:string): IProduct[]{
   filterBY = filterBY.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
product.productName.toLocaleLowerCase().includes(filterBY));


}
toggleImg ():void{
    this.showImg= !this.showImg;

} 
ngOnInit(): void {
   
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products
}
onRatingClicked(message: string):void{
    this.pageTitle = 'Product list: '+message;

}
}
