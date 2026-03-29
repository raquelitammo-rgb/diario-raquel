import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router'; // Para que funcionen los enlaces del menú

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  // Solo importamos los componentes esenciales
  imports: [IonicModule, CommonModule, RouterLink] 
})
export class HomePage {
  constructor() {}
}