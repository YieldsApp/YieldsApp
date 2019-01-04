using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.Models
{
    public class Field : BaseModel
    {
        public string FieldName { get; set; }
        public List<Location> Coordinates { get; set; }
        public float Area { get; set; }
        public List<Section> Sections { get; set; }
    }
}