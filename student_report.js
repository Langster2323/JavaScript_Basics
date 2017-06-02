var message = "";
var student;
//To search and find students...
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
 outputDiv.innerHTML = message;
}

function getStudentReport( student ) {
  var report = '<h2>Student:  ' + student.name + '</h2>';
  report += '<p>Track:  ' + student.track + '</p>';
  report += '<p>Achivements:  ' + student.achivements + '</p>';
  report += '<p>Points:  ' + student.points + '</p>';
  return report;
}

while () {
  search = prompt('Search student records: type a name [Ahkeem] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for(var i = 0; i < students.length; i += 1){
    student = students[i];
    if (student.name === search) {
      message = getStudentReport( student );
      print(message);
    }

  }
}



print(message);
