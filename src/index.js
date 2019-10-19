//@ts-check

function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr=String(expr) + '_'
    let exprArr = expr.split('');
    let stackCalk = [];
    let num = '';
    let result;
    
  let outArr = [];
  let stackNum = [];
  let stackOut = []


  for (let e=0;e<expr.length;e++){
    if (Number(expr[e])|| expr[e]=='0'){
      stackNum.push(expr[e])
    }
    else if (!Number(expr[e])){
      let out = stackNum.join('');
      if (out!=''){ 
        outArr.push(out)
        stackNum = [];
        }
    }
    if (expr[e]=='+'){
      if (stackOut.length==0){
        stackOut.push(expr[e])

      }
      else if (stackOut[stackOut.length-1]=='('){
        stackOut.push(expr[e])

      }
      else if (stackOut[stackOut.length-1]=='+'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])

      }
      else if (stackOut[stackOut.length-1]=='-'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])

      }
      else if (stackOut[stackOut.length-1]=='*'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='/'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }

    }
    if (expr[e]=='-'){
      if (stackOut.length==0){
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='('){
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='+'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='-'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='*'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='/'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
    }
    if (expr[e]=='*'){
      if (stackOut.length==0){
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='('){
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='+'){
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='-'){
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='*'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='/'){
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
    }
    if (expr[e]=='/'){
    if (stackOut.length==0){
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='('){
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='+'){
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='-'){
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='*'){
      outArr.push(stackOut.pop())
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='/'){
      outArr.push(stackOut.pop())
      stackOut.push(expr[e])
    }
    }
    if (expr[e]=='('){
  if (stackOut.length==0){
    stackOut.push(expr[e])

  }
  else if (stackOut[stackOut.length-1]=='('){
    stackOut.push(expr[e])

  }
  else if (stackOut[stackOut.length-1]=='+'){

    stackOut.push(expr[e])

  }
  else if (stackOut[stackOut.length-1]=='-'){

    stackOut.push(expr[e])

  }
  else if (stackOut[stackOut.length-1]=='*'){
    stackOut.push(expr[e])
  }
  else if (stackOut[stackOut.length-1]=='/'){
    stackOut.push(expr[e])
  }

    }
    
}
if (stackOut.includes('(')){
    throw 'ExpressionError: Brackets......'
}
while(stackOut.length){
  outArr.push(stackOut.pop())
}




    for(let c=0; c<outArr.length; c++){
      switch (outArr[c]){
        case '+':
            stackCalk.push(stackCalk.pop()+stackCalk.pop());

            break;
        case '-':
            let d=stackCalk.pop();
            let di=stackCalk.pop();
            stackCalk.push(di-d);

            break;
        case '*':
            stackCalk.push(stackCalk.pop()*stackCalk.pop());

            break;
        case '/':
            if (stackCalk[stackCalk.length-1]==0){
              throw 'TypeError: Division by zero.'
            }
            else{
              let d=stackCalk.pop();
              let di=stackCalk.pop();
              let did=di/d;
              stackCalk.push(did);
              }
              break;
        case '(':
            return result = 'ExpressionError: Brackets must be paired';
        default:
          stackCalk.push(Number(outArr[c]));
          break;
      }
    }
    result = Math.round(stackCalk[0]*10000)/10000;
    
    return result;
}

module.exports = {
    expressionCalculator
}