class BTUS{
    constructor(area, pessoas, eletron){
        this.area = area;
        this.pessoas = pessoas;
        this.eletron = eletron;
    }

calc(){
     let p=0

     if (this.pessoas!=0){

     p = (this.pessoas-1)*600
         
    }
    return (this.area*600+p+this.eletron*600)
    }}
 function calculo(){
     let btu = new BTUS(
         parseFloat(document.getElementById("aa").value),
         parseFloat(document.getElementById("ps").value),
         parseFloat(document.getElementById("eletro").value))
         alert("Serão necessários " + btu.calc() + " BTUs para este ambiente.")

 }