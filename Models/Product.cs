using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication7.Models
{
    public class Product
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "The product name can not be blank!")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Please enter a product name between 3-50 characters!")]
        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]
        [Display(Name = "Product Name")]
        public string Name { get; set; }
        [Required(ErrorMessage = "The price can not be blank!")]
        [Range(0.10, 10000, ErrorMessage = "Please enter a price between 0.10-10000!")]
        [DataType(DataType.Currency)]
        [DisplayFormat(DataFormatString = "{0:c}")]
        public decimal Price { get; set; }
        [Required(ErrorMessage = "The description can not be blank!")]
        [StringLength(500, MinimumLength = 5, ErrorMessage = "Please enter a product description between 5-500 characters!")]
        [RegularExpression(@"^[,;a-zA-Z0-9'-'\s]*$", ErrorMessage = "Please enter a product description made up of letters and spaces")]
        [Display(Description = "Product Description")]
        public string Description { get; set; }

        public int? CategoryID { get; set; }
        public virtual Category Category { get; set; }
    }
}