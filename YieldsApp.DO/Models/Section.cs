﻿using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace YieldsApp.DO.Models
{
    public class Section : BaseModel
    {
        public string SectionName { get; set; }
        public float Area { get; set; }
        public string CropName { get; set; }
        public string VarietyName { get; set; }
        public DateTime plantingDate { get; set; }
        public float GDD { get; set; }
        public float ETC { get; set; }
    }
}