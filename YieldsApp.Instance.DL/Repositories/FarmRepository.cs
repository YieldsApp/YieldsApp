using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using YieldsApp.DL.Repositories;
using YieldsApp.DO.Models;
using YieldsApp.Instance.DL.Context;

namespace YieldsApp.Instance.DL.Repositories
{
    public class FarmRepository : BaseRepository<Farm, IFarmContext> , IFarmRepository
    {
        public FarmRepository(IFarmContext context) : base(context)
        {
        }

        public Task<Farm> Get(string farmId)
        {
            var filter = Builders<Farm>.Filter.Eq(m => m.FarmId, farmId);

            return base.Get(filter);
        }

        public async Task<bool> Update(Farm farm)
        {
            var filter = Builders<Farm>.Filter.Eq(m => m.FarmId, farm.FarmId);
            return await base.Update(farm, filter);
        }

        public async Task<bool> Delete(string farmId)
        {
            var filter = Builders<Farm>.Filter.Eq(m => m.FarmId, farmId);
            return await base.Delete(filter);
        }

        public async Task<bool> AddField(string farmId, Field field)
        {
            var filter = Builders<Farm>.Filter.Where(m => m.FarmId == farmId );
            var update =  Builders<Farm>.Update.Push(x => x.Fields, field);
            return await base.Update(filter, update);
        }

        public async Task<bool> UpdateField(string farmId, Field field)
        {
            var filter = Builders<Farm>.Filter.Where(m => m.FarmId == farmId && m.Fields.Any(f=>f.FieldId == field.FieldId));
            var update = Builders<Farm>.Update.Set(x => x.Fields[-1], field);
            return await base.Update(filter, update);
        }

        public async Task<bool> DeleteField(string farmId, string fieldId)
        {
            var filter = Builders<Farm>.Filter.Where(m => m.FarmId == farmId);
            var update = Builders<Farm>.Update.PullFilter(f=>f.Fields,field=>field.FieldId==fieldId);
            return await base.Update(filter, update);
        }
    }
}