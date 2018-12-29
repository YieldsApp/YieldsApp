using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using YieldsApp.DL.Context;
using YieldsApp.DO.Models;

namespace YieldsApp.DL.Repositories
{
    public class FarmRepository : IFarmRepository
    {
        private readonly IFarmContext _context;

        public FarmRepository(IFarmContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Farm>> GetAllFarms()
        {
            return await _context
                .Farms
                .Find(_ => true)
                .ToListAsync();
        }

        public Task<Farm> GetFarm(string name)
        {
            FilterDefinition<Farm> filter = Builders<Farm>.Filter.Eq(m => m.FarmName, name);

            return _context
                .Farms
                .Find(filter)
                .FirstOrDefaultAsync();
        }

        public async Task Create(Farm Farm)
        {
            await _context.Farms.InsertOneAsync(Farm);
        }

        public async Task<bool> Update(Farm Farm)
        {
            ReplaceOneResult updateResult =
                await _context
                    .Farms
                    .ReplaceOneAsync(
                        filter: g => g.FarmId == Farm.FarmId,
                        replacement: Farm);

            return updateResult.IsAcknowledged
                   && updateResult.ModifiedCount > 0;
        }

        public async Task<bool> Delete(string name)
        {
            FilterDefinition<Farm> filter = Builders<Farm>.Filter.Eq(m => m.FarmName, name);

            DeleteResult deleteResult = await _context
                .Farms
                .DeleteOneAsync(filter);

            return deleteResult.IsAcknowledged
                   && deleteResult.DeletedCount > 0;
        }
    }
}
