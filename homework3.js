alert("homework3");


//fullName
 const fullName = function (firstname, lastname) {
 	return firstname + lastname;
 	// body...
 };

console.log(fullName('Marianna', ' Babayan'));



//3 arguments and returns the result of some operations

const math = function (num1, num2, num3, num4) {
	return ((num1+num4)*(num3+num2));

};

const result = math(4,2,3,5);
console.log(result);



//takes no arguments and returns something
const noArg = function() {
	return 'here should not be any arguments';
}

const sth = function() {
   	console.log("no arguments");
   };
   
   sth();//call the function


 //takes arguments, does something but does not return anything
const noReturn = function(number1, number2) {
	const noReturn = number1*number2;
}

    const result1 = noReturn(15,16);
    console.log(result1);

//takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger


	const func = function (num5, num6) {
if (num5 === num6) {
  return 0;
} else if (num5 > num6) {
  return 1;
} else if (num6 > num5) {
  return -1;
}  
};
 
	
//takes three inputs and returns the first truethy value
const findTheTruethyValue = function (value1, value2, value3) {
  if (value1 !==false || value1 !==NaN || value1 !==undefined || value1 !==0 || value1 !=='' || value1 !==null ) {
    return value1;
    
  } else if (value1 ===false || value1 ===NaN || value1 ===undefined || value1 ===0 || value1 ==='' || value1 ===null && 

    value2 !==false || value2 !==NaN || value2 !==undefined || value2 !==0 || value2 !=='' || value2 !==null)
     {
    return value2;

  } else if (value1 ===false || value1 ===NaN || value1 ===undefined || value1 ===0 || value1 ==='' || value1 ===null && 

    value2 ===false || value2 ===NaN || value2 ===undefined || value2 ===0 || value2 ==='' || value2 ===null && 

     value3 !==false || value3 !==NaN || value3 !==undefined || value3 !==0 || value3 !=='' || value3 !==null)

    return value3;
  }


 

//takes three strings and returns the string that is the longest. 

  const findStringLengths = function (string1, string2, string3) {
  if (str1.length > str2.length && str1.length > str3.length) {
    return str1;
  } else if (str2.length > str1.length && str2.length > str3.length) {
    return str2;
  } else {
    return str3;
  }
};