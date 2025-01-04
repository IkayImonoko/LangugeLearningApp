namespace LanguageLearningAPI.Models
{
    public class UserWord
    {
        public int UserId {get; set;}
        public  User User{get; set;} = null!;
        public int WordId {get; set;}
        public Word Word {get; set;} = null!;

        public DateTime LastReviewed {get; set;} = DateTime.UtcNow;
        public int RepetitionStage {get; set;} = 0;
        public bool IsLearned {get; set;} = false;
    }
}