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
            var crops = await base.Get();
            //var cropList = crops.Select(x => Mapper.Map<CropModel>(x)).ToList();
            return crops;
        }

        public override Task<Crop> Put( Crop entity)
        {
            throw new System.NotImplementedException();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}