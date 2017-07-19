console.log('--------把一组数据转变为数组--------');

{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}

console.log('--------把一些伪数组转变为真正的数组--------');

{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  console.log(Array.from([1,3,5],function(item){return item*2}));
}

console.log('--------替换数组元素--------');

{
  console.log('fill-7',[1,'a',undefined].fill(7));
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
}

console.log('--------常用，keys返回数组下标，values返回数组值，entries返回数组下标和值--------');

{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){  // 不加babel-polyfill兼容，则不被支持
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('entries',index,value);
  }
}

console.log('--------复制替换--------');

{
  console.log([1,2,3,4,5].copyWithin(0,3,4));
}

console.log('--------常用，查找，只找出第一个--------');

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

console.log('--------常用，判断是否在数组中');

{
  console.log('number',[1,2,NaN].includes(1));
  console.log('NaN',[1,2,NaN].includes(NaN)); // 解决了不能查找NaN的问题
}
