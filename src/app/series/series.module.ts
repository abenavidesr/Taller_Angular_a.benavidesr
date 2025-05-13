import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listar-series/listar-series.component';
import { SeriesService } from './series.service';
import { DetalleSeriesComponent } from './detalle-series/detalle-series.component';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListarSeriesComponent, DetalleSeriesComponent
  ],
  exports: [
    ListarSeriesComponent]
})
export class SeriesModule { }
