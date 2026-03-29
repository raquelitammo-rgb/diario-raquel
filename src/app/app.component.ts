import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent implements OnInit {
  isLoading = true; // Empieza cargando

  constructor() {}

  ngOnInit() {
    // Simulamos la carga inicial (Microinformática -> Marketing)
    setTimeout(() => {
      this.isLoading = false;
    }, 3500); // 3.5 segundos de magia
  }
}