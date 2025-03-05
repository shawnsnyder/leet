const  MissingDigit = (expression:string):string =>{
  let res: number = 0, x: string;
  let result: string = "";
  // Split the expression to
  // extract operands, operator
  // and resultant
  let exp = expression.split(' ')

  let first_operand: string = exp[0];
  let operator: string = exp[1];
  let second_operand: string = exp[2];
  let resultant: string = exp[exp.length - 1];

  if (resultant.indexOf('x') != -1) {
      x = resultant;
      first_operand = parseInt(first_operand).toString();
      second_operand = parseInt(second_operand).toString();

      if (operator == '+')
          res = parseInt(first_operand) + parseInt(second_operand);
      else if (operator == '-')
          res = parseInt(first_operand) - parseInt(second_operand);
      else if (operator == '*')
          res = parseInt(first_operand) * parseInt(second_operand);
      else
          res = Math.floor(parseInt(first_operand) / parseInt(second_operand));
  } else {
      resultant = parseInt(resultant).toString();

      if (first_operand.indexOf('x') != -1) {
          x = first_operand;
          second_operand = parseInt(second_operand).toString();

          if (operator == '+')
              res = parseInt(resultant) - parseInt(second_operand);
          else if (operator == '-')
              res = parseInt(resultant) + parseInt(second_operand);
          else if (operator == '*')
              res = Math.floor(parseInt(resultant) / parseInt(second_operand));
          else
              res = parseFloat(resultant) * parseFloat(second_operand);
      } else {
          let x: string = second_operand;
          first_operand = parseInt(first_operand).toString();

          if (operator == '+')
              res = parseInt(resultant) - parseInt(first_operand);
          else if (operator == '-')
              res = parseInt(first_operand) - parseInt(resultant);
          else if (operator == '*')
              res= Math.floor(parseFloat(resultant)/parseFloat(first_operand));
           else
              res= Math.floor(parseFloat(first_operand)/parseFloat(resultant));
       }
   }
   console.log('res', res)
   /*
   res=res.toString();
   let k:number=0;
   for(let i of x){
       if(i=='x'){
           result=res[k];
           break;
       }
       else
           k=k+1;
    }
    */
    return result;
}
