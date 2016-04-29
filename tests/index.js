var should = require("should");
var expiry = require("../dist/cc-expiry");

describe("expiry", function ()
{
    describe(".format() with default options", function ()
    {
        it ("should return 1 when given '1'", function ()
        {
            var result = expiry.format("1");
            
            return result.should.equal("1");
        });
        
        it ("should return 12 when given '12'", function ()
        {
            var result = expiry.format("12");
            
            return result.should.equal("12"); 
        });
        
        it ("should return 12 / 3 when given '123'", function ()
        {
            var result = expiry.format("123");
            
            return result.should.equal("12 / 3");
        })
        
        it ("should return 12 / 34 when given '1234'", function () 
        {
            var result = expiry.format("1234");
            
            return result.should.equal("12 / 34");
        })
        
        it ("should return 12 / 34 when given '12345'", function ()
        {
            var result = expiry.format("12345");
            
            return result.should.equal("12 / 34");
        })
        
        it ("should return 1 when given '1/'", function () 
        {
            var result = expiry.format("1/");
            
            return result.should.equal("1");
        })
        
        it ("should return 12 / 34 when given '12/34'", function ()
        {
            var result = expiry.format("12/34");
            
            return result.should.equal("12 / 34");
        })
        
        it ("should return only numbers when given numbers and letters", function ()
        {
            var result = expiry.format("1ab/2");
            
            return result.should.equal("12");
        })
    })
    
    describe (".format() with 4-digit year", function ()
    {
        it ("should return 1 when given '1'", function ()
        {
            var result = expiry.format("1", undefined, true);
            
            return result.should.equal("1");
        });
        
        it ("should return 12 when given '12'", function ()
        {
            var result = expiry.format("12", undefined, true);
            
            return result.should.equal("12"); 
        });
        
        it ("should return 12 / 3 when given '123'", function ()
        {
            var result = expiry.format("123", undefined, true);
            
            return result.should.equal("12 / 3");
        })
        
        it ("should return 12 / 34 when given '1234'", function () 
        {
            var result = expiry.format("1234", undefined, true);
            
            return result.should.equal("12 / 34");
        })
        
        it ("should return 12 / 345 when given '12345'", function ()
        {
            var result = expiry.format("12345", undefined, true);
            
            return result.should.equal("12 / 345");
        })
        
        it ("should return 12 / 3456 when given '123456'", function ()
        {
            var result = expiry.format("123456", undefined, true);
            
            return result.should.equal("12 / 3456");
        })
        
        it ("should return 12 / 3456 when given '1234567'", function ()
        {
            var result = expiry.format("1234567", undefined, true);
            
            return result.should.equal("12 / 3456");
        })
        
        it ("should return 1 when given '1/'", function () 
        {
            var result = expiry.format("1/", undefined, true);
            
            return result.should.equal("1");
        })
        
        it ("should return 12 / 3456 when given '12/3456'", function ()
        {
            var result = expiry.format("12/3456", undefined, true);
            
            return result.should.equal("12 / 3456");
        })
        
        it ("should return only numbers when given numbers and letters", function ()
        {
            var result = expiry.format("1ab/2");
            
            return result.should.equal("12");
        })
    });

    describe(".format() with custom separator", function ()
    {
        var separator = "🍎";
        
        it ("should return 1 when given '1'", function ()
        {
            var result = expiry.format("1", separator);
            
            return result.should.equal("1");
        });
        
        it ("should return 12 when given '12'", function ()
        {
            var result = expiry.format("12", separator);
            
            return result.should.equal("12"); 
        });
        
        it ("should return 12" + separator + "3 when given '123'", function ()
        {
            var result = expiry.format("123", separator);
            
            return result.should.equal("12" + separator + "3");
        })
        
        it ("should return 12" + separator + "34 when given '1234'", function () 
        {
            var result = expiry.format("1234", separator);
            
            return result.should.equal("12" + separator + "34");
        })
        
        it ("should return 12" + separator + "34 when given '12345'", function ()
        {
            var result = expiry.format("12345", separator);
            
            return result.should.equal("12" + separator + "34");
        })
        
        it ("should return 1 when given '1/'", function () 
        {
            var result = expiry.format("1/", separator);
            
            return result.should.equal("1");
        })
        
        it ("should return 12" + separator + "34 when given '12/34'", function ()
        {
            var result = expiry.format("12/34", separator);
            
            return result.should.equal("12" + separator + "34");
        })
        
        it ("should return only numbers when given numbers and letters", function ()
        {
            var result = expiry.format("1ab/2", separator);
            
            return result.should.equal("12");
        })
    });
    
    describe(".format() with custom separator and 4-digit year", function ()
    {
        var separator = "🍎";
        
        it ("should return 1 when given '1'", function ()
        {
            var result = expiry.format("1", separator, true);
            
            return result.should.equal("1");
        });
        
        it ("should return 12 when given '12'", function ()
        {
            var result = expiry.format("12", separator, true);
            
            return result.should.equal("12"); 
        });
        
        it ("should return 12" + separator + "3 when given '123'", function ()
        {
            var result = expiry.format("123", separator, true);
            
            return result.should.equal("12" + separator + "3");
        })
        
        it ("should return 12" + separator + "34 when given '1234'", function () 
        {
            var result = expiry.format("1234", separator, true);
            
            return result.should.equal("12" + separator + "34");
        })
        
        it ("should return 12" + separator + "345 when given '12345'", function ()
        {
            var result = expiry.format("12345", separator, true);
            
            return result.should.equal("12" + separator + "345");
        })
        
        it ("should return 12" + separator + "3456 when given '123456'", function ()
        {
            var result = expiry.format("123456", separator, true);
            
            return result.should.equal("12" + separator + "3456");
        })
        
        it ("should return 12" + separator + "3456 when given '1234567'", function ()
        {
            var result = expiry.format("1234567", separator, true);
            
            return result.should.equal("12" + separator + "3456");
        })
        
        it ("should return 1 when given '1/'", function () 
        {
            var result = expiry.format("1/", separator, true);
            
            return result.should.equal("1");
        })
        
        it ("should return 12" + separator + "3456 when given '12/3456'", function ()
        {
            var result = expiry.format("12/3456", separator, true);
            
            return result.should.equal("12" + separator + "3456");
        })
        
        it ("should return only numbers when given numbers and letters", function ()
        {
            var result = expiry.format("1ab/2", separator, true);
            
            return result.should.equal("12");
        })
    })
    
    describe (".format() with invalid separator", function ()
    {
        it ("should return 12 / 34 when given 1234 with a boolean separator", function ()
        {
            var result = expiry.format("1234", false);
            
            return result.should.equal("12 / 34");
        })
        
        it ("should return 12 / 34 when given 1234 with an object separator", function ()
        {
            var result = expiry.format("1234", { "🍎" : "🍊" });
            
            return result.should.equal("12 / 34");
        })
    })
})