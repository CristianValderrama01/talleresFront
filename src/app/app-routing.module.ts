import { HomeComponent } from './pages/home/home.component';
import { ProgramacionTalleresComponent } from './pages/programacion-talleres/programacion-talleres.component';
import { AsistenciaTalleresComponent } from './pages/asistencia-talleres/asistencia-talleres.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: "", pathMatch: "full", redirectTo: "home"},

  {path: "home",
  component: HomeComponent},

  {path: "asistencia-talleres",
  component: AsistenciaTalleresComponent},

  {path: "programacion-talleres",
  component: ProgramacionTalleresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
