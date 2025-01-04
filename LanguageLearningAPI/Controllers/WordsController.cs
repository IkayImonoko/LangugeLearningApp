using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LanguageLearningAPI.Data;
using LanguageLearningAPI.Models;

namespace LanguageLearningAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WordsController : ControllerBase
    {
        private readonly AppDbContext _db;
        public WordsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllWords()
        {
            var word = await _db.Words.ToListAsync();
            return Ok(word);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetWord(int id)
        {
            var word = await _db.Words.FindAsync(id);
            if (word == null) return NotFound();
            return Ok(word);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateWord(int id, [FromBody] Word updateWord)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var word = await _db.Words.FindAsync(id); 
            if (word == null) return NotFound();
            word.Russian = updateWord.Russian;
            word.Norwegian = updateWord.Norwegian;
            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> CreateWord([FromBody] Word word)
        {
            _db.Words.Add(word);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetWord), new { id = word.Id }, word);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteWord(int id)
        {
            var word = await _db.Words.FindAsync(id);
            if (word == null) return NotFound();

            _db.Words.Remove(word);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }
}