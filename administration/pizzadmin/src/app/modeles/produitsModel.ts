import { IType } from 'src/app/modeles/typesModel';

export interface IProduit {
    id:number;
    description: string;
    nom: string;
    imgPath:string;
    prix:number;
    restaurantId:number;
    supplement:boolean;
    bloqueCreneau:boolean;
    typeDeProduitId:number;
  }
  