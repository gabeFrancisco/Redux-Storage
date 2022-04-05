using System;
using System.ComponentModel.DataAnnotations;

namespace ReduxStorage.Api.Models
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public DateTime? _createdAt;
        public DateTime? CreatedAt
        {
            get { return _createdAt; }
            set
            {
                _createdAt = (value == null ? DateTime.UtcNow : value);
            }
        }

        public DateTime? UpdatedAt { get; set; }
    }
}