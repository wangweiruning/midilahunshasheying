window.onload = function(){
var Json = {"list":[
                   {
	                "img":"images/gudian.png",
                    "indoor":"室内休闲",
                    "cos":"超性价比，完美拍摄",
                    "money":"￥:3666"
                    },
                     {
	                "img":"images/gudian.png",
                    "indoor":"室外休闲",
                    "cos":"超性价比，完美拍摄",
                    "money":"￥:4999"
                    },
                    {
	                "img":"images/gudian.png",
                    "indoor":"古风传统",
                    "cos":"超性价比，完美拍摄",
                    "money":"￥:8888"
                    },
                    {
	                "img":"images/gudian.png",
                    "indoor":"海报风格",
                    "cos":"超性价比，完美拍摄",
                    "money":"￥:8888"
                    },
                    {
	                "img":"images/oushi.png",
                    "indoor":"经典欧式",
                    "cos":"超性价比，完美拍摄",
                    "money":"￥:9888"
                    },
                    {
	                "img":"images/waiguo.png",
                    "indoor":"国外拍摄",
                    "cos":"超性价比，完美拍摄",
                    "money":"￥:15210"
                    }
                    ]
                
           }
function $(id){return document.getElementById(id);}
var fashion_box = $("fashion_box");
console.log(fashion_box);

var date_new = Json.list;
console.log(date_new);
console.log(date_new.length);
var sub_ul = document.createElement("ul");
for (var i = 0; i < date_new.length; i++) {
	date_new[i].index = i;
	var ullis = document.createElement("li");
	sub_ul.appendChild(ullis);
	fashion_box.appendChild(sub_ul);
	ullis.className = "ulli";
  
    // 创建图片   
    var images = document.createElement("img");
    images.className = "images";
    ullis.appendChild(images);
	images.src = date_new[i].img ;
    //地点
	var site = document.createElement("p");
	site.className = "site_P";
	site.innerHTML = date_new[i].indoor;
	ullis.appendChild(site);

	// 性价比
	var xing = document.createElement("p");
	xing.className ="xing_p";
	xing.innerHTML = date_new[i].cos;
	ullis.appendChild(xing);

    // money
	var money = document.createElement("p");
	money.className ="money_p";
	money.innerHTML = date_new[i].money;
	ullis.appendChild(money);    


};
var ullis = document.getElementsByClassName('ulli');
ullis[1].style.marginLeft = "80px";
ullis[1].style.marginRight = "80px";

ullis[4].style.marginLeft = "80px";
ullis[4].style.marginRight = "80px";

ullis[0].style.marginBottom = "80px";
ullis[1].style.marginBottom = "80px";
ullis[2].style.marginBottom = "80px";
console.log(ullis); 




var name = $("name");
 name.onblur = function(){
    
    if(/^\W{2,}$/.test(name.value)){
       name.className="green_color";
       return true;
    }else{
   name.className="red_color";
   name.value = "";
       return false;
    }
}

var aeg = $("aeg");
 aeg.onblur = function(){
    if(/\d{1,3}/.test(aeg.value)){
      if (aeg.value.length > 3) {
          aeg.className="red_color";
          aeg.value = "";      
      }else{
                aeg.className="green_color";
                return true;
             }
    }else{
   aeg.className="red_color";
   aeg.value = "";
       return false;
    }
}





}