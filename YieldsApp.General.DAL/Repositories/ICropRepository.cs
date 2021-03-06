﻿using System.Collections.Generic;
using System.Threading.Tasks;
using YieldsApp.DL.Repositories;
using YieldsApp.DO.General.Models;
using YieldsApp.General.DL.Context;

namespace YieldsApp.General.DL.Repositories
{
    public interface ICropRepository : IBaseRepository<Crop, ICropContext>
    {
        Task<IEnumerable<Crop>> GetAll();
        Task<Crop> Get(string name);
        Task Create(Crop Crop);
        Task<bool> Update(Crop Crop);
        Task<bool> Delete(string name);
        Task<bool> AddVariety(string cropId, Variety variety);
        Task<bool> UpdateVariety(string cropId, Variety variety);
        Task<bool> DeleteVariety(string cropId, string varietyId);
    }
}