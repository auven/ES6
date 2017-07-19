console.log('--------es6多进制写法--------');

{
  console.log('b', 0b111110111);
  console.log('B',0B111110111); // 二进制数值
  console.log(0o767); // 八进制数值
}

console.log('--------判断数值是否为有限数，是否为非数字--------');

{
  console.log('15',Number.isFinite(15));
  console.log('NaN',Number.isFinite(NaN));
  console.log('1/0',Number.isFinite('true'/0));
  console.log('NaN',Number.isNaN(NaN));
  console.log('0',Number.isNaN(0));

}

console.log('--------常用，判断是否为整数，参数必须是数--------');

{
  console.log('25',Number.isInteger(25));
  console.log('25.0',Number.isInteger(25.0));
  console.log('25.1',Number.isInteger(25.1));
  console.log('字符串25',Number.isInteger('25'));
}

console.log('--------判断一个数是否为整数，并且在有效范围内--------');

{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
  console.log('100.23',Number.isSafeInteger(100.23));
}

console.log('--------常用，去小数的整数部分--------');

{
  console.log(4.1,Math.trunc(4.1));
  console.log(4.9,Math.trunc(4.9));
}

console.log('--------判断正数、负数和0，参数不一定要是数字--------');

{
  console.log('-5',Math.sign(-5));
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
  console.log('字符串50',Math.sign('50'));
  console.log('foo',Math.sign('foo'));
}

console.log('--------立方根--------');

{
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
  console.log('9',Math.cbrt(9));
}

// 还有其他api自行学习
