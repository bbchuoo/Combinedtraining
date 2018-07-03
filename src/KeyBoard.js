
var KeyBoardLayer = cc.Layer.extend({
    sprite:null,
    apple:"heloo",
    ctor:function () {
        this._super();

        cc.eventManager.addListener({

            /*------------------鍵盤滑鼠---------------------*/

            // event : cc.EventListener.MOUSE,
            event: cc.EventListener.KEYBOARD,

            // onMouseDown : function(e){
            //     var target= e.getCurrentTarget();
            //     // cc.log(event)
            //     // cc.log(typeof event);
            //
            //     var ex = e.getLocationX(); //取得e(layer的x座標)
            //     var ey = e.getLocationY(); //取得e(layer的y座標)
            //
            //     cc.log(ex + "+" +ey );
            //
            //     },


            onKeyPressed : function(keyCode,e){
                var what = e.getButton();
                cc.log(what) ;
            },


        },this)





        return true;
    }
});

var KeyBoardScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new KeyBoardLayer();
        this.addChild(layer);
    }
});

