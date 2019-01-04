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
        protected readonly TContext Context;

        public BaseRepository(TContext context)
        {
            Context = context;
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await Context
                .List
                .Find(_ => true)
                .ToListAsync();
        }

        public Task<TEntity> Get(FilterDefinition<TEntity> filter)
        {
            return Context
                .List
                .Find(filter)
                .FirstOrDefaultAsync();
        }

        public async Task Create(TEntity Entity)
        {
            await Context.List.InsertOneAsync(Entity);
        }

        public async Task<bool> Update(TEntity Entity, FilterDefinition<TEntity> filter)
        {
            var updateResult =
                await Context
                    .List
                    .ReplaceOneAsync(
                        filter,
                        Entity);

            return updateResult.IsAcknowledged
                   && updateResult.ModifiedCount > 0;
        }
        public async Task<bool> Update(FilterDefinition<TEntity> filter, UpdateDefinition<TEntity> update)
        {
            var updateResult =
                await Context
                    .List
                    .UpdateOneAsync(
                        filter,
                        update);

            return updateResult.IsAcknowledged
                   && updateResult.ModifiedCount > 0;
        }
        public async Task<bool> Delete(FilterDefinition<TEntity> filter)
        {
            var deleteResult = await Context
                .List
                .DeleteOneAsync(filter);

            return deleteResult.IsAcknowledged
                   && deleteResult.DeletedCount > 0;
        }
    }
}