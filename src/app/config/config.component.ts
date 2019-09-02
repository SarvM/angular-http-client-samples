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
  error: any;

  constructor(public configService: ConfigService) { 
    this.config = undefined;
    this.error = undefined;
  }


  ngOnInit() {
        //this.showSimple();
    //console.log(this.showSimpleAssignObject());

    //console.log(this.config);
  }

  showSimple() {
    this.configService.getConfigSimple()
      .subscribe(data => console.log(data));
  }

  showSimpleAssignObject() {
    this.configService.getConfigSimple()
      .subscribe((data: Config) => {
        this.config = {
          employeeUrl: data['employeeUrl'],
          mockFile: data['mockFile']
        }
        //console.log(this.config)
      });
  }

    showSimpleTypedObject() {
    this.configService.getConfigSimple()
      .subscribe((data: Config) => {
        this.config = { ...data },
        error => this.error = error
      });
  }

}