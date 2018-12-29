using System.Collections.Generic;
using System.Threading.Tasks;
using YieldsApp.DO.Models;

namespace YieldsApp.DL.Repositories
{
    public interface IFarmRepository
    {
        Task<IEnumerable<Farm>> GetAllFarms();
        Task<Farm> GetFarm(string name);
        Task Create(Farm Farm);
        Task<bool> Update(Farm Farm);
        Task<bool> Delete(string name);
    }
}