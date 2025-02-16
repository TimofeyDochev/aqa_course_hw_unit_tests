/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  
  */


//variant_1

let salary = 1000;
let grade; 

if (salary >= 1000) {
    grade = "middle";
} else {
    grade = "junior"
}

console.log(grade);

//variant_2

salary >= 1000 ? grade = "middle" : grade = "junior";

console.log(grade);