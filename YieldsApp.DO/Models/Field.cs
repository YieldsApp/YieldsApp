using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.Models
{
    public class Field : BaseModel
    {
        [BsonId] public string FieldId { get; set; }

        public string FieldName { get; set; }
        public List<Location> Coordinates { get; set; }
        public float Area { get; set; }
        public List<Section> Se { get; set; }
    }
}