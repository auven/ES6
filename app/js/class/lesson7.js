console.log('--------函数参数默认值--------');

{
  function test(x, y = 'world'){ // 有默认值的参数后面不能有不带默认值的参数
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}

console.log('--------作用域--------');

{
  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');

  function test22(c,y=x){
    console.log('作用域',c,y);
  }
  test22('kill');
}

console.log('--------rest参数--------');

{
  function test3(...arg){ // 将参数转化为数组，与arguments差不多，rest参数后不能有其他参数，否则会报错
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

console.log('--------扩展运算符--------');

{
  console.log(...[1,2,4]); // 把数组拆成多个离散的值
  console.log('a',...[1,2,4]);
}

console.log('--------箭头函数--------');

{
  //  函数名  参数  返回值
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());

  // 做箭头函数的时候，一定要注意this的绑定，箭头函数的this指向定义时的上下文
}

console.log('--------尾调用，作用：提升性能--------');

{
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x) // 在最后一句是函数
  }
  fx(123)
}
