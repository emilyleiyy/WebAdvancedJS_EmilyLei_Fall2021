import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() company:any;
  @Input() duration:any;
  @Input() discription:any;
  @Input() discription2:any;
  @Input() discription3:any;
  @Input() id:any;

  constructor() { }

  ngOnInit(): void {
  }

}
