import { Component, Input, OnInit } from '@angular/core';
import { Series } from '../series';

@Component({
  selector: 'app-detalle-series',
  standalone: false,
  templateUrl: './detalle-series.component.html',
  styleUrls: ['./detalle-series.component.css']
})
export class DetalleSeriesComponent implements OnInit {

  @Input() detalleSerie!: Series;

  constructor() { }

  ngOnInit() {
  }

}
