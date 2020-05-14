import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedModule { }
