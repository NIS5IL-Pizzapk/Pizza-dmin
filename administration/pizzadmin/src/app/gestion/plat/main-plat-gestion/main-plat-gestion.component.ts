import { ViewChild } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { AddPlatComponent } from '../add-plat/add-plat.component';

@Component({
  selector: 'app-main-plat-gestion',
  templateUrl: './main-plat-gestion.component.html',
  styleUrls: ['./main-plat-gestion.component.scss']
})
export class MainPlatGestionComponent implements OnInit {
  produits!: IProduit[];
  restaurants!: IRestaurant[];
  types!: IType[];
  displayedColumns: string[] = ['trucs', 'ID', 'nom', 'prix', 'restaurant', 'types'];
  dataSource!: MatTableDataSource<IProduit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private TypeServices: TypeServicesService, private ProduitServices: ProduitServicesService, private restaurantServices: RestaurantServicesService, private toast: NgToastService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllPlats()
  }


  getAllPlats(): void {
    this.ProduitServices.getPlatsData().subscribe({
      next: (data) => {
        let allproducts: IProduit[] = data.body.result
        this.produits = []
        allproducts.forEach((produit: IProduit) => {
          if (produit.supplement == false && produit.typeDeProduitId != 6 && produit.typeDeProduitId != 5) {
            this.produits.push(produit)
          }
        });

        this.toast.info({
          detail: this.produits.length + " plat(s) trouvés",
          summary: "Found",
          duration: 3000
        });
        this.restaurantServices.getRestaurantsData().subscribe({
          next: (data) => {
            this.restaurants = data.body.result
            this.TypeServices.getTypesData().subscribe({
              next: (data) => {
                this.types = data.body.result
                this.dataSource = new MatTableDataSource<IProduit>(this.produits);
                this.dataSource.paginator = this.paginator;
              }
            })
          }
        })
      },
      error: (err: HttpErrorResponse) => { },
    })

  }

  // displayTypeByProduct(element:IProduit): string{
  //   displa
  //   element.types.forEach(type => {

  //   });
  // }

  public getRestoNameFromId(id: number): string {
    let query = "error"
    this.restaurants.forEach(resto => {
      if (resto.id == id) {
        query = resto.ville
      }
    });
    return query
  }
  public getTypeNameFromId(id: number): string {
    let query = "error"
    this.types.forEach(type => {
      if (type.id == id) {
        query = type.nom
      }
    });
    return query
  }

  public goTo(dir: string): void {
    this.router.navigate([dir])
  }

  addPlat(produit: IProduit): void {
    this.ProduitServices.addProduit(produit).subscribe({
      next: (data) => {
        this.produits.push(data.body.result)
        this.dataSource = new MatTableDataSource<IProduit>(this.produits);
        this.dataSource.paginator = this.paginator;
        this.toast.success({
          detail: data.body.result.nom + " créé",
          summary: "Created",
          duration: 3000
        });
      }
    }
    )
  }

  public ajouter(): void {
    let dialogRef = this.dialog.open(AddPlatComponent, {
      height: '550px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("result in add", result)
      if (!result) return;
      this.addPlat(result)
    });
  }

  public modifier(id: number): void {
    let produit = this.produits.find((p) => { return p.id == id })
    if (!produit) return;
    console.log(produit)
    let dialogRef = this.dialog.open<AddPlatComponent, IProduit, IProduit>(AddPlatComponent, {
      height: '550px',
      width: '400px',
      data: produit
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.modifyPlat(result)
    });
  }

  public copier(id: number): void {
    let produit = this.produits.find((p) => { return p.id == id })
    if (!produit) return;
    console.log(produit)
    let dialogRef = this.dialog.open<AddPlatComponent, IProduit, IProduit>(AddPlatComponent, {
      height: '550px',
      width: '400px',
      data: produit
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.addPlat(result)
    });
  }

  public modifyPlat(produit: IProduit): void {
    this.ProduitServices.modifyPlat(produit).subscribe({
      next: (data) => {

        let i = this.produits.findIndex(p => p.id == produit.id)
        this.produits[i] = produit
        this.dataSource = new MatTableDataSource<IProduit>(this.produits);
        this.dataSource.paginator = this.paginator;
        this.toast.success({
          detail: produit.nom + " mis à jour",
          summary: "Updated",
          duration: 3000
        });
      }
    }
    )
  }

  public delete(id: number): void {
    let produit = this.produits.find((p) => { return p.id == id })
    if (!produit) return;
    let prod = produit; //VS CODE PROBLEM
    if (window.confirm('Voulez-vous vraiment supprimer ce plat? (' + this.getTypeNameFromId(prod.typeDeProduitId) + " : " + prod.nom + ")")) {
      this.ProduitServices.deleteProduct(id).subscribe({
        next: (data) => {
          // this.produits.push(data.body.result)
          // this.produits.pop()
          this.produits.splice(this.produits.indexOf(prod), 1);
          this.dataSource = new MatTableDataSource<IProduit>(this.produits);
          this.dataSource.paginator = this.paginator;
          this.toast.success({
            detail: prod.nom + " supprimé(e)",
            summary: "Deleted",
            duration: 3000
          });
        }
      }
      )
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
