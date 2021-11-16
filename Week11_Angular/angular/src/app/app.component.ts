import { Component } from '@angular/core';
import work from "./data/work.json"
import experience from "./data/experience.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title: string = 'My work';
  // week: number = 4;
  

  projects:{id:any, img:string, title:string, category:string, date:string}[] =work;
  experience:{
    id:any,
    company:string,
    duration:string, 
    discription:string,
    discription2:string,
    discription3:string
  }[] =experience;
}