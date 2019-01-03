using Microsoft.Extensions.Options;
using YieldsApp.DL;
using YieldsApp.DO;
using YieldsApp.DO.Models;

namespace YieldsApp.Instance.DL.Context
{
    public class FarmContext : BaseContext<Farm>, IFarmContext
    {
        public FarmContext(IOptions<Settings> options) : base(options, "farms")
        {
        }
    }
}