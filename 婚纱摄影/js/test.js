
     window.onload = function  () {
     	//每一个格子的图片数据
        var imgArry = ["images/ones.png","images/eight.png","images/music.png","images/tebn.png","images/dragon_sds.png","images/hunsha_sja.png"];
        //每一个格子的文字数据
        var titleArry = ["经典欧式","唯美清新","浪漫淡雅","欧式复古","中式俏皮","典雅温馨"];
        // 每一个底部图片的数据
        var bottomArry=["images/logo_m.png","images/logo_m.png","images/logo_m.png","images/logo_m.png","images/logo_m.png","images/logo_m.png",]
        //调用函数创建一个3*3的九宫格
     	creatCell(3,3,imgArry,titleArry);
     	function creatCell (w_num,h_num){
     	var box = document.getElementById('box');
     	for (var i = 0; i < 3*2; i++) {
     		//创建九个小div盒子
     		var sub_div = document.createElement("div");
     		sub_div.className = "sub_div";
     		//控制行
     		var row = i%w_num;
     		//控制列
     		var col = parseInt(i/h_num);
     		console.log(row+"+++",col);
     		sub_div.style.left = row*469 + "px";
            sub_div.style.backgroundColor="#fff";
     		sub_div.style.top = col*640 + "px";
     		box.appendChild(sub_div);
            //创建图片节点
     		var sub_img = document.createElement("img");
     		sub_img.src = imgArry[i];
     		sub_div.appendChild(sub_img);
     		//创建标题节点
     		var sub_title = document.createElement("p");
     		sub_title.innerText = titleArry[i];
     		sub_div.appendChild(sub_title);
            sub_title.style.marginTop=42+"px";
            sub_title.style.fontSize=20+"px";
            sub_title.style.color="#d91d36";
            sub_title.style.fontFamily="微软雅黑";


           var subs_img = document.createElement("img");
            subs_img.src = bottomArry[i];
            sub_div.appendChild(subs_img);
            subs_img.style.marginTop=18+"px";
     	};
     	}

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

   
     }

