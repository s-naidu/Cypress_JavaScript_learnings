function makeLine(length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
      for (var j = 1; j <= i; j++) {
        line += i;
  
      }
      line+="\n";
    }
    return line + "\n";
  }
  console.log(makeLine(6));