using Microsoft.EntityFrameworkCore;
using LanguageLearningAPI.Models;

namespace LanguageLearningAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<Word> Words {get; set;} = null!;
        public DbSet<User> Users {get; set;} = null!;
        public DbSet<UserWord> UserWords {get; set;} = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<UserWord>()
            .HasKey(uw => new { uw.UserId, uw.WordId });

        modelBuilder.Entity<UserWord>()
            .HasOne(uw => uw.User)
            .WithMany(u => u.UserWords)
            .HasForeignKey(uw => uw.UserId);

        modelBuilder.Entity<UserWord>()
            .HasOne(uw => uw.Word)
            .WithMany(w => w.UserWords)
            .HasForeignKey(uw => uw.WordId);
    }
    }
}