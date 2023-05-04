import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ClassicComponent } from './horizontal/classic/classic.component';

@NgModule({
  declarations: [LayoutsComponent, ClassicComponent],
  imports: [CommonModule, SharedModule],
  exports: [LayoutsComponent],
  providers: [],
})
export class LayoutsModule {}
