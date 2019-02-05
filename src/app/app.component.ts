import { Component, OnInit, Input } from '@angular/core';

interface WifiInfo {
  SSID: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lockbox Setup';

  ngOnInit() {
  }
}

