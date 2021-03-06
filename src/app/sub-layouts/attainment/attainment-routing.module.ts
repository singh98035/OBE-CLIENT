import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoAttainmentComponent } from 'src/app/pages/co-attainment/co-attainment.component';
import { ImportsMarksComponent } from 'src/app/pages/imports-marks/imports-marks.component';

const routes: Routes = [
  { path: '', redirectTo: 'import-cia-marks' },  // For Internal Assessment
  { path: 'import-cia-marks', component: ImportsMarksComponent, pathMatch: 'full' },  // For Internal Assessment
  { path: 'import-tee-marks', component: ImportsMarksComponent, pathMatch: 'full' },  // For External Assessment
  { path: 'co-attainment', component: CoAttainmentComponent, pathMatch: 'full' },     // For CO Attainemt [Direct + Indirect]
  { path: 'po-attainment', component: CoAttainmentComponent, pathMatch: 'full' }      // For CO Attainemt [Direct + Indirect]
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AttainmentRoutingModule { }
