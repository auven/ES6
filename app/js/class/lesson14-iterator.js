{
  let arr=['hello','world'];
  let map=arr[Symbol.iterator]();
  console.log(map.next()); // {value: "hello", done: false}
  console.log(map.next()); // {value: "world", done: false}
  console.log(map.next()); // {value: undefined, done: true}
}

{

  /*let obj1 = {
    aa: 1,
    bb: 2
  };

  for (let key of obj1) {  // 报错 Uncaught TypeError: obj1[Symbol.iterator] is not a function
    console.log(key);
  }*/

  let obj={
    start:[1,3,2],
    end:[7,9,8],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end);
      let len=arr.length;
      return {
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }

  console.log(obj);

  for(let key of obj){
    console.log(key);
  }
}

{
  let arr=['hello','world'];
  for(let value of arr){
    console.log('value',value);
  }
}
