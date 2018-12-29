using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using YieldsApp.Management.Models;
using Microsoft.AspNetCore.Mvc;
using YieldsApp.DO.General.Models;
using YieldsApp.General.DL.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace YieldsApp.Management.Controllers
{
    [Route("api/[controller]")]
    public class CropController : Controller
    {
        private readonly ICropRepository _cropRepository;

        public CropController(ICropRepository cropRepository)
        {
            _cropRepository = cropRepository;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<IEnumerable<Crop>> Get()
        {
            var crops = await _cropRepository.GetAllCrops();
            //var cropList = crops.Select(x => Mapper.Map<CropModel>(x)).ToList();
            return crops;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
