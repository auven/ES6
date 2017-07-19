console.log('--------声明--------');

{
  // 声明
  let a1=Symbol();
  let a2=Symbol();
  console.log(a1, a2, a1===a2); // 保证了声明的变量是独一无二的

  let a3=Symbol.for('a3');  // 参数是key值，同一个key值指向同一个独一无二的Symbol值，a3是key值
  let a4=Symbol.for('a3');
  console.log(a3===a4);
}

{
  console.log('--------使用Symbol作为对象属性名--------');

  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj);

  console.log('--------常规遍历无法取到该属性--------');

  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value);
  }

  console.log('--------es6新api获取--------');

  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  })

  console.log('--------Reflect去遍历--------');

  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);
  })
}
