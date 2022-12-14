import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduit } from 'src/app/modeles/produitsModel';
import { ProduitServicesService } from 'src/app/services/produit-services.service';

@Component({
  selector: 'app-modify-plat',
  templateUrl: './modify-plat.component.html',
  styleUrls: ['./modify-plat.component.scss']
})
export class ModifyPlatComponent implements OnInit {
  produits!: IProduit[];


  constructor(private ProduitSerives:ProduitServicesService ) {
  }

  ngOnInit(): void {
    this.ProduitSerives.getProduitsData().subscribe({
      next: (data) => {
        this.produits=data.body.result
        console.log(this.produits)
        },
      error: (err: HttpErrorResponse) => {},
    })
  }

  onChange(): void{
    console.log("oui")
  }

}
