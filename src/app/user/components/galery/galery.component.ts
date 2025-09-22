import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';
import { NgxSplideComponent } from 'ngx-splide';




@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})



export class GaleryComponent implements OnInit {
  @ViewChild('mainSplide') mainSplide: NgxSplideComponent | undefined;
  public images = [
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575232/WhatsApp_Image_2025-09-19_at_18.58.41_cqplop.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575251/WhatsApp_Image_2025-09-19_at_18.58.41_1_l9oorm.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575251/WhatsApp_Image_2025-09-19_at_18.58.40_o2ax8n.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575251/WhatsApp_Image_2025-09-19_at_19.00.45_krdfmq.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575250/WhatsApp_Image_2025-09-19_at_18.58.41_3_jld3tv.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575250/WhatsApp_Image_2025-09-19_at_18.59.28_y9xn6i.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575250/WhatsApp_Image_2025-09-19_at_18.58.41_2_l3hwxo.jpg'},

  ]
  @ViewChild('mainSplide2') mainSplide2: NgxSplideComponent | undefined;
  public images2 = [
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575232/WhatsApp_Image_2025-09-19_at_18.58.41_cqplop.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575251/WhatsApp_Image_2025-09-19_at_18.58.41_1_l9oorm.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575251/WhatsApp_Image_2025-09-19_at_18.58.40_o2ax8n.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575251/WhatsApp_Image_2025-09-19_at_19.00.45_krdfmq.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575250/WhatsApp_Image_2025-09-19_at_18.58.41_3_jld3tv.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575250/WhatsApp_Image_2025-09-19_at_18.59.28_y9xn6i.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1758575250/WhatsApp_Image_2025-09-19_at_18.58.41_2_l3hwxo.jpg'},

  ]



 /*  ngAfterViewInit(): void {
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
  } */

  ngOnInit(): void {

  }

}
