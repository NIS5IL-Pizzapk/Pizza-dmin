import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { IProduit } from 'src/app/modeles/produitsModel';
import { ProduitServicesService } from 'src/app/services/produit-services.service';

@Component({
  selector: 'app-modify-plat',
  templateUrl: './modify-plat.component.html',
  styleUrls: ['./modify-plat.component.scss']
})
export class ModifyPlatComponent implements OnInit {
  produits!: IProduit[];
  selectedProduit!:IProduit;
  produitForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    imgPath: new FormControl('', [Validators.required]),
    prix: new FormControl(0, [Validators.required]),
    });


  constructor(private ProduitSerives:ProduitServicesService,
    private toast: NgToastService
    ) {
  }

  ngOnInit(): void {
    this.ProduitSerives.getProduitsData().subscribe({
      next: (data) => {
        this.produits=data.body.result
        console.log(this.produits)
        this.toast.info({
          detail:this.produits.length+" produits trouvés",
          summary: "Found",
          duration:3000    });
        },
      error: (err: HttpErrorResponse) => {},
    })
  }

  onSubmit():any{

  }

  onChange(event:any): void{


    this.produits.forEach(produit => {
      if(produit.id===event.value){
        this.selectedProduit=produit
        this.produitForm.controls.description.setValue(produit.description)
        this.produitForm.controls.nom.setValue(produit.nom)
        this.produitForm.controls.imgPath.setValue(produit.imgPath)
        this.produitForm.controls.prix.setValue(produit.prix)
        this.toast.info({
          detail: this.selectedProduit.nom,
          summary: "selectionné(e)",
          duration:2000    });
        return
      }  
    });
    
  }

}
