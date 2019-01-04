using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using YieldsApp.DL;
using YieldsApp.DL.Repositories;
using YieldsApp.DO;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace YieldsApp.Management.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController<TEntity, TRepository, TContext> : ControllerBase
        where TEntity : BaseModel
        where TContext : IBaseContext<TEntity>
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

        // POST api/<controller>
        [HttpPost]
        public virtual async Task<TEntity> Post([FromBody] TEntity entity)
        {
            await _Repository.Create(entity);
            return entity;
        }

        // PUT api/<controller>/5
        [HttpPut]
        public abstract Task<TEntity> Put([FromBody] TEntity entity);

    }
}