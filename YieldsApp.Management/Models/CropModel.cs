using System.Collections.Generic;

namespace YieldsApp.Management.Models
{
    public class CropModel
    {
        public int CropId { get; set; }
        public string CropName { get; set; }
        public List<VarietyModel> Varieties { get; set; }

    }
}