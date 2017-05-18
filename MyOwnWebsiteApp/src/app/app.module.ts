import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { MotivationComponent } from './motivation/motivation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    QualificationsComponent,
    MotivationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  homeClicked:boolean=false;
  aboutClicked:boolean=false;qualClicked:boolean=false;motivationClicked:boolean=false;

ngOnInit(){
  this.homeClicked = true;
}

fcn(){
  alert("ppppppppppppp");
}
menuClicked(menuName){
  console.log("mmm="+menuName);
  if(menuName=='home') this.homeClicked = true;
  else if (menuName=='about') this.aboutClicked=true;
  else if (menuName=='qual') this.qualClicked=true;
   else if (menuName=='motivation') this.motivationClicked=true;
             
  }

}

