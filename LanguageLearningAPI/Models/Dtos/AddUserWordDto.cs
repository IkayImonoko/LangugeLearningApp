namespace LanguageLearningAPI.Models.Dtos
{
    public class AddUserWordDto
    {
        public int UserId { get; set; }
        public int WordId { get; set; }
        public DateTime LastReviewed { get; set; } = DateTime.UtcNow;
        public int RepetitionStage { get; set; } = 0;
        public bool IsLearned { get; set; } = false;
    }
}