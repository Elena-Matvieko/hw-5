function number (a,b) {
    const numA = Number(a); 
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
         return 'Одно или оба значения не являются числом';
        } 
         // возвращаем их произведение. 
         return numA * numB;
}
