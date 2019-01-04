using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.Models
{
    public class Field : BaseModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string FieldId { get; set; }
        public string FieldName { get; set; }
        public List<Location> Coordinates { get; set; }
        public float Area { get; set; }
        private List<Section> _sections;
        public List<Section> Sections
        {
            get => this._sections ?? new List<Section>();
            set => this._sections = value ?? new List<Section>();
        }

        public Field()
        {
            this.FieldId = ObjectId.GenerateNewId().ToString();
        }
    }
}