import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [CommonModule, ReportsRoutingModule],
  declarations: [ReportsComponent],
  exports: [ReportsComponent]
})
export class ReportsModule { }
