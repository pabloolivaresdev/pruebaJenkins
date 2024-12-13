using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TareasAPI.Classes;

namespace TareasAPI.Controllers {
	 [Route("[controller]/[action]")]
	 [ApiController]
	 public class TareaController : ControllerBase {
		  private static List<Tarea> Tareas = new()
		  {
				new Tarea { Id = 1, Titulo = "Aprender NUnit", Completada = false },
				new Tarea { Id = 2, Titulo = "Configurar Angular", Completada = true }
		  };

		  [HttpGet]
		  public IActionResult ObtenerTareas() => Ok(Tareas);

		  [HttpGet]
		  public List<Tarea> ObtenerMisTareas() {
				return Tareas;
		  }

        [HttpPost] public IActionResult CrearTarea([FromBody] Tarea nuevaTarea) { 
			nuevaTarea.Id = Tareas.Max(t => t.Id) + 1; 
			Tareas.Add(nuevaTarea); 
			return CreatedAtAction(nameof(ObtenerTareas), new { id = nuevaTarea.Id }, nuevaTarea); 
		}
    }
}

