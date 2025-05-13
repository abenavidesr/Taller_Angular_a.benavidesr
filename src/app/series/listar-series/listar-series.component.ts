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
  selected: Boolean = false;
  selectedSerie!: Series;
  constructor(private seriesService: SeriesService) { }

  getSeries() {
    this.seriesService.getSeries().subscribe(seriesList => {
      this.series = seriesList;
    });
  }

  getPromedioTemporadas(): number {
    if (this.series.length === 0) {
      return 0;}
    var totalTemporadas = 0;
    for (let i = 0; i < this.series.length; i++) {
      totalTemporadas += this.series[i].seasons;
    }
    return totalTemporadas / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
    this.getPromedioTemporadas();
  }

  onSelect(serie: Series): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

}
