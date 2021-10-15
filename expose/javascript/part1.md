1. values added:  20
   
2. final result:  20
   
3. values added: 20
   
4. This line returns an error because the result was defined by the let keyword so it only has block scope, specifically it has scope within the if block. Since line 13 tries to access result when it is not in the same block, it will return an error. result is not defined for line 13.
   
5. There is an error becasue line 7 tries to reassign result to another value when it was declared as a const variable. Line 9 does not print anything due to the aforementioned error.
   
6. Line 13 also does not print anything becasue there was an error on line 7 where result was being reassigned even though it is a const variable. Also, result only has block scope so it can't even be accessed by line 13.
