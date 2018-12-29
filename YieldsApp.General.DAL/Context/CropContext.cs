using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using YieldsApp.DO;
using YieldsApp.DO.General.Models;

namespace YieldsApp.General.DL.Context
{
    public class CropContext : ICropContext
    {
        private readonly IMongoDatabase _db;

        public CropContext(IOptions<Settings> options, IMongoClient client)
        {
            _db = client.GetDatabase(options.Value.GeneralDatabase);
        }

        public IMongoCollection<Crop> Crops => _db.GetCollection<Crop>("crops");
    }
}
