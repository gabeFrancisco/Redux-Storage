using System;

namespace ReduxStorage.Api.Exceptions
{
    public class RepeatedNameException : Exception
    {
        public RepeatedNameException(string message) : base(message) { }
    }
}