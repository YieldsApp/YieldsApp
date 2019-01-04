using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using YieldsApp.DO.Models;
using YieldsApp.Instance.DL.Context;
using YieldsApp.Instance.DL.Repositories;

namespace YieldsApp.Management.Controllers
{
    
    public class FarmController : BaseController<Farm, IFarmRepository, IFarmContext>
    {
        public FarmController(IFarmRepository repository) : base(repository)
        {
        }

        // GET: api/<controller>
        [HttpGet]
        public override async Task<IEnumerable<Farm>> Get()
        {
            var list = await base.Get();
            return list;
        }
        // GET: api/<controller>
        [HttpGet("{farmId}")]
        public  async Task<Farm> Get(string farmId)
        {
            var farm = await _Repository.Get(farmId);
            return farm;
        }

        //TODO: to update only not embedded values
        [HttpPut]
        public override async Task<Farm> Put([FromBody] Farm entity)
        {
            await _Repository.Update(entity);
            return entity;
        }

        [HttpDelete]
        [Route("{farmId}")]
        public override async Task<bool> Delete(string id)
        {
            return await _Repository.Delete(id);
        }

        [HttpPost]
        [Route("{farmId}/AddField")]
        public async Task<Field> AddField(string farmId, [FromBody] Field entity)
        {
            await _Repository.AddField(farmId,entity);
            return entity;
        }
        [HttpPost]
        [Route("{farmId}/UpdateField")]
        public async Task<Field> UpdateField(string farmId, [FromBody] Field entity)
        {
            await _Repository.UpdateField(farmId, entity);
            return entity;
        }

        [HttpDelete]
        [Route("{farmId}/DeleteField/{fieldId}")]
        public async Task<bool> DeleteField(string farmId, string fieldId)
        {
            return await _Repository.DeleteField(farmId, fieldId);
        }
    }
}