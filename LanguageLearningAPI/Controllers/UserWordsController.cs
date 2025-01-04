using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LanguageLearningAPI.Data;
using LanguageLearningAPI.Models;
using LanguageLearningAPI.Models.Dtos;

namespace LanguageLearningAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserWordsController : ControllerBase
    {
        private readonly AppDbContext _db;
        public UserWordsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet("{userId:int}")]
        public async Task<IActionResult> GetUserWords(int userId)
        {
            var words = await _db.UserWords
                .Include(uw =>uw.Word)
                .Where(uw => uw.UserId == userId)
                .Select(uw => new
                {
                    uw.Word.Russian,
                    uw.Word.Norwegian,
                    uw.LastReviewed,
                    uw.RepetitionStage,
                    uw.IsLearned
                })
                .ToListAsync();
                if (!words.Any())
                return NotFound("Список слов пользователя пуст.");
            return Ok(words);
        }

        [HttpPost]
        public async Task<IActionResult> AddUserWord([FromBody] AddUserWordDto dto)
        {   
             if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _db.UserWords.AnyAsync(uw => uw.UserId == dto.UserId && uw.WordId == dto.WordId))
            {
                return Conflict("This word is already associated with the user.");
            }

            var userWord = new UserWord
            {
                UserId = dto.UserId,
                WordId = dto.WordId,
                LastReviewed = dto.LastReviewed,
                RepetitionStage = dto.RepetitionStage,
                IsLearned = dto.IsLearned
            };

            _db.UserWords.Add(userWord);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUserWords), new {userId = userWord.UserId}, userWord);
        }

        [HttpDelete("{userId}/{wordId}")]
        public async Task<IActionResult> DeleteUserWord(int userId, int wordId)
        {
            var userWord = await _db.UserWords
                .FirstOrDefaultAsync(uw => uw.UserId == userId && uw.WordId == wordId);

            if (userWord == null)
                return NotFound("Связь 'Пользователь-Слово' не найдена.");

            _db.UserWords.Remove(userWord);
            await _db.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{userId}/{wordId}")]
        public async Task<IActionResult> UpdateProgress(int userId, int wordId, [FromBody] UpdateProgressDto progressDto)
        {
            var userWord = await _db.UserWords
                .FirstOrDefaultAsync(uw => uw.UserId == userId && uw.WordId == wordId);

            if (userWord == null)
                return NotFound("Связь 'Пользователь-Слово' не найдена.");

            userWord.LastReviewed = progressDto.LastReviewed;
            userWord.RepetitionStage = progressDto.RepetitionStage;
            userWord.IsLearned = progressDto.IsLearned;

            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}