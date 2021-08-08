/**--------------------
Nacrtati dijamant kao na primeru:


     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/


 
    let red = 5; 
    let string = "";
    // Gornji deo dijamanta
    for (let i = 1; i <= red; i++) {
      
      for (let razmak = red; razmak > i; razmak--) {
        string += " ";
      }
      
      for (let star = 0; star < i * 2 - 1; star++) {
        string += "*";
      }
      string += "\n";
    }
    
    // Donji deo dijamanta
    for (let i = 1; i <= red - 1; i++) {
     
      for (let razmak = 0; razmak < i; razmak++) {
        string += " ";
      }
    
      for (let star = (red - i) * 2 - 1; star > 0; star--) {
        string += "*";
      }
      string += "\n";
    }

    console.log(string);