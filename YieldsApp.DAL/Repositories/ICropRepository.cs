using System.Collections.Generic;
using YieldsApp.DAL.Models;

namespace YieldsApp.DAL.Repositories
{
    public interface ICropRepository
    {
        IEnumerable<Crop> GetAll();
        Crop GetSingle(int id);
        Crop Add(Crop toAdd);
        Crop Update(Crop toUpdate);
        void Delete(Crop toDelete);
        int Save();
    }
}