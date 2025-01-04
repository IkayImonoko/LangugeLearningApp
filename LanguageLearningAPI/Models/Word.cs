namespace LanguageLearningAPI.Models
{
    public class Word
    {
        public int Id {get; set;} 
        public string Russian {get; set;} = string.Empty;
        public string Norwegian {get; set;} = string.Empty;

        public ICollection<UserWord> UserWords { get; set; } = null!;
    }
}