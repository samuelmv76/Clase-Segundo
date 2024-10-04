function tiempoDeVida() {
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
}