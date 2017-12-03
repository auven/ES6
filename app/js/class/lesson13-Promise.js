console.log('--------es5异步操作模拟ajax--------');

{
  // 基本定义
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call()
    }, 1000);
  };
  ajax(function(){
    console.log('es5  timeout1');
  })
}

console.log('--------es6, Promise--------');

{
  let ajax=function(){
    console.log('执行2');
    return new Promise(function(resolve,reject){ // resolve执行下一步操作，reject终止操作
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function(){
    console.log('promise','timeout2');
  })
}

{
  let ajax=function(){
    console.log('执行3');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax()
    .then(function(){
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 2000);
    });
  })
    .then(function(){
    console.log('timeout3');
  })
}

{
  let ajax=function(num){
    console.log('执行4');
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve()
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  ajax(3).then(function(){
    console.log('log',3);
  }).catch(function(err){
    console.log('catch',err);
  });
}


console.log('--------实际应用--------');

console.log('--------所有图片加载完再添加到页面--------');

{
  // 所有图片加载完再添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function (err) {
        reject(err);
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach(function (img) {
      document.body.appendChild(img);
    })
  }

  function errmsg (err) {
    console.log('发生错误', err);
  }

  Promise.all([ // 把多个Promise实例当做一个实例
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
    loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png'),
  ]).then(showImgs, errmsg);
}

console.log('--------有一个图片加载完就添加到页面--------');

{
    // 有一个图片加载完就添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            }
        })
    }

    function showImgs(img) {
      let p = document.createElement('p');
      p.appendChild(img);
      document.body.appendChild(p);
    }

    function errmsg (err) {
        console.log('加载图片失败', err);
    }

    Promise.race([ // 把多个Promise实例当做一个实例
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://abc.cmm/aaa.png'),
    ]).then(showImgs, errmsg);
}