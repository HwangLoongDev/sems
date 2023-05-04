import { NgModule } from '@angular/core';

import { MaterialsModule } from './materials/materials.module';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [],
  imports: [MaterialsModule, IconsModule],
  exports: [MaterialsModule, IconsModule],
  providers: [],
})
export class SharedModule {}
