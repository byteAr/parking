import { Component, signal, ElementRef, viewChild, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly currentSlide = signal(0);
  readonly currentGallerySlide = signal(0);
  private carouselRef = viewChild<ElementRef>('bannerCarousel');
  private galleryRef = viewChild<ElementRef>('galleryCarousel');
  private autoplayInterval: ReturnType<typeof setInterval> | null = null;

  readonly banners = [
    { src: 'assets/banner/banner1.webp', alt: 'Cochera cubierta en Monte Grande cerca del Aeropuerto Internacional de Ezeiza' },
    { src: 'assets/banner/banner2.webp', alt: 'Estacionamiento seguro con cámaras 24 horas en Monte Grande' },
    { src: 'assets/banner/BANNER3.webp', alt: 'Servicio de traslado gratuito al Aeropuerto de Ezeiza' },
  ];

  readonly galleryImages = [
    'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_600/v1758575232/WhatsApp_Image_2025-09-19_at_18.58.41_cqplop.jpg',
    'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_600/v1758575251/WhatsApp_Image_2025-09-19_at_18.58.41_1_l9oorm.jpg',
    'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_600/v1758575251/WhatsApp_Image_2025-09-19_at_18.58.40_o2ax8n.jpg',
    'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_600/v1758575251/WhatsApp_Image_2025-09-19_at_19.00.45_krdfmq.jpg',
    'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_600/v1758575250/WhatsApp_Image_2025-09-19_at_18.58.41_3_jld3tv.jpg',
    'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_600/v1758575250/WhatsApp_Image_2025-09-19_at_18.59.28_y9xn6i.jpg',
    'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_600/v1758575250/WhatsApp_Image_2025-09-19_at_18.58.41_2_l3hwxo.jpg',
  ];

  readonly galleryThumbs = this.galleryImages.map(
    url => url.replace('w_600', 'w_150')
  );

  readonly reviews = [
    {
      name: 'Andrea Sajur', role: 'Clienta', title: 'Excelente atención.',
      text: '"Es la segunda que vamos y salió todo perfecto. El lugar es muy cómodo, a 5 min del aeropuerto y la comunicación impecable. En esta última ocasión hasta tuvimos la amabilidad de Gustavo de arreglarnos el auto que tuvo un inconveniente al llegar. Muy recomendable."',
      avatar: 'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_36/v1699992212/unnamed_1_gixp3d.png'
    },
    {
      name: 'Gonzalo Daniel Perez', role: 'Cliente', title: 'Muy cómodo',
      text: '"Use el servicio por 12 días para un viaje. Todo excelente, el lugar es muy seguro, te llevan y traen al aeropuerto, muy amable atención. Definitivamente lo volveré a contratar."',
      avatar: 'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_36/v1699992213/unnamed_cdkh06.png'
    },
    {
      name: 'Marcelo Bulacio', role: 'Cliente', title: 'Excelente atención!',
      text: '"Te llevan y buscan rápido del aeropuerto además de un muy buen precio!"',
      avatar: 'https://res.cloudinary.com/dgq2ycemj/image/upload/f_auto,q_auto,w_36/v1699992213/unnamed_2_gntccy.png'
    },
  ];

  readonly services = [
    {
      id: 'seguridad',
      label: 'Cochera', icon: 'garage.svg',
      btnClass: 'from-blue-500 via-blue-600 to-blue-700 focus:ring-blue-300',
      modalClass: 'from-blue-800 to-blue-900',
      modalIcon: 'security.svg', modalTitle: 'TU VEHÍCULO PROTEGIDO',
      modalText: 'Aseguramos bajo condiciones óptimas que tu vehículo se encontrará seguro por el tiempo que determines. Por ello contamos con cocheras cubiertas y seguridad las 24hs del día, gracias a nuestras cámaras con tecnología de vanguardia dotada con sensores de movimiento y monitoreadas en todo momento.',
      modalText2: 'La seguridad de que tu vehículo está en buenas manos, siempre.',
      waMsg: 'Hola%21%20Quisiera%20reservar%20una%20cochera.', waLabel: 'Reservar cochera'
    },
    {
      id: 'service',
      label: 'Service', icon: 'maintenance.svg',
      btnClass: 'from-purple-500 via-purple-600 to-purple-700 focus:ring-purple-300',
      modalClass: 'from-purple-700 to-purple-800',
      modalIcon: 'carmecanic.svg', modalTitle: 'SERVICIO TÉCNICO Y DE LIMPIEZA',
      modalText: 'Tu vehículo siempre limpio y en perfectas condiciones técnicas gracias al minucioso servicio de mantenimiento que ponemos a tu disposición, para que tengas la garantía de que cuando vengas a buscarlo se encuentre en igual o mejores condiciones de como cuando nos lo dejaste.',
      modalText2: 'Siempre limpio y funcional.',
      waMsg: 'Hola%21%20Quisiera%20consultar%20sobre%20el%20service.', waLabel: 'Consultar service'
    },
    {
      id: 'transfer',
      label: 'Traslado', icon: 'bus.svg',
      btnClass: 'from-yellow-400 via-yellow-500 to-yellow-600 focus:ring-yellow-300',
      modalClass: 'from-yellow-400 to-yellow-600',
      modalIcon: 'carfly.svg', modalTitle: 'LOGÍSTICA DE PRIMERA',
      modalText: 'Ponemos a tu disposición un servicio sin cargo de traslado para tu grupo familiar y/o acompañantes hacia el aeropuerto. No te preocupes por la vuelta. Nosotros te vamos a buscar con previa coordinación de fecha y horarios.',
      modalText2: 'Tu comodidad y la de los tuyos, es nuestra prioridad.',
      waMsg: 'Hola%21%20Quisiera%20consultar%20sobre%20el%20traslado%20al%20aeropuerto.', waLabel: 'Consultar traslado'
    },
  ];

  readonly faqs = [
    { q: '¿A qué distancia están del Aeropuerto de Ezeiza?', a: 'Estamos ubicados en <strong>Av. Fair 954, Monte Grande</strong>, a tan solo <strong>5 minutos del Aeropuerto Internacional de Ezeiza (EZE)</strong>. Incluimos traslado gratuito de ida y vuelta al aeropuerto para vos y tu familia, coordinando fecha y horario con anticipación.' },
    { q: '¿Tienen traslado gratuito al aeropuerto?', a: 'Sí. Ofrecemos <strong>traslado sin cargo</strong> desde nuestras cocheras hasta el <strong>Aeropuerto Internacional de Ezeiza</strong> y también te buscamos a tu regreso. Solo coordinamos fecha y horario por WhatsApp al <a href="tel:+541134242400" class="text-yellow-300 hover:underline">+54 11 3424-2400</a>.' },
    { q: '¿Las cocheras tienen seguridad las 24 horas?', a: 'Sí. Nuestras <strong>cocheras cubiertas en Monte Grande</strong> cuentan con <strong>vigilancia las 24 horas</strong>, cámaras de seguridad con sensores de movimiento monitoreadas permanentemente. Tu vehículo está en las mejores manos.' },
    { q: '¿Cómo reservo una cochera?', a: 'La reserva es muy simple: escribinos por <a href="https://api.whatsapp.com/send?phone=+541134242400&text=Hola%21%20Quisiera%20reservar%20una%20cochera." target="_blank" rel="noopener noreferrer" class="text-yellow-300 hover:underline">WhatsApp al +54 11 3424-2400</a> indicando la fecha de entrada y salida. Te recomendamos reservar con anticipación para garantizar tu lugar, especialmente en temporada alta.' },
    { q: '¿Qué pasa si mi vuelo se retrasa o se cancela?', a: 'No hay problema. Tu vehículo permanece seguro en nuestras <strong>cocheras cubiertas cerca de Ezeiza</strong> hasta que regreses. Avisanos por WhatsApp y coordinamos el retiro sin inconvenientes.' },
    { q: '¿Ofrecen servicio de limpieza o mecánica para el auto?', a: 'Sí. Contamos con un servicio de <strong>limpieza y mantenimiento técnico</strong> para que cuando retires tu vehículo lo encuentres en igual o mejores condiciones. Consultanos al reservar tu cochera.' },
  ];

  constructor() {
    afterNextRender({
      read: () => {
        this.startAutoplay();
        this.observeFadeElements();
      }
    });
  }

  private startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 7000);
  }

  nextSlide() {
    const next = (this.currentSlide() + 1) % this.banners.length;
    this.goToSlide(next);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    const el = this.carouselRef()?.nativeElement;
    if (el) {
      el.scrollTo({ left: el.clientWidth * index, behavior: 'smooth' });
    }
  }

  goToGallerySlide(index: number) {
    this.currentGallerySlide.set(index);
    const el = this.galleryRef()?.nativeElement;
    if (el) {
      el.scrollTo({ left: el.clientWidth * index, behavior: 'smooth' });
    }
  }

  openModal(id: string) {
    const dialog = document.getElementById('modal-' + id) as HTMLDialogElement;
    dialog?.showModal();
  }

  closeModal(id: string) {
    const dialog = document.getElementById('modal-' + id) as HTMLDialogElement;
    dialog?.close();
  }

  private observeFadeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
