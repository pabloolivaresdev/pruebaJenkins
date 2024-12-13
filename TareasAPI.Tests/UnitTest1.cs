using NUnit.Framework;
using TareasAPI.Controllers;
using TareasAPI.Classes;
using Microsoft.AspNetCore.Mvc;
 

namespace TareasApi.Tests {
	 public class TareasControllerTests {
		  private TareaController _controller;

		  [SetUp]
		  public void Setup() {
				_controller = new TareaController();
		  }

		  [Test]
		  public void ObtenerTareas_DeberiaRetornarListaDeTareas() {
				var resultado = _controller.ObtenerTareas() as OkObjectResult;
				Assert.NotNull(resultado);
				var tareas = resultado.Value as List<Tarea>;
				Assert.IsNotEmpty(tareas);
		  }

		  [Test]
		  public void CrearTarea_DeberiaAgregarUnaNuevaTarea() {
				var nuevaTarea = new Tarea { Titulo = "Nueva Tarea", Completada = false };
				var resultado = _controller.CrearTarea() as CreatedAtActionResult;

				Assert.NotNull(resultado);
				var tareaCreada = resultado.Value as Tarea;
				Assert.AreEqual("Nueva Tarea", tareaCreada.Titulo);
		  }
	 }
}
