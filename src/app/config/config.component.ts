import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers: [ ConfigService ]
})
export class ConfigComponent implements OnInit {

  config: Config;

  constructor(public configService: ConfigService) { 
    //this.config = undefined;


  }


  ngOnInit() {
        //this.showSimple();
    console.log(this.showSimpleAssignObject());

    console.log(this.config);
  }

  showSimple() {
    this.configService.getConfigSimple()
      .subscribe(data => console.log(data));
  }

  showSimpleAssignObject() {
    this.configService.getConfigSimple()
      .subscribe((data: Config) => 
        this.config = {
          employeeUrl: data['employeeUrl'],
          mockFile: data['mockFile']
        }
      )
  }

}