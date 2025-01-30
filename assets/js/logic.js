function getgrade() {
   var percentage = prompt("What is the percentage?", percentage);
   var grade;
   if (percentage >= 90) {
      grade = "A";
   } 
   else if (percentage >= 80) {
      grade = "B";
   }
   else if (percentage > 70) {
      grade = "C";
   }
   else if (percentage > 60) {
      grade = "D";
   }
   else {
      grade = "F";
   }
   alert("Student's grade is " + grade);
   return   
}

function forloop () {
   var user_input = prompt("What number shall we count to?", user_input);
   for (var i = 0; i <= user_input; ++i) {
      alert(i)
   }
   return
}