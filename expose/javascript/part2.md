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
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. 
    A. '32' Since integers map to their exact string representation, the string '3' and '2' was combined into '32'
    B. 1 When using subtract, '3' is converted into the integer 3, so 3 minus 2 is 1.
    C. 3 null is the same as 0 when doing addition, so 3 + 0 is 3.
    D. '3null' Adding any string to another value will automatically cast the non-string value into a string
    E. 4 true has the value of 1 when doing addition, so 1 + 3 is 4
    F. 0 false is mapped to 0 and null is also mapped to 0 when doing addition, so 0 + 0 is 0
    G. '3undefined' Adding any string to another value will automatically cast the non-string value into a string
    H. NaN Since undefined is not associated to any value, 3 minus no value returns NaN

14. 
    A. true '2' is mapped to the number 2, and 2 is greater than 1 so it returns true
    B. false Comparing two strings uses ASCII values to compare. Since '1' is less than '2', this returns false
    C. true the string gets converted into a number, so 2 is equal to 2
    D. false The triple equal sign compares data type and value. Since '2' and 2 are not the same, this returns false.
    E. false true gets converted into a 1. 1 is not equal to 2 so this returns false.
    F. true Any number that is not a 0 when the Boolean function is called on it returns true. true is equal to Boolean(2), or true, so   this returns true.

15. == does not check the data type of the variables during comparison but === does.

19. 1
    4
    3
    2