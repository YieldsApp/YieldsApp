using Microsoft.Extensions.Options;
using MongoDB.Driver;
using YieldsApp.DO;

namespace YieldsApp.DL
{
    public class BaseContext<TEntity> : IBaseContext<TEntity>
    {
        protected readonly IMongoDatabase _db;
        private readonly string _collectionName;

        public BaseContext(IOptions<Settings> options, string collectionName, bool isGeneral = false)
        {
            var database = isGeneral ? options.Value.GeneralDatabase : options.Value.Database;
            var connectionString = options.Value.ConnectionString + "/" + database;
            var client = new MongoClient(connectionString);

            _db = client.GetDatabase(database);
            _collectionName = collectionName;
        }

        public IMongoCollection<TEntity> List => _db.GetCollection<TEntity>(_collectionName);
    }
}