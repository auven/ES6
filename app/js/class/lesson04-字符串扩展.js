// ES6中处理大于0xFFFF的Unicode字符
{
  console.log('a',`\u0061`); // a a
  // 大于0xFFFF的Unicode字符
  console.log('s',`\u20BB7`); // s 口7

  console.log('s',`\u{20BB7}`); // s 𠮷
}

console.log('-------------------------');

{
  // ES5中处理Unicode字符
  let a = 'a';
  console.log('length',a.length); // 1
  let s='𠮷';
  console.log('length',s.length); // 2
  console.log('0',s.charAt(0)); // 0 ?
  console.log('1',s.charAt(1)); // 1 ?
  console.log('at0',s.charCodeAt(0)); // at0 55362
  console.log('at1',s.charCodeAt(1)); // at2 57271

  // ES6中
  let s1='𠮷a';
  console.log('length',s1.length); // 3
  console.log('code0',s1.codePointAt(0)); // code0 134071
  console.log('code0',s1.codePointAt(0).toString(16)); // code0 20bb7
  console.log('code1',s1.codePointAt(1)); // code1 57271
  console.log('code2',s1.codePointAt(2)); // code2 97
}

console.log('-------------------------');

{
  // ES5
  console.log(String.fromCharCode("0x20bb7")); // 乱码
  // ES6
  console.log(String.fromCodePoint("0x20bb7")); // 𠮷
}

console.log('-------------------------');

{
  let str='\u{20bb7}abc';
  // ES5
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]); // ? ? a b c
  }
  // ES6
  for(let code of str){
    console.log('es6',code); // 𠮷 a b c
  }
}

console.log('-------------------------');

{
  let str="string";
  console.log('includes',str.includes("c")); // false
  console.log('start',str.startsWith('str')); // true
  console.log('end',str.endsWith('ng')); // true
}

console.log('-------------------------');

{
  let str="abc";
  console.log('repeat', str.repeat(2)); // abcabc
}

console.log('-------------------------');

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m); // i am list,hello world
}

console.log('-------------------------');

// ES7草案，也经常用
{
  console.log('156'.padStart(5,'0')); // 00156
  console.log('1'.padEnd(2,'0')); // 10
}

console.log('-------------------------');

{
  // 标签模板，过滤前端输入的内容，处理多语言
  let user={
    name:'list',
    info:'hello world',
    haha: 'haha'
  };
  console.log('abc', abc`i am ${user.name}, 22 ${user.info}, 33 ${user.haha}`); // s = ['i am', ', 22', ', 33']
  function abc(s,v1,v2,v3){
    console.log('s,v1,v2,v3', s,v1,v2,v3); // s是模板字符串中的字符串数组，v1 v2 v3 分别对应模板字符串中的变量
    return s+v1+v2+v3
  }
}

console.log('-------------------------');

{
  // 使用频率不高
  console.log('raw', String.raw`Hi\n${1+2}`); // Hi\n3
  console.log(`Hi\n${1+2}`); // Hi 换行 3
}
