

var twoImgLayer = cc.Layer.extend({
    sprite:null,
    sprite1:null,
    sprite2:null,
    isTouch1:false,

    ctor:function () {

        this._super();


        this.sprite2 = new cc.Sprite(res.HelloWorld_png);
        this.sprite2.attr({
            x: cc.winSize.width * 1/ 2 + 40,
            y: cc.winSize.height / 2 - 20
        });
        this.addChild(this.sprite2);

        this.sprite1 = new cc.Sprite(res.HelloWorld_png);
        this.sprite1.attr({
            x:cc.winSize.width  *1/2 -40,
            y:cc.winSize.height /2 +20
        });
        this.addChild(this.sprite1);


        //現在把 事件處理器的增加傾聽器 的路徑改成 sprite1跟2他們自己兩張圖片的本身
        cc.eventManager.addListener({

            event : cc.EventListener.MOUSE,

            onMouseDown : function(e){

                var target = e.getCurrentTarget();

                // cc.log("down1"); //從這裡比對可以發現是down2先出來
                //後寫的會先被觸發到
                //試試看 你的target座標=你點下去的那個位置做標
                //所以這裡的target是sprite1
                // target.x = e.getLocationX();
                // target.y = e.getLocationY();

                var targetRect = cc.rect(
                    target.x - target.width/2,
                    target.y - target.height/2,
                    target.width,
                    target.height
                );

                var point = new cc.Point(e.getLocationX(),e.getLocationY());
                if(cc.rectContainsPoint(targetRect,point) ){
                    //這裡我要怎麼找到我設好的布林值?
                    //因為sprite1跟2都有被加進去分支裡了
                    //所以我可以把他們的爸爸找出來
                    // 這樣就可以找到爸爸裡面的屬性
                  var parent = target.getParent();
                  parent.isTouch1 = true;
                  cc.log("touch1");
                }
            },
            onMouseUp : function(e){
                var target = e.getCurrentTarget();
                var parent = target.getParent();
                parent.isTouch1 = false;

            },

        },this.sprite1);
        cc.eventManager.addListener({
            event : cc.EventListener.MOUSE,

            onMouseDown : function(e){
                var target = e.getCurrentTarget();
                // cc.log("down2");

                var targetRect = cc.rect(
                    target.x - target.width/2,
                    target.y - target.height/2,
                    target.width,
                    target.height
                );

                var parent = target.getParent();

                var point = new cc.Point(e.getLocationX(),e.getLocationY());
                //如果有碰到sprite2而且 touch1是false才可以觸摸
                if(cc.rectContainsPoint(targetRect,point) && !parent.isTouch1 ){

                    cc.log("touch2");
                }

            },

        },this.sprite2);





        return true;
    },



});

var twoImgScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new twoImgLayer();
        this.addChild(layer);
    }
});

