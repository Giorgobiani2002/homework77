let ask = Number(
    prompt(
      "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
    )
  );
  let question;
  let answer;
  let pasuxi;
  
  switch (ask) {
    case 1:
      question = "რა არის რა არის typeof(5)?";
      answer = "number";
      pasuxi = prompt(question);
      
      if (pasuxi.toLowerCase() === answer) {
          alert("scoria");
      } else {
          alert("arascoria");
      }
      break;
    case 2:
      question =  "შეიძლება თუ არა let-ის რედეკლალირება"
      answer = "yes"
      pasuxi = prompt(question);
      if(pasuxi.toLowerCase() ===answer) {
          alert("scoria")
      } else {
          alert("arascoria");
      }
      break;
    case 3:
      question =  "რას აბრუნებს console.log(Math.floor(2.1)) ";
      answer = "ori"
      pasuxi = prompt(question)  
      if(pasuxi.toLowerCase() ===answer) {
          alert("scoria")
      } else {
          alert("arascoria")
      }
      break;
    
  }