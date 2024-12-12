import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../tarea/tarea.component';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private apiUrl = 'http://localhost:5258/tarea/';

  constructor(private http: HttpClient) { }

  obtenerTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'ObtenerTareas');
  }

  crearTarea(prmTitulo: string, prmCompletada: boolean): Observable<any> {
   var tarea: Tarea = {
      Titulo: prmTitulo,
      Completada: prmCompletada
   }
   
   var form = new FormData();

   form.append("prmTarea", JSON.stringify(tarea));

    return this.http.post<any>(this.apiUrl+'CrearTarea', form);
  }
}
