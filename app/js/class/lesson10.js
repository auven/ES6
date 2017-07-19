console.log('这些属性都很实用常用');

console.log('--------set--------');

{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size',list,list.size);
}

{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  console.log('size',list,list.size);
}

console.log('--------添加重复的元素，不会报错，可以用来去重--------');

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);

  // 在转换时不会做数据类型的转化

  let arr=[1,2,3,1,'2'];
  let list2=new Set(arr);

  console.log('unique',list2);
}

console.log('--------add,delete,clear,has--------');

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  console.log('has',list.has('add'),list);
  console.log('delete',list.delete('add'),list);
  list.clear();
  console.log('clear',list);
}

console.log('--------keys,valus,entries,forEach--------');

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  for(let key of list.keys()){
    console.log('keys',key);
  }
  for(let value of list.values()){ // 等同于 for(let value of list)
    console.log('value',value);
  }
  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log('forEach', item);})
}

console.log('--------WeakSet--------');

{
  let weakList=new WeakSet(); // WeakSet与Set支持的数据类型不一样，WeakSet参数必须是对象，是地址引用，不会考虑是否被垃圾回收... 没有clear方法，没有set属性，不能遍历

  let arg={};

  weakList.add(arg);

  // weakList.add(2); // 这里会报错

  console.log('weakList',weakList);
}

console.log('--------map对象的属性名可以是任何数据类型--------');

{
  let map = new Map();
  let arr=['123'];

  map.set(arr,456);

  console.log('map',map,map.get(arr));
}

console.log('--------map的第二种声明方式--------');

{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}

console.log('--------WeakMap--------');

{
  let weakmap=new WeakMap();

  let o={a: 1};
  weakmap.set(o,123);
  console.log(weakmap, weakmap.get(o));
}

console.log('--------数据结构横向对比，增，删，改，查--------');

{
  let map = new Map();
  let array = [];
  // 增
  map.set('t', 1);
  array.push({t: 1});

  console.info('map-array-add', map, array);

  // 查
  let map_exist = map.has('t');
  let array_exist = array.find(item => item.t);
  console.info('map-array-find', map_exist, array_exist);

  // 改
  map.set('t', 2);
  array.forEach(item => item.t ? item.t = 2 : '');
  console.log('map-array-modify', map, array);

  // 删除
  map.delete('t');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.log('map-array-delete', map, array);
}

console.log('-------set和array的对比--------');

{
  let set = new Set();
  let array = [];

  // 增
  set.add({t: 1});
  array.push({t: 1});

  console.info('set-array-add', set, array);

  // 查
  let set_exist = set.has({t: 1});
  let array_exist = array.find(item => item.t);
  console.info('set-array-find', set_exist, array_exist);

  // 改
  set.forEach(item => item.t ? item.t = 2 : '');
  array.forEach(item => item.t ? item.t = 2 : '');
  console.info('set-array-modify', set, array);

  // 删
  set.forEach(item => item.t ? set.delete(item): '');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.log('map-array-delete', set, array);
}

console.log('--------与Object的对比--------');

{
  let item = {t: 1};
  let map = new Map();
  let set = new Set();
  let obj = {};

  // 增
  map.set('t', 1);
  set.add(item);
  obj['t'] = 1;

  console.log('map-set-object', map, set, obj);

  // 查
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  });

  // 改
  map.set('t', 2);
  item.t = 2;
  obj['t'] = 2;

  console.log(map, set, obj);

  // 删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log(map, set, obj);
}

// 总结：能使用map就不使用数组，如果对数据要求比较高，如唯一性，就优先使用set
