class MaMe{
    constructor(num1, num2){
    this.num1=num1;
    this.num2=num2;
}
   
compararMaior(){
      if (this.num1>this.num2){
      return "O número maior é :" + this.num1
      }else{if((this.num1==this.num2)){
       return "Os números são iguais"
       }else{ 
        return "O maior número é :" + this.num2}}} 
      

compararMenor(){
      if (this.num1<this.num2){
      return "O número menor é :" + this.num1
      }else{if((this.num1==this.num2)){
       return "Os números são iguais"
      }else{
       return "O menor número é :" + this.num2}}}

}
function maior() {
 var a = new MaMe(parseFloat(document.getElementById("n1").value) ,parseFloat(document.getElementById("n2").value))
 alert(a.compararMaior())  
}
function menor() {
    var a = new MaMe(parseFloat(document.getElementById("n1").value) ,parseFloat(document.getElementById("n2").value))
    alert(a.compararMenor())  
}