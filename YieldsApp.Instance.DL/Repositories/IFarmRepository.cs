using System.Threading.Tasks;
using YieldsApp.DL.Repositories;
using YieldsApp.DO.Models;
using YieldsApp.Instance.DL.Context;

namespace YieldsApp.Instance.DL.Repositories
{
    public interface IFarmRepository : IBaseRepository<Farm, IFarmContext>
    {
        Task<Farm> Get(string name);
        Task<bool> Update(Farm farm);
        Task<bool> Delete(string name);
    }
}