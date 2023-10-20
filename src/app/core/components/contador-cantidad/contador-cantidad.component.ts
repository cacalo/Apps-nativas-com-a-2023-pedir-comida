import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrls: ['./contador-cantidad.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ContadorCantidadComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
