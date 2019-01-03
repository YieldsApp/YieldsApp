using System.Threading.Tasks;
using MongoDB.Driver;
using YieldsApp.DL.Repositories;
using YieldsApp.DO.Models;
using YieldsApp.Instance.DL.Context;

namespace YieldsApp.Instance.DL.Repositories
{
    public class FarmRepository : BaseRepository<Farm, IFarmContext>
    {
        public FarmRepository(IFarmContext context) : base(context)
        {
        }

        public Task<Farm> Get(string name)
        {
            var filter = Builders<Farm>.Filter.Eq(m => m.FarmName, name);

            return base.Get(filter);
        }

        public async Task<bool> Update(Farm farm)
        {
            var filter = Builders<Farm>.Filter.Eq(m => m.FarmId, farm.FarmId);
            return await base.Update(farm, filter);
        }

        public async Task<bool> Delete(string name)
        {
            var filter = Builders<Farm>.Filter.Eq(m => m.FarmName, name);
            return await base.Delete(filter);
        }
    }
}