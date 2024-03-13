//Operador E (AND) &&
//retorna true se, e somente se , ostodos booleanos
true && true //true
false && true //false
true && false //false
false && false //false

 const var1 = 50
 const var2 = 50
 const var3 = 25
true && true && false
console.log(var1 === var2 && var1 > var3 && var1 === var3)


//exercicios
 const a = true
 const b = false
 const c = true

 console.log(a && b) //false
 console.log(b && c) //false
 console.log(a && c) //true
 console.log(a && b && c) //false 

 //Operador OU (OR) ||
 //retorna false se, e somente se, todos booleanos envolvidos também forem false

 true || true //true
 false || true //true
 true || false //true 
 false || false //false

const d = true
const e = false
const f = true
 console.log(d || e) //true
 console.log(e || f) //true
 console.log(d || f) //true
 console.log(d || e || f) //true

 //Operador Não (Not) !
 //Sempre retorns o booleano oposto

 !true //false
 !false //true

 