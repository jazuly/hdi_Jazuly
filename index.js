const guestPattern = async function(value) {
    //Console default styling
    let baseStyles = [
        "color: red",
        "font-size: 30px"
    ].join(';');
    
    //Check Data
    if(!(/^[\d-]*$/).test(value)) return console.log('%cInvalid Data!', baseStyles);
    if(value < -5) return console.log('%cData too small!', baseStyles);
    if(value < 1) return console.log('');
    if(value == 1) return console.log('%cx', "color:yellow;font-size:18px");
    if(value > 20) return console.log('%cData too big!', baseStyles);
  
  	
    //Init variable
    let hLoop = value * 2;
    let text = '';
    let newText = '';
    let finalData = [];
    
    console.log("%c----------START----------", baseStyles)
    await delay()
  
  
    //Create dot text
    for(let i=0; i< hLoop; i++) {
      text += '.';
    }
  
  
    //Format String based on dot
    //Get latest 3 text as marker
    //Delete first string and add new string at the end string
    for(let i=0; i< hLoop; i++) {
      let last3 = text.substr(text.length - 3);
      
      switch(last3) {
      	case '...':
        	text = text.substr(1)
        	text += 'x'
          break;
          
         case '..x':
         	text = text.substr(1)
        	text += '.'
          break;
          
         case '.x.':
         	text = text.substr(1)
        	text += 'o'
          break;
          
         case 'x.o':
         	text = text.substr(1)
        	text += '.'
          break;
          
         case '.o.':
         	text = text.substr(1)
        	text += 'x'
          break;
          
         case 'o.x':
         	text = text.substr(1)
        	text += '.'
          break;
          
         default:
         	console.log('Failed Build Data!');
          break;
      }
      
      /* if(last3 == '...') {
         text = text.substr(1)
         text += 'x'
       } else if(last3 == '..x') {
         text = text.substr(1)
         text += '.'
       } else if(last3 == '.x.') {
         text = text.substr(1)
         text += 'o'
       } else if(last3 == 'x.o') {
         text = text.substr(1)
         text += '.'
       } else if (last3 == '.o.') {
         text = text.substr(1)
         text += 'x'
       } else if (last3 == 'o.x') {
         text = text.substr(1)
         text += '.'
       } */
    }
  
  
    //Take Half of whole text
    //'0' Delete First String so there's no empty string when loop
    /* newText2 = text.substr(0, text.length / 2);
    newText = newText2; */
    newText = text.substr(0, text.length / 2);
  
  
    //Create Data As Array
    //Delete Last String
    //Add space on first before actual String
    for(let i=0; i< (hLoop / 2)-1; i++) {
      newText = newText.slice(0, -1)
      newText = ` ${newText}`
      finalData.push(newText)
    }
  
  
    //Print First Floor
    for (let i=0; i< finalData.length; i++) {
      let fFloor = finalData[(finalData.length-1) - i];
      await delay()
      console.log(`%c${fFloor.replaceAll('.', ' ')}`, "color:burlywood;font-size:18px")
    }
  
  	
    //Replace all dot to space
    //Print Middle Floor
    let mFloor = text.replaceAll('.', ' ')
    await delay()
    console.log(`%c${mFloor}`, "color:yellow;font-size:18px")
  
     //Convert string to array and reverse the string and convert it to string again
    //Replace all x,o,and dot to space
    //Print Second Floor
    for (let i=0; i< finalData.length; i++) {
      let sFloor = finalData[i].split("").reverse().join("");
      await delay()
      console.log(`%c${newText.replace(/x|o|./gi, ' ').substr(1) +  sFloor.replaceAll('.', ' ')}`, "color:hotpink;font-size:18px")
    }
    
    await delay()
    console.log("%c----------DONE----------", baseStyles)
  }
  
  const delay = function() {
   return new Promise(function(resolve) {
   	setTimeout(resolve, 300)
   })
}

guestPattern("15")
