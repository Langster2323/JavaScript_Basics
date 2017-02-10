/**** Incorrect ****/
for (var triangle = 0; triangle += 1; var symbol = "#"){
  if (triangle <= 7)
  break
}
console.log(symbol);

/**** Correct ****/

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
