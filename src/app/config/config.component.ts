import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers: [ ConfigService ]
})
export class ConfigComponent implements OnInit {

  constructor(public configService: ConfigService) { 
    this.showSimple();
  }

  showSimple() {
    this.configService.getConfigSimple()
      .subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}