//function to have three parameter

function params(a,b,c){
    if (c == "sum"){
      let result = a+b;
      return result;
      }else if (c == "muliply"){
        let result = a*b;
        return result;
        }else if(c == "divide"){
          let result = a / b;
          return result;
          }
    }
      console.log(params(33,48,"sum"))