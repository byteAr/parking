import { Component, OnInit, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    new Splide('.splide', {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      arrows:  false,
      autoplay: true,
      interval: 7000, // Adjust the interval as desired
      focus: 'center', // Add this line to center the active slide
      pagination: true,
      mediaQuery: 'min',


    }).mount();
  }

  ngOnInit(): void {

  }

}
