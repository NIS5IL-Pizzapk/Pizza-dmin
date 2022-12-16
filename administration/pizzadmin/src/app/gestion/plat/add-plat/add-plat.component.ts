import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgToastService } from 'ng-angular-popup';
import { IProduit } from 'src/app/modeles/produitsModel';
import { IRestaurant } from 'src/app/modeles/restaurantsModel';
import { IType } from 'src/app/modeles/typesModel';
import { ProduitServicesService } from 'src/app/services/produit-services.service';
import { RestaurantServicesService } from 'src/app/services/restaurant-services.service';
import { TypeServicesService } from 'src/app/services/type-services.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
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
    type: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    prix: new FormControl(null, [Validators.required]),
    });
  restaurantsSelected:number[]=[];
  matcher = new MyErrorStateMatcher();


  constructor(private ProduitServices:ProduitServicesService,
            private RestaurantServices:RestaurantServicesService,
              private TypeServices:TypeServicesService,
              private toast: NgToastService) { }

  ngOnInit(): void {
    this.TypeServices.getTypesData().subscribe({
      next: (data) => {
        this.types=data.body.result
        for(let x=this.types.length-1;x>=0;x--){
          if (this.types[x].nom==="boisson" || this.types[x].nom==="dessert"){
            this.types.splice(this.types.indexOf(this.types[x]),1)
        }}
        },
      error: (err: HttpErrorResponse) => {},
    })

    this.RestaurantServices.getRestaurantsData().subscribe({
      next: (data) => {
        this.restaurants=data.body.result
        },
      error: (err: HttpErrorResponse) => {},
    })
  }

  restoChecked(event:any):void{
    let value:number=event.source.value
    if(event.checked){
      this.restaurantsSelected.push(value)
    }
    else{
      // delete this.restaurantsSelected[this.restaurantsSelected.indexOf(value)]
      this.restaurantsSelected.splice(this.restaurantsSelected.indexOf(value),1)
    }
    console.log(this.restaurantsSelected)
  }


  onSubmit():void{

    this.restaurantsSelected.forEach(restoId => {

      let produit:IProduit={
        id:0,
        nom:this.produitForm.controls.nom.value ?? '',
        description:this.produitForm.controls.description.value ?? '',
        prix:this.produitForm.controls.prix.value ?? 0,
        imgPath:"image",
        // restaurantId:this.produitForm.controls['restaurant'].value,
        restaurantId:restoId,
        supplement:false
      }
      this.ProduitServices.addProduit(produit).subscribe({
        next: (data)=>{
          this.toast.success({
            detail:produit.nom+" a été créé avec succès",
            summary: "Creation",
            duration:3000    });  
        }
      })

    });
    this.produitForm.reset()
    // this.produitForm.markAsUntouched()
    this.produitForm.markAsPristine()
    this.produitForm.markAsUntouched();

    // location.reload();
    console.log(this.produitForm.controls.description)

  }

}
