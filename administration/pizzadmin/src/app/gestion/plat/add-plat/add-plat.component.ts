import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { IProduit } from 'src/app/modeles/produitsModel';
import { IRestaurant } from 'src/app/modeles/restaurantsModel';
import { IType } from 'src/app/modeles/typesModel';
import { ProduitServicesService } from 'src/app/services/produit-services.service';
import { RestaurantServicesService } from 'src/app/services/restaurant-services.service';
import { TypeServicesService } from 'src/app/services/type-services.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.touched));
  }
}

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.scss']
})
export class AddPlatComponent implements OnInit {
  types!: IType[];
  restaurants!:IRestaurant[];
  produitForm = new FormGroup({
    type: new FormControl<number|null>(null, [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    prix: new FormControl<number|null>(null, [Validators.required]),
    restaurant:new FormControl<number | null>(null,[Validators.required])
    });
  matcher = new MyErrorStateMatcher();


  constructor(private RestaurantServices:RestaurantServicesService,
              private TypeServices:TypeServicesService,
              private dialogRef: MatDialogRef<AddPlatComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
              ) {
                
               }

  ngOnInit(): void {
    this.TypeServices.getTypesData().subscribe({
      next: (res) => {
        this.types=res.body.result
        if(this.data.type=="global")this.types = this.types.filter((t) => t.nom != "boisson" && t.nom != "dessert")
        if(this.data.type=="boisson"){
          this.types= this.types.filter((t) => t.nom == "boisson");
          this.produitForm.controls.type.setValue(this.types[0].id);
        }
        if(this.data.type=="dessert"){
          this.types= this.types.filter((t) => t.nom == "dessert");
          this.produitForm.controls.type.setValue(this.types[0].id);
        }
        if(this.data.produit){
          this.produitForm.controls.type.setValue(this.data.produit.typeDeProduitId)
        }
        },
      error: (err: HttpErrorResponse) => {},
    })

    this.RestaurantServices.getRestaurantsData().subscribe({
      next: (res) => {
        this.restaurants=res.body.result
        if(this.data.produit){
          this.produitForm.controls.restaurant.setValue(this.data.produit.restaurantId)
        }
        },
      error: (err: HttpErrorResponse) => {},
    })

    if (this.data.produit){
      this.produitForm.patchValue(this.data.produit);
    }
  }


  onSubmit():void{
    let id=0
    if(this.data.produit){
      id=this.data.produit.id
    }
        let produit:IProduit={
        id:id,
        nom:this.produitForm.controls.nom.value ?? '',
        description:this.produitForm.controls.description.value ?? '',
        prix:this.produitForm.controls.prix.value ?? 0,
        imgPath:"image",
        restaurantId:this.produitForm.controls.restaurant.value ?? 0,
        supplement:false,
        typeDeProduitId:this.produitForm.controls.type.value ?? 0,
        bloqueCreneau:true
      }
    this.dialogRef.close(produit);
 
    // this.produitForm.reset()
    // this.produitForm.markAsPristine()
    // this.produitForm.markAsUntouched();

  }

}

export interface DialogData{
  type : string,
  produit: IProduit|null
}