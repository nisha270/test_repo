// You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).

// If it has just unique character, output "Unique"

// Else in all other cases, output "No"


// Input
// Input Format

// First and the only line contains string S

// Constraints

// Length of S < 1000


// Output
// Output one string based on string


// Sample Input 1
//   masai
// Sample Output 1

// No

function masaiUniqueness(S) {
    //write code here
  count=0;
  for(i=0;i<=S.length-1;i++){
      for(j=i+1;j<=S.length-1;j++)
      if(S[i]==S[j]){
          count++;
      }
  }
  if(count===0){
      console.log("Unique");
  }
  else{
      console.log("No");
  }
}
