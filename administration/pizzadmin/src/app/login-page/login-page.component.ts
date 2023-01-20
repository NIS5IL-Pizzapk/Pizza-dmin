import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  divStyle:number
  background:HTMLElement
  frozen:boolean=false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const background=document.querySelector("#background") as HTMLElement;

    if (background){
      // background.style.backgroundPositionY="-"+300+"px"
      background.addEventListener("mousemove", (e) => {
        let y=e.clientY
        // console.log(background.offsetWidth)
        if(!this.frozen){
          if (y<670){
            background.style.backgroundPositionY="-"+y/2+"px"
          }
        }

      });
    }

  }

  redirect():void{
      this.router.navigate(["accueil"])
  }

  freezeBackground():void{
    this.frozen=this.frozen==false
  }


}
