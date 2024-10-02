function dividirExcepcion() {
   try {
        let num1= prompt("Introduce el primer numero para dividir: ");
        let num2= prompt("Introduce el segundo numero para dividir: ");

        //¿Qué sucede si en lugar de dividir dos números,
        // intentamos dividir dos textos?
        /* que sucede si el divisor es el numero 0 */
         
        // Verificar si el divisor es 0
        if (num2 == 0) {
            throw new Error("Error: No se puede dividir por 0.");
        }    
        
        
        let division=num1/num2;
        document.write(division);
   } catch (error) {
        alert(error.message)
   }

}