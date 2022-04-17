import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn:'root',
}
)

export class ProductService {

getProducts() : IProduct[] {
    return [
        {
            id: 1,
            productName: 'Leaf Rake',
            productCode: 'GDN-0011',
            description: 'Leaf rake with 48-inch wooden handle',
            starRating: 3.2,
            price: 13,
            imgUrl: 'assets/img/images.jpeg'
        },
        {
            id: 2,
            productName: 'Garden Cart',
            productCode: 'GDN-0023',
            description: '15 gallon capacity rolling garden cart',
            starRating: 4.2,
            price:6.99,
            imgUrl: 'assets/img/imagesm.jpeg'
        },
        {
            id: 5,
            productName: 'Hammer',
            productCode: 'TBX-0048',
            description: 'Curved claw steel hammer',
            starRating: 4.8,
            price: 123.67,
            imgUrl: 'assets/img/imagesi.jpeg'
        },
        {
            id: 8,
            productName: 'Saw',
            productCode: 'TBX-0022',
            description: '15-inch steel blade hand saw',
            starRating: 3.7,
            price:2.78,
            imgUrl: 'assets/img/downloadm.jpeg'
        },
        {
            id: 10,
            productName: 'Video Game Controller',
            productCode: 'GMG-0042',
            description: 'Standard two-button video game controller',
            starRating: 4.6,
            price:7.87,
            imgUrl: 'assets/img/download.jpeg'
        }


    ]
}
}