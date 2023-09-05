function mostrar(str){
  return str;
}
function leer(str){
  const reg = RegExp(str,"ig");
  let it =0;
  if(reg !== ""){
    for(let i=0; i<reg.lenght; i++){
      it = i;
    }
  }
  return it;
}
let ops = [mostrar, leer];

export default ops;
