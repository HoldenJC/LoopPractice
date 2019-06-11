function incrementByUntil(untilNumber, incrementMultiple){
  var counter = 0;
  for(var i = 0; i < untilNumber; i += incrementMultiple){
    counter++;
    console.log(counter, i);
  }
}

incrementByUntil(50, 3);
