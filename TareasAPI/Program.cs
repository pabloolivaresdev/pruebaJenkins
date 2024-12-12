using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddCors(options => {
	 options.AddPolicy("AllowAngularApp", policy => {
		  policy.WithOrigins("http://localhost:4200") // Allow Angular app
				  .AllowAnyHeader()                    // Allow any header
				  .AllowAnyMethod();                   // Allow any HTTP method
	 });
});



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
	 app.UseSwagger();
	 app.UseSwaggerUI();
}

app.UseCors("AllowAngularApp");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
