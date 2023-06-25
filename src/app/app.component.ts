import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public output: string;

  @ViewChild('action', { static: true }) action: NgxScannerQrcodeComponent;
  // TODO something this.action

  ngOnInit(): void {
    this.action.start();
  }

  initScan(e) {
    if (e != '') {
      console.log('se encontro', e);
      this.action.stop();
    } else {
      console.log('No se encontro ', e);
    }
  }

  public onError(e: any): void {
    alert(e);
  }
}
