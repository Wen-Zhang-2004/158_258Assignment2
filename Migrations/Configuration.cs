namespace WebApplication7.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebApplication7.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApplication7.Data.WebApplication7Context>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "WebApplication7.Data.WebApplication7Context";
        }

        protected override void Seed(WebApplication7.Data.WebApplication7Context context)
        {
            var categories = new List<Category>
           {
               new Category {Name="Only Tea"},
               new Category {Name="Only Milk"},
           };
            categories.ForEach(c => context.Categories.AddOrUpdate(p => p.Name, c));
            context.SaveChanges();
            var products = new List<Product>
           {
               new Product {Name="green tea",Description="only green tea",Price =9,CategoryID= categories.Single(c=>c.Name == "Only Tea").ID},
               new Product {Name="lemon milk",Description="lemon and milk",Price =15,CategoryID= categories.Single(c=>c.Name == "Only Milk").ID},
           };
            products.ForEach(c => context.Products.AddOrUpdate(p => p.Name, c));
            context.SaveChanges();
        }
    }
}
