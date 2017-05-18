import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   homeClicked:boolean=false;
  aboutClicked:boolean=false;qualClicked:boolean=false;motivationClicked:boolean=false;

ngOnInit(){
  this.homeClicked = true;
}


menuClicked(menuName){
  
  if(menuName=='home') {this.homeClicked = true;this.aboutClicked=false;this.qualClicked=false;this.motivationClicked=false;}
  else if (menuName=='about') {this.aboutClicked=true; this.homeClicked=false; this.qualClicked=false;this.motivationClicked=false;}
  else if (menuName=='qual') {this.qualClicked=true;this.homeClicked=false;this.aboutClicked=false;this.motivationClicked=false;}
   else if (menuName=='motivation') {this.motivationClicked=true; this.homeClicked=false; this.aboutClicked=false;this.qualClicked=false;}
             
  }

}
