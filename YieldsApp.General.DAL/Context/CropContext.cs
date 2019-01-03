using Microsoft.Extensions.Options;
using YieldsApp.DL;
using YieldsApp.DO;
using YieldsApp.DO.General.Models;

namespace YieldsApp.General.DL.Context
{
    public class CropContext : BaseContext<Crop>, ICropContext
    {
        public CropContext(IOptions<Settings> options) : base(options, "crops", true)
        {
        }
    }
}