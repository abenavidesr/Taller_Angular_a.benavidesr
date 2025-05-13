import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listar-series/listar-series.component';
import { SeriesService } from './series.service';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListarSeriesComponent
  ],
  exports: [
    ListarSeriesComponent]
})
export class SeriesModule { }
