///import Nat "mo:base/Nat";
import Int "mo:base/Int";

actor calc {
    // addition
    public func add(a: Int, b: Int) : async Int {
        return a + b;
    };


    //subtraction
       public  func sub(a : Int, b : Int) : async Int {
       return a - b;
        };

//multiplication
          public  func mul(a : Int, b :Int) : async Int {
            return a * b;
        };


//division
          public  func div(a : Int, b :Int) : async Int {
            // if (b == 0) {
            //     return 0; 
            // }
            //     else {
                    return a /  b;
                }

          };
            
        


