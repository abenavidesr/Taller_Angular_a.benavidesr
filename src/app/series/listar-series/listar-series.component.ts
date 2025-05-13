import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-listar-series',
  standalone: false,
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {

  series: Array<Series> = [];
  constructor(private seriesService: SeriesService) { }

  getSeries() {
    this.seriesService.getSeries().subscribe(seriesList => {
      this.series = seriesList;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
