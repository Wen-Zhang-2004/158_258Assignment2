using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication7.Models
{
    public class Category
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [StringLength(50,MinimumLength =3)]
        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]
        [Display(Name="Category Name")]
        public string Name { get; set; }
        public virtual ICollection<Product> Products { get; set; }

    }
}