function calcular() {
    const altura = document.querySelector("#altura"). value;
    const peso = document.querySelector("#peso").value;
    const text = document.querySelector("#texto");

    const altura2 = altura * altura;
    const imc = peso / altura2;

    if (imc < 18.5) {
        text.innerHTML = "Seu IMC é de " + imc + ", você tem peso baixo(se seu IMC é menor do que 15, vá ao médico!!)";
    } else if (imc < 24.99) {
        text.innerHTML = "Seu IMC é de " + imc + ", seu peso é adequado";
    } else if (imc < 29.99) {
        text.innerHTML = "Seu IMC é de " + imc + ", você tem sobrepeso";
    } else if (imc < 34.99) {
        text.innerHTML = "Seu IMC é de " + imc + ", você tem obesidade";
    } else {
        text.innerHTML = "Seu IMC é de " + imc + ", você tem obesidade grave!!";
    }
}