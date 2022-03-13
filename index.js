let holder = []
let nameholeder="peter"
itemsholder="";
for(let i=0; i < nameholeder.length; i++){
    holder.push(nameholeder[i]);
}
console.log('stack value',holder)

for(let i=0; i < nameholeder.length; i++){
     itemsholder += holder.pop();
}
console.log('stack value',holder)

if(nameholeder === itemsholder){
    console.log("it not a pelindrom")
}
