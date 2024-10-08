function tiempoDeVida() {
<<<<<<< HEAD
    let num1= prompt("Introduce tu nombre: ");
    let num2= prompt("Introduce tu edad: ");
/* Haz un programa que nos pregunte nuestro nombre, nuestra edad. El programa nos tiene que dar
como resultado los días que hemos vivido hasta el momento (suponiendo años de 365 días). */
    parseInt(num2);
    let dias=num2*365;
    document.write(dias);

=======
    try {
        let nombre= prompt("Introduce tu nombre: ");
        let num= prompt("Introduce tu edad: ");
        parseInt(num);
        if (num2 == 0) {
            throw new Error("Error: No se puede dividir por 0.");
        } 
        if((num1.trim() || num2.trim()) == "") {
            throw new Error ("empty");
        }
        tiempo=num*365;
        //Haz un programa que nos pregunte nuestro nombre, nuestra edad. El programa nos tiene que dar 
        //como resultado los días que hemos vivido hasta el momento (suponiendo años de 365 días).
        document.write(tiempo);
    } catch (error) {
        alert(error.message)
    }
>>>>>>> bf8d5520243d102c9b327281370ebf257c6572e3
}