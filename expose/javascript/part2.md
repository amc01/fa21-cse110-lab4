1. Line 12 will print 3 because it is printing the index values. Since var has function scope, it can be accessed by line 12.
   
2. Line 13 will print the last item to be calculated for the discountedPrice, the console prints 150. Since discountedPrice has function scope, it can be accessed in line 13.
   
3. Line 14 will print the last itme to be calculated for finalPrice, the console prints 150. Since finalPrice was declared with the var keyword, that means it has function scope, so it can be accessed in line 14.
   
4. This function will return the array 'discounted'. Since discounted was declared with the var keyword, it has function scope. All of the finalPrices have been pushed into discounted, so at the end the array with all the prices calcuated will be returned.
   
5. There will be an error saying that i is undefined. This is becasue i was declared with the let keyword so it only has block scope. Since line 12 is outside of the block that i was declared in, an error will occur.
   
6. There will be an error saying that discountedPrice is undefined. This is becasue discountedPrice was declared with the let keyword so it only has block scope. Since line 13 is outside of the block that discountedPrice was declared in, an error will occur.
   
7. Line 14 will print the last itme to be calculated for finalPrice, the console prints 150. Since finalPrice was declared with the let keyword, that means it has block scope, so it can be accessed in line 14. Line 14 is within the same block that finalPrice was declared in.
   
8. This function will return the array 'discounted'. Since discounted was declared with the let keyword, it has block scope. All of the finalPrices have been pushed into discounted, so at the end the array with all the prices calcuated will be returned. Line 16 is within the block that discounted was declared in.

9.  There will be an error saying that i is undefined. This is becasue i was declared with the let keyword so it only has block scope. Since line 11 is outside of the block that i was declared in, an error will occur.
    
10. Line 12 will print out 3 becasue that is the length of prices. Since length was declared with the const keyword, that means it has block scope and that its values cannot be changed. There was no reassignment to length and line 12 is in the same block that length was declared in so there is no error.
    
11. This function will return the array 'discounted'. Since discounted was declared with the const keyword, it has block scope. All of the discountedPrice have been pushed into discounted, so at the end the array with all the prices calcuated will be returned. Line 14 is within the block that discounted was declared in so there is no error and there was no reassignment to discounted as well.
    
12. 
    A. student.name
    B. student['Grad Year']
    C. student.[greeintg]()