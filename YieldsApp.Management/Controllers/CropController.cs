using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using YieldsApp.DO.General.Models;
using YieldsApp.General.DL.Context;
using YieldsApp.General.DL.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace YieldsApp.Management.Controllers
{
    [Route("api/[controller]")]
    public class CropController : BaseController<Crop, ICropRepository, ICropContext>
    {
        public CropController(ICropRepository cropRepository) : base(cropRepository)
        {
        }

        // GET: api/<controller>
        [HttpGet]
        public override async Task<IEnumerable<Crop>> Get()
        {
            var list = await base.Get();
            return list;
        }
        // GET: api/<controller>
        [HttpGet("{cropId}")]
        public async Task<Crop> Get(string cropId)
        {
            var crop = await _Repository.Get(cropId);
            return crop;
        }

        //TODO: to update only not embedded values
        [HttpPut]
        public override async Task<Crop> Put([FromBody] Crop entity)
        {
            await _Repository.Update(entity);
            return entity;
        }

        [HttpDelete]
        [Route("{cropId}")]
        public override async Task<bool> Delete(string id)
        {
            return await _Repository.Delete(id);
        }

        [HttpPost]
        [Route("{cropId}/AddVariety")]
        public async Task<Variety> AddVariety(string cropId, [FromBody] Variety entity)
        {
            await _Repository.AddVariety(cropId, entity);
            return entity;
        }
        [HttpPost]
        [Route("{cropId}/UpdateVariety")]
        public async Task<Variety> UpdateVariety(string cropId, [FromBody] Variety entity)
        {
            await _Repository.UpdateVariety(cropId, entity);
            return entity;
        }

        [HttpDelete]
        [Route("{cropId}/DeleteVariety/{varietyId}")]
        public async Task<bool> DeleteVariety(string cropId, string varietyId)
        {
            return await _Repository.DeleteVariety(cropId, varietyId);
        }
    }
}