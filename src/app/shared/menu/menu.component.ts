import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta:string,
  nombre:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {ruta: '/mapas/fullScreen', nombre: 'FullScreen'},
    {ruta: '/mapas/marcadores', nombre: 'Marcadores'},
    {ruta: '/mapas/zoom-range', nombre: 'Zoom Range'},
    {ruta: '/mapas/propiedades', nombre: 'Propiedades'}
  ]
}
