// schools.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SchoolsComponent } from '../Pages/schools/schools.component'; 


@NgModule({
  declarations: [
    SchoolsComponent,
    // ... otros componentes y directivas si los hay
  ],
  imports: [
    CommonModule, // Asegúrate de importar CommonModule aquí
    // ... otros módulos importados
  ],
})
export class SchoolsModule {}
