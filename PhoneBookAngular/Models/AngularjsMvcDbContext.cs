using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace PhoneBookAngular.Models
{
    public class AngularjsMvcDbContext : DbContext
    {
        public AngularjsMvcDbContext(): base("name = AngularjsMvcDbContext")
        {

        }
        // setting conventions
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // use single table name
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);

        }

        public DbSet<Contact> Contacts { get; set; }
    }
}