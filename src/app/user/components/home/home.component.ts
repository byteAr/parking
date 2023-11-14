import { Component, OnInit, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    new Splide('.splide', {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      arrows:  false,
      autoplay: true,
      interval: 7000, // Adjust the interval as desired
      focus: 'center', // Add this line to center the active slide
      pagination: false,
      mediaQuery: 'min',


    }).mount();
  }

  ngOnInit(): void {

  }

}
