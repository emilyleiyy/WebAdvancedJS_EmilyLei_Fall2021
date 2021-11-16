import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() title:any;
  @Input() img:any;
  @Input() category:any;
  @Input() date:any;
  @Input() id:any;

  constructor() { }

  ngOnInit(): void {
  }

}
