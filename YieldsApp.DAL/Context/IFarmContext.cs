using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Driver;
using YieldsApp.DO.Models;

namespace YieldsApp.DL.Context
{
    public interface IFarmContext
    {
        IMongoCollection<Farm> Farms { get; }
    }
}
