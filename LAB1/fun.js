// waf to take any digit (0-9) and
//return its in word
function digitToWord(num){
    const word=["zero","one","two","three","four","five","six","seven","eight","nine"];
    return word[num];
}
console.log(digitToWord(7));
