using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.Models
{
    public class Farm : BaseModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string FarmId { get; set; }

        public string FarmName { get; set; }

        public string Description { get; set; }

        public Location CenterLocation { get; set; }

        private List<Field> _fields;
        public List<Field> Fields
        {
            get => this._fields ?? new List<Field>();
            set=> this._fields = value ?? new List<Field>();
        }
    }
}