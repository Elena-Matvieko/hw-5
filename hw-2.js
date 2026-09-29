function check_parity(n){
if (n % 2 == 0){
   return 'Число четное'; 
} else { 
    return 'Число нечетное';
}

}
// Примеры работы:
console.log(check_parity(12));   // Выведет: Число четное
console.log(check_parity(6));   // Выведет: Число четное
console.log(check_parity(9));   // Выведет: Число нечетное
console.log(check_parity(8));   // Выведет: Число четное