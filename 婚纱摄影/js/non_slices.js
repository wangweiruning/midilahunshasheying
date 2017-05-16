window.onload = function(){
     function $(id){return document.getElementById(id);} 
     var carousel = $("carousel");
     var carousel_pic = $("carousel_pic");
     var left = $("left");
     var right = $("right");
     var ul = carousel_pic.children[0];
     var ullis = ul.children;
     var imgWidth = carousel_pic.offsetWidth;
     console.log(imgWidth);


     // 克隆第一张图片加到最后面
     var fistImg = ullis[0].cloneNode(true);
     ul.appendChild(fistImg);
     console.log(ul);


     timer = setInterval(run,4000)
     //图片自动跑起来
     var pic = 0;//pic表示当前图片的索引
     var square = 0;//square表示当前按钮的索引
     function run(){
         if (pic == ullis.length-1) {
         	ul.style.left = 0;
         	pic = 0;
         };
         pic ++;
         var target = -pic*imgWidth;
         animate(ul,target);

}   


      //按钮点击事件
      carousel_boult.style.display = "block";
      carousel.onmouseover = function(){
      	clearInterval(timer);
      }
      carousel.onmouseout = function(){
      	
        timer = setInterval(run,4000)
      }
      right.onclick = function(){
      	run();
      }
      left.onclick = function(){
      	if (pic == 0) {
      		pic = ullis.length - 1;
      		ul.style.left = -(ullis.length - 1)*imgWidth;      		
      	};
      	pic--;
      	var target = -pic*imgWidth;
      	animate(ul, target);    	     	
      }

     //动画开始
    function animate(obj,target){
         clearInterval(obj.timer);
         obj.timer = setInterval(function(){
           var step = 25;
           var step = obj.offsetLeft < target ? step : -step;
           //判断目标距离是否大于步长
           if (Math.abs(obj.offsetLeft-target)>Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step +"px";
           }else{
           	    obj.style.left = target + "px";
           	    clearInterval(obj.timer);
           }
         },10);
    }


// 更换多组照片
Json = {"test":[
          {
          "img":[{
                "imag":"images/one_tem.png"
                },
                {
                "imag":"images/tow_tem.png"
                },
                {
                "imag":"images/th_tem.png"
                },
                {
                "imag":"images/the_tem.png"
                },
                {
                "imag":"images/one_tem.png"
                },
                {
                "imag":"images/one_tem.png"
                }],
          },
          {
          "img":[{
                "imag":"images/th_tem.png"
                },
                {
                "imag":"images/the_tem.png"
                },
                {
                "imag":"images/th_tem.png"
                },
                {
                "imag":"images/the_tem.png"
                },
                {
                "imag":"images/the_tem.png"
                },
                {
                "imag":"images/one_tem.png"
                }],
          },
          {
          "img":[{
                "imag":"images/one_tem.png"
                },
                {
                "imag":"images/tow_tem.png"
                },
                {
                "imag":"images/the_tem.png"
                },
                {
                "imag":"images/tow_tem.png"
                },
                {
                "imag":"images/one_tem.png"
                },
                {
                "imag":"images/tow_tem.png"
                }]
                                             
          }
              ]
         
        }

var group_box = $("group_pho_box");
var json1 = Json.test

 var t = 0;
 var json_img = json1[t].img;
jsonimg(json_img);
function jsonimg(json_img){
  group_box.innerHTML='';
  t++;
  if(t > 2) {
    t=0;
  }
  group_box.innerHTML = '<p id="more">更多</p>';
  var more = $("more");
  more.onclick = function (){

       var json_img = json1[t].img;
       // console.log(a);
       jsonimg(json_img);
       
       // console.log(a);

    } ;
// 创建ul
var gro_ul = document.createElement("ul");
for (var i = 0; i < json_img.length; i++) {
  json_img[i].index = i 
  // 创建li
  var gro_li = document.createElement("li");
      gro_li.className="gro_li";
      gro_ul.appendChild(gro_li);
      group_box.appendChild(gro_ul);
      var group_li = document.getElementsByClassName('gro_li');

}; 
     for (var j = 0; j < group_li.length; j++) {
        group_li[j].index = j
        // 创建div
        var sub_div = document.createElement("div");
        sub_div.className = "sub_div";
        var  imggeng = document.createElement("img");
        imggeng.className="imggeng";
        imggeng.src = "images/icon_gengduo.png";        
        sub_div.appendChild(imggeng);        
        group_li[j].appendChild(sub_div);        

        var sub_div = document.getElementsByClassName('sub_div');
        group_li[j].onmouseover = function(){
           for (var l = 0; l < sub_div.length; l++) {
              sub_div[l].index = l;
              sub_div[l].style.display = "none";
              sub_div[this.index].style.display = "block";
            };
        }  
        group_li[j].onmouseout = function(){
           for (var h = 0; h < sub_div.length; h++) {
              sub_div[h].index = h;
              sub_div[h].style.display = "none";
            };
        };

        // 创建图片
        var  imgs = document.createElement("img");
        imgs.className="imgs";
        imgs.src=json_img[j].imag;        
        group_li[j].appendChild(imgs);
      };
console.log(group_li);

}


 var door_allul = $("door_allli");
 var door_allli = door_allul.children;
 var full_dress = document.getElementsByClassName("full_dress");
console.log(door_allli);
for (var i = 0; i < door_allli.length; i++) {
  door_allli[i].index = i;
  door_allli[i].onmouseover = function(){
    for (var j = 0; j < full_dress.length; j++) {
      full_dress[j].index = j;
      full_dress[j].style.display = "none";
      full_dress[this.index].style.display = "block";
      };
    }  
    door_allli[i].onmouseout = function(){
        for (var j = 0; j < full_dress.length; j++) {
      full_dress[j].index = j;
      full_dress[j].style.display = "none";
      };
  };
}

// MR轮播图
// var Json2 = {"lnuimg":[
//                         {
//                           "imgbo":[{
//                                     "img":"images/jiaoyan.png"
//                                    },
//                                    {
//                                     "img":"images/jiaoyan.png"
//                                    }
//                                   ]
//                         },                      
//                         {
//                           "imgbo":[{
//                                     "img":"images/jiaoyan.png"
//                                    },
//                                    {
//                                     "img":"images/jiaoyan.png"
//                                    }
//                                   ]
//                         },                        
//                         {
//                           "imgbo":[
//                                    {
//                                     "img":"images/jiaoyan.png"
//                                    },
//                                    {
//                                     "img":"images/jiaoyan.png"
//                                    }
//                                   ]
//                         },                        
//                         {
//                           "imgbo":[{
//                                     "img":"images/jiaoyan.png"
//                                    },
//                                    {
//                                     "img":"images/jiaoyan.png"
//                                    }
//                                   ]
//                         }
//                         ]

//             }

// var Json_one = Json2.lnuimg;
// console.log(Json_one.length);
// // 创建ul
// var JO_ul = document.createElement("ul");
// // 用JSON创建li
// for (var i = 0; i < Json_one.length; i++) {
//   Json_one[i].index = i ;
//   var JO_li = document.createElement("li");
//   JO_li.className = "JO_li";
//   console.log(JO_li);
//   JO_ul.appendChild(JO_li);
// };
// var Json_one_li = document.getElementsByClassName("JO_li");
// console.log(JO_li.offsetWidth);

// JO_ul.style.width = "i*"
// console.log(JO_ul);


     var lunbo_one = $("lunbo_one");
     var left = $("left1");
     var right = $("right1");
     var uli = lunbo_one.children[0];
     var ulli = uli.children;
     var imgWid = lunbo_one.offsetWidth;
     // console.log(imgWid);


     // 克隆第一张图片加到最后面
     var fistImg = ulli[0].cloneNode(true);
     uli.appendChild(fistImg);
     // console.log(uli);


     timer1 = setInterval(run1,4000)
     //图片自动跑起来
     var pic1 = 0;//pic表示当前图片的索引
     var square1 = 0;//square表示当前按钮的索引
     function run1(){
         if (pic1 == ulli.length-1) {
          uli.style.left = 0;
          pic1 = 0;
         };
         pic1 ++;
         var target = -pic1*imgWid;
         animate1(uli,target);

}   
      //按钮点击事件
      // carousel_boult1.style.display = "block";
      lunbo_one.onmouseover = function(){
        clearInterval(timer1);
      }
      lunbo_one.onmouseout = function(){
        
        timer1 = setInterval(run1,4000)
      }
      right1.onclick = function(){
        run1();
        clearInterval(timer1);
      }
      left1.onclick = function(){
        // clearInterval(timer1);
        if (pic1 == 0) {
          pic1 = ullis.length - 1;
          uli.style.left = -(ulli.length - 1)*imgWid;         
        };
        pic1--;
        var target = -pic1*imgWid;
        animate1(uli, target);            
      }

     //动画开始
    function animate1(obj,target){
         clearInterval(obj.timer1);
         obj.timer1 = setInterval(function(){
           var step = 25;
           var step = obj.offsetLeft < target ? step : -step;
           //判断目标距离是否大于步长
           if (Math.abs(obj.offsetLeft-target)>Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step +"px";
           }else{
                obj.style.left = target + "px";
                clearInterval(obj.timer1);
           }
         },20);
    }

var strong1 = $("strong1");
var strong2 = $("strong2");
var strong3 = $("strong3");
var strong4 = $("strong4");
var strong5 = $("strong5");
var strong6 = $("strong6");
var strong7 = $("strong7");
var strong8 = $("strong8");
var date = new Date();

var day = date.getDate();
console.log(day);
if (day >= 10) {
  var shiwei =Math.floor(day/10); 
  var shiwei1 =Math.floor(day%10);
  strong1.innerHTML = ""+shiwei+"";
  strong2.innerHTML = ""+shiwei1+"";
}else{
  strong2.innerHTML = ""+day+"";
}

if (day >= 10) {
  var shiwei =Math.floor(day/10); 
  var shiwei1 =Math.floor(day%10);
  strong3.innerHTML = ""+shiwei+"";
  strong4.innerHTML = ""+shiwei1+"";
}else{
  strong4.innerHTML = ""+day+"";
}

if (day >= 10) {
  var shiwei =Math.floor(day/10); 
  var shiwei1 =Math.floor(day%10);
  strong5.innerHTML = ""+shiwei+"";
  strong6.innerHTML = ""+shiwei1+"";
}else{
  strong6.innerHTML = ""+day+"";
}




if (day >= 10) {
  var shiwei =Math.floor(day/10); 
  var shiwei1 =Math.floor(day%10);
  strong7.innerHTML = ""+shiwei+"";
  strong8.innerHTML = ""+shiwei1+"";
}else{
  strong8.innerHTML = ""+day+"";
}
// SO轮播图
     var lunbo_tow = $("lunbo_tow");
     var left = $("left2");
     var right = $("right2");
     var uli2 = lunbo_tow.children[0];
     var ulli2 = uli2.children;
     var imgWidth2 = lunbo_tow.offsetWidth;
     console.log(imgWidth2);


     // 克隆第一张图片加到最后面
     var fistImg = ulli2[0].cloneNode(true);
     uli2.appendChild(fistImg);
     console.log(uli2);


     timer2 = setInterval(run2,4000)
     //图片自动跑起来
     var pic2 = 0;//pic表示当前图片的索引
     var square2 = 0;//square表示当前按钮的索引
     function run2(){
         if (pic2 == ulli2.length-1) {
          uli2.style.left = 0;
          pic2 = 0;
         };
         pic2 ++;
         var target = -pic2*imgWidth2;
         animate2(uli2,target);

}   


      //按钮点击事件
      // carousel_boult1.style.display = "block";
      lunbo_tow.onmouseover = function(){
        clearInterval(timer2);
      }
      lunbo_tow.onmouseout = function(){
        
        timer2 = setInterval(run2,4000)
      }
      right2.onclick = function(){
        run2();
      }
      left2.onclick = function(){
        if (pic2 == 0) {
          pic2 = ulli2.length - 1;
          uli2.style.left = -(ulli2.length - 1)*imgWidth2;         
        };
        pic2--;
        var target = -pic2*imgWidth2;
        animate2(uli2, target);            
      }

     //动画开始
    function animate2(obj,target){
         clearInterval(obj.timer2);
         obj.timer2 = setInterval(function(){
           var step = 25;
           var step = obj.offsetLeft < target ? step : -step;
           //判断目标距离是否大于步长
           if (Math.abs(obj.offsetLeft-target)>Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step +"px";
           }else{
                obj.style.left = target + "px";
                clearInterval(obj.timer2);
           }
         },20);
    }


}