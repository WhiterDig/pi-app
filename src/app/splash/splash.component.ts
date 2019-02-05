import { Component, OnInit } from '@angular/core';
import * as fs from 'file-system';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  ssid: string;
  password: string;

  submitData() {
    console.log('You entered: ' + this.ssid + ' and ' + this.password);
    // fs.writeFileSync('/test.txt', 'You entered: ' + this.ssid + ' and ' + this.password, (err) => {
    //    if (err) {throw err; }
    //    console.log('The file has been saved!');
    //  });
    console.log(exports.fs.writeFileSync('pi-app/test.txt', "'You entered: ' + this.ssid + ' and ' + this.password", (err) => {
      if (err) {throw err; }
      console.log('The file has been saved!');
    }));
  }

  ngOnInit(): void {
  }

}
