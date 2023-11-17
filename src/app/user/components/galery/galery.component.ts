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
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242549/WhatsApp_Image_2023-11-14_at_5.27.00_PM_fszuof.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242549/WhatsApp_Image_2023-11-14_at_5.27.01_PM_vmaxgw.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242548/WhatsApp_Image_2023-11-14_at_5.27.01_PM_3_szr9p8.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242548/WhatsApp_Image_2023-11-14_at_5.27.01_PM_1_gll8tz.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242548/WhatsApp_Image_2023-11-14_at_5.27.02_PM_2_nfghbo.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242548/WhatsApp_Image_2023-11-14_at_5.27.02_PM_d7b6lk.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242548/WhatsApp_Image_2023-11-14_at_5.27.01_PM_2_loyz64.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242548/WhatsApp_Image_2023-11-14_at_5.27.02_PM_1_yoezxq.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242547/WhatsApp_Image_2023-11-14_at_5.27.03_PM_1_z75pbt.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242548/WhatsApp_Image_2023-11-14_at_5.27.03_PM_nhrgan.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242547/WhatsApp_Image_2023-11-14_at_5.27.02_PM_3_og55n2.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242547/WhatsApp_Image_2023-11-14_at_5.27.03_PM_2_oscyd2.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242547/WhatsApp_Image_2023-11-14_at_5.27.04_PM_guycxq.jpg'},
    {src:'https://res.cloudinary.com/dgq2ycemj/image/upload/v1700242547/WhatsApp_Image_2023-11-14_at_5.27.03_PM_3_zqpogt.jpg'},
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
