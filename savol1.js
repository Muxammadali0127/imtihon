let a=(anyThing,b)=>{
        let str='';
        let alfa=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for(let i=0;i<anyThing.length;i++){
            let element=anyThing[i];
            let count=0;
            for(let j=0;j<alfa.length;j++){
                if(alfa.includes(element)){
                    if(element!=alfa[j]){
                        count+=1;
                    }
                    else{
                       str+=alfa[count+b];
                       break; 
                    }
                }
                else{
                    str+=element;
                    break;
                }
            }
    
        }
        return str;
    }
    
    alert(a(prompt('string kiriting: '),+prompt('Son kiriting')));
    