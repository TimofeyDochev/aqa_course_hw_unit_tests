/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let input_num = 2;
let input_str = String(input_num);
let inputs_sum = input_num + +(input_num + input_str) + +(input_num + input_str + input_str);
console.log(inputs_sum);