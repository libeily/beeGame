/**
 * Created by liyan on 2015/5/25.
 */
window.onload=function(){
  var btn=document.getElementById("startBtn")  ;
    btn.onclick=function(){
        this.style.display="none";
        game.init("container");
    };
    var game={
        enemy:{
            e1:{style:"enemy1",blood:1,score:1,speed:5},
            e2:{style:"enemy2",blood:2,score:2,speed:7},
            e3:{style:"enemy3",blood:3,score:3,speed:10}
        },
        order:[//关卡的相关信息
            {
                eMap:['e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',//第一关的布局
                    'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',
                    'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',
                    'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
                    'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
                    'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1'],
                colNum:10,//一行有10个
                speedX:10,
                speedY:10,
                times:2000//每2秒钟有个小飞机飞下来

            },//第一关
            {
                eMap:['e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',//第一关的布局
                    'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',
                    'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',
                    'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
                    'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
                    'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1'],
                colNum:10,//一行有10个
                speedX:10,
                speedY:10,
                times:2000//每2秒钟有个小飞机飞下来

            }//第二关
        ],
        createEnemy:function(nowEnemy){//敌人创建
            var order=this.order[nowEnemy];//创建第几关卡的敌人
            var newUl=document.createElement("ul");
            newUl.id="bee";
            newUl.style.width=40*order.colNum+"px";
            this.parent.appendChild(newUl);
            newUl.style.left=(this.parent.offsetWidth-newUl.offsetWidth)/2+"px";
            this.newUl=newUl;
            for(var i=0;i<order.eMap.length;i++) {
                var newLi = document.createElement("li");
                newLi.className = this.enemy[order.eMap[i]].style;//eMap中对应的元素名字就是enemy中的敌人
                newLi.blood = this.enemy[order.eMap[i]].blood;
                newLi.score = this.enemy[order.eMap[i]].score;
                newLi.speedX = this.enemy[order.eMap[i]].speedX;
                newLi.speedY = this.enemy[order.eMap[i]].speedY;
                newUl.appendChild(newLi);
            }
            this.runEnemy(order);//创建好敌人之后，开始出发移动敌人
        },
        runEnemy:function(order){//敌人小蜜蜂集体移动
            var This=this;
            var l=0;
            var r=this.parent.offsetWidth-This.newUl.offsetWidth;
            setInterval(function(){
                if(This.newUl.offsetLeft<l){
                    order.speedX*=-1;
                    This.newUl.style.top=This.newUl.offsetTop+order.speedX+"px";
                }else if(This.newUl.offsetLeft>r){
                    order.speedX*=-1;
                    This.newUl.style.top=This.newUl.offsetTop+order.speedX+"px";
                }
                This.newUl.style.left=This.newUl.offsetLeft+order.speedX+"px";
            },200);


        },



        init: function (id) {//初始化
            this.parent=document.getElementById(id);//设置为属性，可以调用
            this.createScore();//初始化分数
            this.createEnemy(0);//创建第一关的敌人
        },
        createScore:function(){
            var newSpan=document.createElement("span");
            newSpan.id="score";
            newSpan.innerHTML="分数：0";
            this.score=0;
            this.parent.appendChild(newSpan);
        }

    }
};