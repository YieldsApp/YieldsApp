using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using YieldsApp.DO;

namespace YieldsApp.DL.Repositories
{
    public class BaseRepository<TEntity, TContext> : IBaseRepository<TEntity, TContext>
        where TContext : IBaseContext<TEntity>
        where TEntity : BaseModel
    {
        private readonly TContext _context;

        public BaseRepository(TContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await _context
                .List
                .Find(_ => true)
                .ToListAsync();
        }

        public Task<TEntity> Get(FilterDefinition<TEntity> filter)
        {
            return _context
                .List
                .Find(filter)
                .FirstOrDefaultAsync();
        }

        public async Task Create(TEntity Entity)
        {
            await _context.List.InsertOneAsync(Entity);
        }

        public async Task<bool> Update(TEntity Entity, FilterDefinition<TEntity> filter)
        {
            var updateResult =
                await _context
                    .List
                    .ReplaceOneAsync(
                        filter,
                        Entity);

            return updateResult.IsAcknowledged
                   && updateResult.ModifiedCount > 0;
        }

        public async Task<bool> Delete(FilterDefinition<TEntity> filter)
        {
            var deleteResult = await _context
                .List
                .DeleteOneAsync(filter);

            return deleteResult.IsAcknowledged
                   && deleteResult.DeletedCount > 0;
        }
    }
}