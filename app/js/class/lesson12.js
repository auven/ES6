{
  // 基本定义和生成实例
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }
  let v_parent=new Parent('v');
  console.log('构造函数和实例',v_parent);
}

{
  // 继承
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{

  }

  console.log('继承',new Child(), new Child('haha'));
}

{
  // 继承传递参数
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name); // 调用父类
      this.type='child'; // 子类的自定义属性必须放在super之后，super必须放在第一行
    }
  }

  console.log('继承传递参数',new Child(),new Child('hello'));
}

{
  // getter,setter
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    get longName(){ // 切记这里 longName 是属性不是方法
      return 'mk'+this.name
    }

    set longName(value){ // 切记这里 longName 是属性不是方法
      this.name=value;
    }
  }

  let v=new Parent();
  console.log('getter',v.longName);
  v.longName='hello';
  console.log('setter',v.longName);
}

{
  // 静态方法
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }

  Parent.tell();

  // let v_person = new Parent();
  // v_person.tell(); // 这里报错，子类不能调用静态方法

}

{
  // 静态属性
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    static tell(){ // static只是用来定义静态方法
      console.log('tell');
    }
  }

  Parent.type='test';

  console.log('静态属性',Parent.type);

  let v_person = new Parent();
  console.log(v_person.type); // undefined，子类没法读取静态属性
}
