/*
문자열 배열 strlist가 매개변수로 주어집니다. 
strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
*/

function solution(strlist) {
    var answer = [];
    strlist.forEach(number => answer.push(number.length));
    console.log(answer)
    
}

console.log(solution(["We", "are", "the", "world!"]))

// function solution(strlist) {
//     return strlist.map((el) => el.length)
// }
