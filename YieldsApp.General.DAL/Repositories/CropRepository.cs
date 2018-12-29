using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using YieldsApp.DO.General.Models;
using YieldsApp.General.DL.Context;

namespace YieldsApp.General.DL.Repositories
{
    public class CropRepository : ICropRepository
    {
        private readonly ICropContext _context;

        public CropRepository(ICropContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Crop>> GetAllCrops()
        {
            return await _context
                .Crops
                .Find(_ => true)
                .ToListAsync();
        }

        public Task<Crop> GetCrop(string name)
        {
            FilterDefinition<Crop> filter = Builders<Crop>.Filter.Eq(m => m.CropName, name);

            return _context
                .Crops
                .Find(filter)
                .FirstOrDefaultAsync();
        }

        public async Task Create(Crop Crop)
        {
            await _context.Crops.InsertOneAsync(Crop);
        }

        public async Task<bool> Update(Crop Crop)
        {
            ReplaceOneResult updateResult =
                await _context
                    .Crops
                    .ReplaceOneAsync(
                        filter: g => g.CropId == Crop.CropId,
                        replacement: Crop);

            return updateResult.IsAcknowledged
                   && updateResult.ModifiedCount > 0;
        }

        public async Task<bool> Delete(string name)
        {
            FilterDefinition<Crop> filter = Builders<Crop>.Filter.Eq(m => m.CropName, name);

            DeleteResult deleteResult = await _context
                .Crops
                .DeleteOneAsync(filter);

            return deleteResult.IsAcknowledged
                   && deleteResult.DeletedCount > 0;
        }
    }
}
