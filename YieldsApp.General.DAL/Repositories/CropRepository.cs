using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using YieldsApp.DL.Repositories;
using YieldsApp.DO.General.Models;
using YieldsApp.General.DL.Context;

namespace YieldsApp.General.DL.Repositories
{
    public class CropRepository : BaseRepository<Crop, ICropContext>, ICropRepository
    {
        public CropRepository(ICropContext context) : base(context)
        {
        }

        public Task<Crop> Get(string name)
        {
            var filter = Builders<Crop>.Filter.Eq(m => m.CropName, name);

            return base.Get(filter);
        }

        public async Task<bool> Update(Crop Crop)
        {
            var filter = Builders<Crop>.Filter.Eq(m => m.CropId, Crop.CropId);
            return await base.Update(Crop, filter);
        }

        public async Task<bool> Delete(string name)
        {
            var filter = Builders<Crop>.Filter.Eq(m => m.CropName, name);
            return await base.Delete(filter);
        }


        public async Task<bool> AddVariety(string cropId, Variety variety)
        {
            var filter = Builders<Crop>.Filter.Where(m => m.CropId == cropId);
            var update = Builders<Crop>.Update.Push(x => x.Varieties, variety);
            return await base.Update(filter, update);
        }

        public async Task<bool> UpdateVariety(string cropId, Variety variety)
        {
            var filter = Builders<Crop>.Filter.Where(m => m.CropId == cropId && m.Varieties.Any(f => f.VarietyId == variety.VarietyId));
            var update = Builders<Crop>.Update.Set(x => x.Varieties[-1], variety);
            return await base.Update(filter, update);
        }

        public async Task<bool> DeleteVariety(string cropId, string varietyId)
        {
            var filter = Builders<Crop>.Filter.Where(m => m.CropId == cropId);
            var update = Builders<Crop>.Update.PullFilter(f => f.Varieties, variety => variety.VarietyId == varietyId);
            return await base.Update(filter, update);
        }
    }
}