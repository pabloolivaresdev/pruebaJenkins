import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TareaService } from './tarea.service';

describe('TareaService', () => {
  let service: TareaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers: [TareaService]
      });
      httpMock = TestBed.inject(HttpTestingController);
      service = TestBed.inject(TareaService);
  });

    

   it('debería obtener tareas', () => {
      const mockTareas = [{ id: 1, titulo: 'Prueba', completada: false },{ id: 2, titulo: 'Prueba 2', completada: true }];
      service.obtenerTareas().subscribe((tareas: any) => {
                 
        expect(tareas).toEqual(mockTareas);
      });
  
      const req = httpMock.expectOne(service['apiUrl']);
      expect(req.request.method).toBe('GET');
      req.flush(mockTareas);
    });
});
