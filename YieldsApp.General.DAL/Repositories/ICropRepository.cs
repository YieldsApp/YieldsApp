using System.Collections.Generic;
using System.Threading.Tasks;
using YieldsApp.DO.General.Models;

namespace YieldsApp.General.DL.Repositories
{
    public interface ICropRepository
    {
        Task<IEnumerable<Crop>> GetAllCrops();
        Task<Crop> GetCrop(string name);
        Task Create(Crop Crop);
        Task<bool> Update(Crop Crop);
        Task<bool> Delete(string name);
    }
}