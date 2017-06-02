var message = "";
var student;
//To search and find students...
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
 outputDiv.innerHTML = message;
}

while () {
  search = prompt('Search student records: type a name [Ahkeem] (or type "quit" to end)');
  if (search.toLowerCase() === 'quit') {
    break;
  }
}


for(var i = 0; i < students.length; i += 1){
  student = students[i];
  message += '<h2>Student:  ' + student.name + '</h2>';
  message += '<p>Track:  ' + student.track + '</p>';
  message += '<p>Achivements:  ' + student.achivements + '</p>';
  message += '<p>Points:  ' + student.points + '</p>';
}
print(message);
