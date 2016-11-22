using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CMSNewUI.Startup))]
namespace CMSNewUI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
