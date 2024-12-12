import { Component } from '@angular/core';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
   tareas: any[] = [];    
   titulo: string = '';
   completada: boolean = false;

   constructor(private tareasService: TareaService) { }

   ngOnInit() {
       
      this.cargarTareas();
   }

   cargarTareas() {
      this.tareasService.obtenerTareas().subscribe((tareas: any) => (
         this.tareas = tareas
      ));
   }

   agregarTarea() {       
      if(this.titulo == '') {
         alert('Debe ingresar un título');
         return;
      }
      
      this.tareasService.crearTarea(this.titulo,this.completada).subscribe(() => {
         this.cargarTareas();
         this.inicializarTarea();
      });
   }

   inicializarTarea(): void {
      this.titulo = '';
      this.completada = false;
   }
}

export interface Tarea {
   Titulo: string;
   Completada: boolean;
}