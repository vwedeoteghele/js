             	## bubble sort algorithm for an array of 6 integers
 given an array of 6 integers [5 3 4 2 4 6]
 
** The algorithms to sort the array is as follow using a for loop; **
start
if i = number of passes
   j = number of comparisons
   n = number of element in the array
   A = Array
   temp = tempory position in memory
****
for(i=0,i>n-1,i++)
for(j=0,j>n-1-i,j++)
if A[j]>A[j+1]
temp=A[j]
A[j]=A[j+1]
A[j+1]=temp	