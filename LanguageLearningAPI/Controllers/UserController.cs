using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LanguageLearningAPI.Data;
using LanguageLearningAPI.Models;
using LanguageLearningAPI.Models.Dtos;

namespace LanguageLearningAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _db;
        public UsersController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var user = await _db.Users.ToListAsync();
            return Ok(user);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User updateUser)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var user = await _db.Users.FindAsync(id); 
            if (user == null) return NotFound();
            user.Email = updateUser.Email;
            user.Username = updateUser.Username;
            user.PasswordHash = updateUser.PasswordHash;
            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] AddNewUserDto newUser)
        {
            var user = new User();
            user.Username = newUser.Username;
            user.Email = newUser.Email;
            user.PasswordHash = newUser.PasswordHash;
            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user == null) return NotFound();

            _db.Users.Remove(user);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }
}