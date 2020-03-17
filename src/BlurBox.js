import React, { Component } from 'react';
function BlurBox ({height=100,width=100,backgroundImage='http://a.hiphotos.baidu.com/zhidao/pic/item/3ac79f3df8dcd100eab2a68e7a8b4710b9122f76.jpg',borderRadious=1,blur=3,children}) {
  return (
    <div style={{height:height,width:width,overflow:'hidden',borderRadius:borderRadious+'rem',position:'relative'}}>
      <div style={{height:height,width:width,backgroundImage:`url(${backgroundImage})`,backgroundPosition:'center',backgroundSize:'cover',filter: `blur(${blur}px)`,borderRadius:borderRadious+'rem',position:'absolute',left:0,top:0,zIndex:-1}}></div>
      {children}
    </div>
  )
}
export default BlurBox;