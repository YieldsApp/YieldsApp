using System.ComponentModel.DataAnnotations;

namespace YieldsApp.DAL.Models
{
    public class Crop
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Picture { get; set; }

    }
}
