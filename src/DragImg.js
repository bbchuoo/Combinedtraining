

var DragImgLayer = cc.Layer.extend({
    sprite:null,
    sprite1:null,
    sprite2:null,
    spriterect:null,
    drag:false,

    ctor:function () {

        this._super();

        this.sprite1 = new cc.Sprite(res.HelloWorld_png);
        this.sprite2 = new cc.Sprite(res.HelloWorld_png);

        //attr設置或返回被選的屬性質
        this.sprite1.attr({
            x:cc.winSize.width  *2/5,
            y:cc.winSize.height /2
            });
        this.addChild(this.sprite1);

        this.sprite2.attr({
           x:cc.winSize.width *3/5,
           y:cc.winSize.height /2
        });
        this.addChild(this.sprite2);

        this.spriterect = cc.rect(
            this.sprite1.x - this.sprite1.width /2,
            this.sprite1.y- this.sprite1.height /2,
            this.sprite1.width,
            this.sprite1.height);

        this.setupMouse(); //這裡要記得 是layer的setupMouse屬性

        return true;
    },
    setupMouse:function() {

         cc.eventManager.addListener({

             event : cc.EventListener.MOUSE,
             dx:0,
             dx:0,

            onMouseDown : function (e) {
                var target = e.getCurrentTarget();


                //當時點按下去的座標抓出來 也就是第一個點
                var x = e.getLocationX();
                var y = e.getLocationY();
                var p = new cc.Point(x,y);
                //這個spriterect是否有在當時點到的座標裡面
                //如果有的話 我就把他設定 有在拖動當中
                //並且把 點下去的座標 減掉他原本一開始的座標
                //所以這個dx跟dy就是他們的偏差值
                if(cc.rectContainsPoint(target.spriterect,p)){
                    target.drag = true;
                    this.dx = x - target.sprite1.x;
                    this.dy = y - target.sprite1.y;


                    };
                },
            onMouseUp : function (e) {
                var target = e.getCurrentTarget();
                 target.drag = false;
                 target.spriterect = cc.rect(
                     target.sprite1.x - target.sprite1.width/2,
                target.sprite1.y - target.sprite1.height/2,
                     target.sprite1.width,
                     target.sprite1.height
                 );
            },
            onMouseMove:function (e) {
                var target = e.getCurrentTarget();
                if(target.drag){
                    //如果 在拖動的時候 我把 當時移動的座標都記起來
                    var x = e.getLocationX();
                    var y = e.getLocationY();
                    //然後把他存進去 原本我的精靈圖片的位置 他就會移動了

                    //因為我把移動時的座標存起來並且把這個移動的座標存成一開始的點
                    //所以我要減掉他們的偏差值 才不會這樣看起來很像被變動的感覺
                    target.sprite1.x = x -this.dx;
                    target.sprite1.y = y -this.dy;
                    //但是我一放開我就抓不到了 因為 rect還在原本的位置
                    //上面有判斷說 如果點下去的座標rect有在point(圖片)裡面的話
                    //才會確認說可以拖動
                    //所以我們要去up寫 就是手放開的時候就重抓一次rect的位置
                }
            },

        },this)

    },


});

var DragImgScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new DragImgLayer();
        this.addChild(layer);
    }
});

