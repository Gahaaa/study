/*
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 
solution 함수를 완성해주세요
*/

function solution(n) {
    let arr =String(n).split('');
    answer=null;

    for(i=0; i< arr.length; i ++){
        answer+=Number(arr[i])
    }
    
    return answer;
    
    
}

console.log(solution(1234))