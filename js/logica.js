var cesar=cesar || (function(){
 
    
 
    return{
        encode: (Texto, Desplazamiento) => {
            let resultado = "";
            for (let i = 0; i < Texto.length; i++) {
        
              
              let texto = (Texto.charCodeAt(i) - 65 + parseInt(Desplazamiento)) % 26 + 65;
                console.log(Texto.charCodeAt(i));
              
                resultado += String.fromCharCode(texto);
            }
        
            return resultado;
        
          },
        
          decode: (Texto, Desplazamiento) => {
            let resultado = "";
            for (let i = 0; i < Texto.length; i++) {
        
              
              let texto = (Texto.charCodeAt(i) + 65 - parseInt(Desplazamiento)) % 26 + 65;
        
              
              resultado += String.fromCharCode(texto);
        
            }
        
            return resultado;
        
          }
    };
 
 
 
 })();
 
 function codificar(){
     document.getElementById("resultado").innerHTML = cesar.encode(
         document.getElementById("cadena").value.toUpperCase(), document.getElementById("desp").value).toLowerCase();
 }
 
 function decodificar(){
     document.getElementById("resultado").innerHTML = cesar.decode(
         document.getElementById("cadena").value.toUpperCase(), document.getElementById("desp").value).toLowerCase();
 }
 
 
 