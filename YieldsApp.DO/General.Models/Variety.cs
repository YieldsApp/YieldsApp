using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.General.Models
{
    public class Variety
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string VarietyId { get; set; }
        public string VarietyName { get; set; }
    }
}
