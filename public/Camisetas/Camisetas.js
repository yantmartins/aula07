class Camiseta{
      constructor(tamP, tamM, tamG){
      this.tamP = tamP;
      this.tamM = tamM;
      this.TamG = tamG;
    }

    pedido(){
        return (this.tamP*10+this.tamM*12 +this.TamG*15)
    }
    }

    function fechar(){
        let cam = new Camiseta (
            parseFloat(document.getElementById("camisetap").value),
            parseFloat(document.getElementById("camisetam").value),
            parseFloat(document.getElementById("camisetag").value))
         console.log (cam.pedido())   
         alert("O valor fechado do seu pedido é de: R$ " + cam.pedido())
        
    } 