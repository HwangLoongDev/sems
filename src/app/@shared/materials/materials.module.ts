import { NgModule } from '@angular/core';

// import material modules
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';

const materials = [
  MatAutocompleteModule,
  MatCardModule,
  MatInputModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  // Reactive forms
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [...materials],
  exports: [...materials],
  providers: [],
})
export class MaterialsModule {}
