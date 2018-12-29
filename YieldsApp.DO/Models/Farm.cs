using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.Models
{

    public class Farm
    {
        [BsonId]
        public ObjectId FarmId { get; set; }
        public string FarmName { get; set; }

        public string Description { get; set; }

        public Location CenterLocation { get; set; }

        public List<Field> Fields { get; set; }
    }
}
