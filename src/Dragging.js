

var DraggingLayer = cc.Layer.extend({
    sprite:null,
    isDrag:false,
    ctor:function () {

        this._super();
        this.setupMouse();
       return true;
    },
    setupMouse:function()
    {
        cc.eventManager.addListener({

            event : cc.EventListener.MOUSE,

            onMouseDown:function(e){
                var target = e.getCurrentTarget();
                target.isDrag=true;
            },
            onMouseUp:function(e){
                var target = e.getCurrentTarget();
                target.isDrag=false;
            },
            onMouseMove:function(e){
                var target = e.getCurrentTarget();
                if (target.isDrag){

                    var dx = e.getLocationX();
                    var dy = e.getLocationY();
                    cc.log(dy+"+"+dx);

                }

            },

        },this);

    },

});

var DraggingScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new DraggingLayer();
        this.addChild(layer);
    }
});

