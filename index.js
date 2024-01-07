// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;

}
mondayWork();
mondayWork("work from home");

// const function1= wrapAdjective(result= "*"){
//     //  result = wrapAdjective("*");
//     const innerFunction = (function(emphatic = "a hard worker"){
     
//         // emphatic = "a hard worker";
//         return  `You are ${result}${emphatic}${result}!`;
//     });
//     innerFunction()();
//     innerFunction("||")("a dedicated programmer");
// }
// // wrapAdjective()();
// // wrapAdjective("||")("a dedicated programmer");

function wrapAdjective(special="*"){
    const emphatic = function (adjective ="a hard worker"){
        return `You are ${special}${adjective}${special}!`
        };
 return emphatic;
//  emphatic ("a dedicated programmer")
}

wrapAdjective()();
wrapAdjective("||")("a dedicated programmer");