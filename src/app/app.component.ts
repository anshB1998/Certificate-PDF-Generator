import { Component } from '@angular/core';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageSrc: string;

  onExportClick() {
    const options = {
      filename: 'test.pdf',
      image: {type: 'jpg'},
      html2canvas: {},
      jsPDF: {orientation: 'landscape'}
    };
    const content: Element = document.getElementById('container');
    html2pdf()
      .from(content)
      .set(options)
      .save();
  }

  readURL(event: Event): void {
      if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
          const file = (<HTMLInputElement>event.target).files[0];
          const reader = new FileReader();
          reader.onload = e => this.imageSrc = <string>reader.result;
          reader.readAsDataURL(file);
      }
  }
}
