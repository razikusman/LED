import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Scroll } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LED';
 
}


// onWindowScroll(e) {
//     let element = document.querySelector('.navbar');
//     if (window.pageYOffset > element.clientHeight) {
//       element.classList.add('navbar-inverse');
//     } else {
//       element.classList.remove('navbar-inverse');
//     }
//   }
if (Scroll) {
  
}
