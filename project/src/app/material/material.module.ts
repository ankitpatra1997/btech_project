import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatGridListModule,
        MatBadgeModule,
        MatDividerModule,
        MatListModule,
        MatTableModule,
        MatTabsModule,
        MatSlideToggleModule
 } from '@angular/material'

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatGridListModule,
    MatBadgeModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule



  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatGridListModule,
    MatBadgeModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule

  ],
  declarations: []
})
export class MaterialModule { }
