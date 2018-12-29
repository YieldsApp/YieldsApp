using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YieldsApp.General.DL.Repositories;
using YieldsApp.Identification.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace YieldsApp.Identification.Controllers
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
        public async Task<List<CropModel>> Get()
        {
            var crops=  await _cropRepository.GetAllCrops();
            var cropList=  crops.Select(x => Mapper.Map<CropModel>(x)).ToList();
            return new List<CropModel>() { new CropModel() { Id = 1, Name = "Crop 1" }, new CropModel() { Id = 2, Name = "Crop 2" }, new CropModel() { Id = 3, Name = "Crop 3" } };
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
