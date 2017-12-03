console.log('1. 修饰器是一个函数');
console.log('2. 修改类的行为');
console.log('这个特性依赖包：babel-plugin-transform-decorators-legacy');

{
  let readonly=function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  };

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  // 尝试修改会报错：Uncaught TypeError: Cannot assign to read only property 'time' of object '#<Test>'
  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}


{
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  let log = (type) => {
    return function (target, name, descriptor) {
      let src_method = descriptor.value;
      descriptor.value = (...arg) => {
        src_method.apply(target, arg);
        console.log(`log ${type}`);
      }
    }
  };

  class AD {
    @log('show')
    show() {
      console.log('ad is show');
    }
    @log('click')
    click() {
      console.log('ad is click');
    }
  }

  let ad = new AD();
  ad.show();
  ad.click();
}