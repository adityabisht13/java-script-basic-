console.log('lets start')
//object 
const rectangle={    //const is just like let it use for drive variable
    length:1,
    breadth:2,
    nameStart:'adi' ,


    draw: function(){          // adding behaviour in object    //IMP isse aisse bhi likh skhte the draw(){}  
                               // isse function nhi method khete hei
        console.log('rectangle trignometry');
    }
};

//object creation by factory function
function createRectangle(len,bre){           //passing the input parameters
    let rectangle={    
        length:len,            //sbh hta kei sirf len likhta tbh bhi chl jaata
        breadth:bre,           //same as above line
        nameStart:'adi' ,
    
    
        draw: function(){         
            console.log('rectangle trignometry');
        }
    };
    return rectangle;

}
let rectangleObj1 = createRectangle(4,5);
let rectangleObj2= createRectangle(6,7);

//object creation by construction function
//construction function-->prop/method -->init/define kr rha hei
function OkayRectangle(hei,wid){
        this.height=hei,
        this.width=wid,
        
        this.draw=function(){         
            console.log('yo yo');
        }

}
let mouse=new OkayRectangle(4,3);
//add krne ke liye
//mouse.color='yellow';
//console.log(mouse)   //bina iss line ke bhi work krega 
//delete krne kei liye
 //delete mouse.color;
 //console.log(mouse)
 

 //primtive
 let a=10;                // isme copy bnti hei  data ki sirf
 let b=a;
 a++;
 console.log(a);
 console.log(b);

 //refrence
 let c={value:10};   //isme object bnaya hamne value:10 taaki address pass hoh skhe  //isme hamne address diya hei value joh bdegi woh c ki store value ki bdegi na ki c ki 
 let d=c;
 c.value++;
 console.log(c.value);
 console.log(d.value);
 //new topic
 let square={
    length:2,
    breadth:3
 };
 // for in loop
 for(let key in square){
    //key are reflected through key variable
    //values are reflected through square[key]
    console.log(key,square[key])
 }

 //clone 1 iteration
 let src={
    a:1,
    b:2,
    c:3
 };
 let dest={};
 for(let key in src){
    dest[key]=src[key];
 }
 console.log(dest);
 src.a++;
 console.log(dest);
 //clone 2 assign
 let  okay={
    a:10,
    b:20,
    c:30
 };
 let okay2={value:5};
 let noise=  Object.assign({},okay,okay2);  //we can add multiple property of object in single object using assign function
 console.log(noise);
 okay.a++;
 console.log(noise);
//clone 3 spread
let sigma={
    a:100,
    b:200,
    c:300
};
let sigma2={value:500};
let mega={...sigma,...sigma2};
console.log(mega);
sigma.a++;
console.log(mega);
