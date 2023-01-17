import { ViewChild} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { IProduit } from 'src/app/modeles/produitsModel';
import { ProduitServicesService } from 'src/app/services/produit-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { RestaurantServicesService } from 'src/app/services/restaurant-services.service';
import { IRestaurant } from 'src/app/modeles/restaurantsModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dessert-gestion',
  templateUrl: './main-dessert-gestion.component.html',
  styleUrls: ['./main-dessert-gestion.component.scss']
})
export class MainDessertGestionComponent implements OnInit {

  produits!: IProduit[];
  restaurants!:IRestaurant[];
  displayedColumns:string[] = ['ID', 'nom', 'prix', 'restaurant','types'];
  dataSource!:MatTableDataSource<IProduit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ProduitServices:ProduitServicesService,private restaurantServices:RestaurantServicesService,private toast: NgToastService,private router: Router) {
   }

  ngOnInit(): void {
    this.getAllProducts()
  }


  getAllProducts(): void{
    this.ProduitServices.getProduitsData().subscribe({
      next: (data) => {
        let allproducts:IProduit[]=data.body.result
        this.produits=[]
        allproducts.forEach((produit:IProduit) => {
          if (produit.supplement==false && produit.typeDeProduitId==0){
            this.produits.push(produit)
          }
        });

        this.toast.info({
          detail:this.produits.length+" desserts trouvés",
          summary: "Found",
          duration:3000    });
          this.restaurantServices.getRestaurantsData().subscribe({
            next:(data)=>{
              this.restaurants=data.body.result
              this.dataSource = new MatTableDataSource<IProduit>(this.produits);
              this.dataSource.paginator = this.paginator;
            }
          })
        },
      error: (err: HttpErrorResponse) => {},
    })

  }

    // displayTypeByProduct(element:IProduit): string{
    //   displa
    //   element.types.forEach(type => {
        
    //   });
    // }

    public getRestoNameFromId(id:number):string{
      let query="error"
      this.restaurants.forEach(resto => {
        if (resto.id==id){
          query= resto.ville
        }
      });
      return query
    }
    public goTo(dir:string):void{
      this.router.navigate([dir])
    }
}

