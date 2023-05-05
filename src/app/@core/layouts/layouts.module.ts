import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ClassicComponent } from './horizontal/classic/classic.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [LayoutsComponent, ClassicComponent, MenuListItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [LayoutsComponent],
  providers: [],
})
export class LayoutsModule {}
