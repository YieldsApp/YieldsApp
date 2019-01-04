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
            var crops = await base.Get();
            return crops;
        }
        [HttpPut]
        public override async Task<Farm> Put([FromBody] Farm entity)
        {
            await _Repository.Update(entity);
            return entity;
        }
    }
}