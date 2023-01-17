import { ViewChild} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { IProduit } from 'src/app/modeles/produitsModel';
import { ProduitServicesService } from 'src/app/services/produit-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { RestaurantServicesService } from 'src/app/services/restaurant-services.service';
import { IRestaurant } from 'src/app/modeles/restaurantsModel';
import { IType } from 'src/app/modeles/typesModel';
import { TypeServicesService } from 'src/app/services/type-services.service';
@Component({
  selector: 'app-main-supplements-gestion',
  templateUrl: './main-supplements-gestion.component.html',
  styleUrls: ['./main-supplements-gestion.component.scss']
})
export class MainSupplementsGestionComponent implements OnInit {
  produits!: IProduit[];
  restaurants!:IRestaurant[];
  types!:IType[];
  displayedColumns:string[] = ['ID', 'nom', 'prix', 'restaurant','types'];
  dataSource!:MatTableDataSource<IProduit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private TypeServices:TypeServicesService,private ProduitServices:ProduitServicesService,private restaurantServices:RestaurantServicesService,private toast: NgToastService,private router: Router) {
   }

  ngOnInit(): void {
    this.getAllPlats()
  }


  getAllPlats(): void{
    this.ProduitServices.getProduitsData().subscribe({
      next: (data) => {
        let allproducts:IProduit[]=data.body.result
        this.produits=[]
        allproducts.forEach((produit:IProduit) => {
          if (produit.supplement==true){
            this.produits.push(produit)
          }
        });

        this.toast.info({
          detail:this.produits.length+" suppléments trouvés",
          summary: "Found",
          duration:3000    });
          this.restaurantServices.getRestaurantsData().subscribe({
            next:(data)=>{
              this.restaurants=data.body.result
              this.TypeServices.getTypesData().subscribe({
                next:(data)=>{
                  this.types=data.body.result
                  this.dataSource = new MatTableDataSource<IProduit>(this.produits);
                  this.dataSource.paginator = this.paginator;
                }
              })
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
    public getTypeNameFromId(id:number):string{
      let query="error"
      this.types.forEach(type => {
        if (type.id==id){
          query= type.nom
        }
      });
      return query
    }

    public goTo(dir:string):void{
      this.router.navigate([dir])
    }
}
