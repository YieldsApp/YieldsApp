using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.General.Models
{
    public class Crop : BaseModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string CropId { get; set; }

        public string CropName { get; set; }

        public List<Variety> Varieties { get; set; }
    }
}