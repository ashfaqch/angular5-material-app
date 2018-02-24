import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule],
    exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule],
})
export class AppMaterialModule { }