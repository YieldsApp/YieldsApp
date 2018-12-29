using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using YieldsApp.DO;
using YieldsApp.DO.Models;

namespace YieldsApp.DL.Context
{
    public class FarmContext : IFarmContext
    {
        private readonly IMongoDatabase _db;

        public FarmContext(IOptions<Settings> options, IMongoClient client)
        {
            _db = client.GetDatabase(options.Value.Database);
        }

        public IMongoCollection<Farm> Farms => _db.GetCollection<Farm>("farms");
    }
}
