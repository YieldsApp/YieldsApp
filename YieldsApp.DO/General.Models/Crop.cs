using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.General.Models
{

    public class Crop
    {
        [BsonId]
        public ObjectId CropId { get; set; }
        public string CropName { get; set; }

        public List<string> Varieties { get; set; }

    }

  
}
