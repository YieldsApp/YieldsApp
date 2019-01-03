namespace YieldsApp.DO
{
    public class BaseModel
    {
        internal string EntityName;

        public BaseModel()
        {
            EntityName = GetType().FullName;
        }
    }
}