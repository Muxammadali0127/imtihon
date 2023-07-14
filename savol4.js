String.prototype.map = function map(a){
    let str = Object.values(this)
    str.join('')
    s = ''
   
    // for(let i = 0 ; i< str.length ; i++){
        
    //     s +=str[i]+a
    // }  
    a(()=>{
        return this
    }) 
    return a;
}


console.log('sss'.map((e)=> e + 'a'));
