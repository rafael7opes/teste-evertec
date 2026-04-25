using Microsoft.EntityFrameworkCore;
using LopesTur.Data;

var builder = WebApplication.CreateBuilder(args);

// LIGAÇÃO DO BANCO DE DADOS: Apresenta o Contexto e a String de Conexão para o C#
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<TurismoContext>(options =>
    options.UseSqlite(connectionString));

// Configuração para habilitar o uso de Controllers (API)
builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

// Configurações para o servidor reconhecer o Front-end na pasta wwwroot
app.UseDefaultFiles(); // Procura automaticamente pelo index.html
app.UseStaticFiles();  // Permite o acesso aos arquivos CSS, JS e Imagens

// Mapeamento das rotas dos Controllers
app.MapControllers();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.Run();