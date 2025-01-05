using LanguageLearningAPI.Data;
using LanguageLearningAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlite("data source=language_learning.db"));

/*builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://gtolok.ru") // Убедитесь, что адрес совпадает с React
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});*/
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()  // Разрешить все источники
              .AllowAnyMethod()  // Разрешить любые методы (GET, POST, и т.д.)
              .AllowAnyHeader(); // Разрешить любые заголовки
    });
});

var app = builder.Build();

// Настроим слушание на всех интерфейсах (0.0.0.0:5039)
app.Urls.Add("http://0.0.0.0:5039"); 

/*var words = new List<Dictionary<string,string>> {
    new Dictionary<string,string> { { "Russian", "Привет" }, { "Norwegian", "Hei" } },
    new Dictionary<string,string> { { "Russian", "Спасибо" }, { "Norwegian", "Takk" } }
};*/

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.MapGet("/", () => "Welcome to the Language learning API");

/*app.MapGet("/words", () => words);
app.MapPost("/words", (Dictionary<string, string> word) => 
{
    words.Add(word);
    return Results.Created($"/words/{words.Count - 1}", word);
});*/

////////////
////////////
/*
app.MapGet("/words", async (AppDbContext db) => await db.Words.ToListAsync());
app.MapPost("/words", async (Word word, AppDbContext db) =>
{
    db.Words.Add(word);
    await db.SaveChangesAsync();
    return Results.Created($"/words/{word.Id}", word);
});
app.MapPut("/words/{id}", async (int id, Word updateWord, AppDbContext db) =>
{
    var word = await db.Words.FindAsync(id);
    if (word == null)
    {
        return Results.NotFound();
    }
    word.Russian = updateWord.Russian;
    word.Norwegian = updateWord.Norwegian;

    await db.SaveChangesAsync();
    return Results.NoContent();
});
app.MapDelete("/words/{id}", async (int id, AppDbContext db) =>
{
    var word = await db.Words.FindAsync(id);
    if (word == null)
    {
        return Results.NotFound();
    }
    db.Words.Remove(word);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapPost("/users", async (User user, AppDbContext db) =>
{
    db.Users.Add(user);
    await db.SaveChangesAsync();
    return Results.Created($"/users/{user.Id}", user);
});
app.MapGet("/users", async (AppDbContext db) =>
{
    var users = await db.Users.ToListAsync();
    return Results.Ok(users);
});
*/

app.MapControllers();
app.Run();

