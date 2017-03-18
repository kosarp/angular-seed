import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ToolbarComponent} from './toolbar/toolbar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NameListService} from './name-list/name-list.service';
import {BarChartComponent} from './barchart/barchart.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent, BarChartComponent],
  exports: [ToolbarComponent, NavbarComponent, BarChartComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
