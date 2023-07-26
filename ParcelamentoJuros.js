const valorDaCompra = 150;
const numeroDeParcelas =  12;

if (numeroDeParcelas === 1) {
    const desconto = valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto;
    console.log (`Você deve pagar ${valorAPagar}, pois a vista tem desconto`)

} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar em ${numeroDeParcelas} parcelas de ${valorDaParcela} sem juros !`)

} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    const valorAPagarComJuros = valorDaCompra * (1+1/100) ** numeroDeParcelas
    const valorDaParcela = (valorAPagarComJuros/numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar em ${numeroDeParcelas} parcelas de ${valorDaParcela} com juros !`)

}else {
    console.log ("Número de parcelas inválido")
}