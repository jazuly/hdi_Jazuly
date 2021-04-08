const guestPattern = function(value) {
    //Check Data
    if(!(/^\d*$/).test(value)) return console.log('Invalid Data!');
    if(value < -5) return console.log('Data too small!');
    if(value < 1) return console.log('');
    if(value == 1) return console.log('x');
    if(value > 20) return console.log('Data too big!');
  
  	
    //Init variable
    let hLoop = value * 2;
    let text = '';
    let newText = '';
    let finalData = [];
  
  
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
      console.log(fFloor.replaceAll('.', ' '))
    }
  
  	
    //Replace all dot to space
    //Print Middle Floor
    let mFloor = text.replaceAll('.', ' ')
    console.log(mFloor)
  
  	//Convert string to array and reverse the string and convert it to string again
    //Replace all x,o,and dot to space
    //Print Second Floor
    for (let i=0; i< finalData.length; i++) {
      let sFloor = finalData[i].split("").reverse().join("");
      console.log(newText.replace(/x|o|./gi, ' ').substr(1) +  sFloor.replaceAll('.', ' '))
    }
  }
  
  guestPattern('15')
