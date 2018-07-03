
var drawingLayer = cc.Layer.extend({
    sprite:null,
    isDrawing:false,
    drawing:null,
    ctor:function () {

        this._super();
        this.setupMouse();
        //創建一個繪圖物件存放到這個屬性裡
        this.drawing = new cc.DrawNode();
        this.addChild(this.drawing);

        return true;
    },

    setupMouse : function(){



        cc.eventManager.addListener({

            event : cc.EventListener.MOUSE,
            dx:-1,
            dy:-1,
            onMouseDown : function(e){

                var target  = e.getCurrentTarget();
                target.isDrawing=true;
                this.dx = e.getLocationX();
                this.dy = e.getLocationY();

            },

            onMouseUp : function(e){

                var target  = e.getCurrentTarget();
                target.isDrawing=false;

            },
            onMouseMove:function(e){
                var target  = e.getCurrentTarget();

                if(!target.isDrawing) return;

                    var x=e.getLocationX();
                    var y =e.getLocationY();
                    //layer裡面的繪圖物件的繪製線段方法
                    // (剛剛上面已經把繪圖物件先存進去drawing了)
                    // drawSegment（from，to，lineWidth，color）
                    target.drawing.drawSegment(
                        cc.p(this.dx,this.dy),
                        cc.p(x,y),
                        2,
                        cc.color(255,0,0));

                this.dx = x; this.dy = y;

            },




        },this);


    },
});

var drawingScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new drawingLayer();
        this.addChild(layer);
    }
});

