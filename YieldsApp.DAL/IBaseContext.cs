using MongoDB.Driver;

namespace YieldsApp.DL
{
    public interface IBaseContext<TEntity>
    {
        IMongoCollection<TEntity> List { get; }
    }
}