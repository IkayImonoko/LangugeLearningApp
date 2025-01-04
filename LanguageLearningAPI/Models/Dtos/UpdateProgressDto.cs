namespace LanguageLearningAPI.Models.Dtos
{
    public class UpdateProgressDto
    {
        public int RepetitionStage {get; set;}
        public DateTime LastReviewed {get; set;}
        public bool IsLearned {get; set;}
    }
}