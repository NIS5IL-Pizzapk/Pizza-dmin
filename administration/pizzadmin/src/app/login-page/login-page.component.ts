import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private compteur=0  

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  troll():void{

    this.compteur+=1
    if (this.compteur>=3){
      this.router.navigate(["accueil"])
    }    let element=document.getElementById('mainDiv');
    if (element!=null){
      let numberx=Math.floor(Math.random()*(500+1000))
      numberx-=1000
      element.style.marginLeft=numberx+"px";
      let numbery=Math.floor(Math.random()*(230+300))
      numbery-=300
      element.style.marginTop=numbery+"px";
      element.style.transition='0.3s';      
    }


  }

}
