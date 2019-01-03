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
    }
}