using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YieldsApp.DL;
using YieldsApp.DL.Repositories;
using YieldsApp.DO;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace YieldsApp.Management.Controllers
{
    public abstract class BaseController<TEntity, TRepository, TContext> : Controller
        where TEntity : BaseModel
        where TContext : BaseContext<TEntity>
        where TRepository : IBaseRepository<TEntity, TContext>
    {
        protected readonly TRepository _Repository;

        public BaseController(TRepository repository)
        {
            _Repository = repository;
        }

        //GET: api/<controller>
        [HttpGet]
        public virtual async Task<IEnumerable<TEntity>> Get()
        {
            var list = await _Repository.GetAll();
            return list;
        }
    }
}