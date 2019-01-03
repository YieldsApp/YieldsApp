using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace YieldsApp.DL.Repositories
{
    public interface IBaseRepository<TEntity, TContext>
    {
        Task<IEnumerable<TEntity>> GetAll();
        Task<TEntity> Get(FilterDefinition<TEntity> filter);
        Task Create(TEntity Entity);
        Task<bool> Update(TEntity Entity, FilterDefinition<TEntity> filter);
        Task<bool> Delete(FilterDefinition<TEntity> filter);
    }
}