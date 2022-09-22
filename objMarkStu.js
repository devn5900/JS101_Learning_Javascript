
let obj={
  
   arr:[],
    
  addDetails:function(name,chemistry,math,english){
    let obj={
      name:name,
      chemistry:chemistry,
      math:math,
      english:english
  }
  this.arr.push(obj);
  },
  max_number:function(){
   
    let max=-Infinity;
    let name='';
      for(i=0;i<this.arr.length;i++){
         let sum=0;
        sum+=this.arr[i].chemistry+this.arr[i].math+this.arr[i].english;
        if(max<sum){
          name=this.arr[i].name;
          max=sum;
        }
      }
    console.log("Max Number of "+name+' '+'is:'+max);
  },
   min_number:function(){
  
    let min=Infinity;
    let name='';
      for(i=0;i<this.arr.length;i++){
          let sum=0;
        sum+=(this.arr[i].chemistry+this.arr[i].math+this.arr[i].english);
        
        if(min>sum){
            name=this.arr[i].name;
            min=sum;
        }
      }
    console.log("Min Number of "+name+' '+'is:'+min);
  },
  print:function(){
    console.log(this.arr);
  }
}

obj.addDetails("Devesh",20,30,40);
obj.addDetails("Prateek",52,99,90);
obj.addDetails("Ayush",400,40,20);
obj.addDetails("Rohit",00,0,80);
obj.print();
obj.max_number();
obj.min_number();
