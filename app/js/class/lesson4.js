// ES6中处理大于0xFFFF的Unicode字符
{
  console.log('a',`\u0061`);
  // 大于0xFFFF的Unicode字符
  console.log('s',`\u20BB7`);

  console.log('s',`\u{20BB7}`);
}

console.log('-------------------------');

{
  // ES5中处理Unicode字符
  let a = 'a';
  console.log('length',a.length); // 1
  let s='𠮷';
  console.log('length',s.length); // 2
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  // ES6中
  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0));
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2));
}

console.log('-------------------------');

{
  // ES5
  console.log(String.fromCharCode("0x20bb7"));
  // ES6
  console.log(String.fromCodePoint("0x20bb7"));
}

console.log('-------------------------');

{
  let str='\u{20bb7}abc';
  // ES5
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  // ES6
  for(let code of str){
    console.log('es6',code);
  }
}

console.log('-------------------------');

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

console.log('-------------------------');

{
  let str="abc";
  console.log('repeat', str.repeat(2));
}

console.log('-------------------------');

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

console.log('-------------------------');

// ES7草案，也经常用
{
  console.log('156'.padStart(5,'0'));
  console.log('1'.padEnd(2,'0'));
}

console.log('-------------------------');

{
  // 标签模板，过滤前端输入的内容，处理多语言
  let user={
    name:'list',
    info:'hello world',
    haha: 'haha'
  };
  console.log('abc', abc`i am ${user.name}, 22 ${user.info}, 33 ${user.haha}`);
  function abc(s,v1,v2,v3){
    console.log('s,v1,v2,v3', s,v1,v2,v3); // s是模板字符串中的字符串数组，v1 v2 v3 分别对应模板字符串中的变量
    return s+v1+v2+v3
  }
}

console.log('-------------------------');

{
  console.log('raw', String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
