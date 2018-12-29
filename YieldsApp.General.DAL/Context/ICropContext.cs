using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Driver;
using YieldsApp.DO.General.Models;

namespace YieldsApp.General.DL.Context
{
    public interface ICropContext
    {
        IMongoCollection<Crop> Crops { get; }
    }
}
