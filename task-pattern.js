// 1.
// const prompt=require('prompt-sync')({sigint:true});
// const n= prompt('Enter the value');
let n=5;
for(let i=0;i<=n;i++){
    let pattern=''
    for(let j=0;j<i;j++){
        pattern+=i
    }
    console.log(pattern);
}

//2.


// const n= prompt('Enter the value');
for(let i=1;i<=n;i++){
    let pattern=''
    if(i%2!=0){
        for(let j=1;j<=n;j++){
            if(j%2!=0){
                pattern+='1'
            }
            else{
                pattern+='0'
            }
        }
    }
    else{
        for(let j=1;j<=n;j++){
            if(j%2!=0){
                pattern+='0'
            }
            else{
                pattern+='1'
            }
        }
        
    }
    console.log(pattern);
    
}


//3.
// const prompt=require('prompt-sync')({sigint:true});

// const n= prompt('Enter the value');

for(let i=1;i<=n;i++){
    let pattern=''
    for(let j=1;j<=i;j++){
        pattern+='A';
    }
    console.log(pattern);
}

