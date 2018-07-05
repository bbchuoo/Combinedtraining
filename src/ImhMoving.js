
var ImhMovingLayer = cc.Layer.extend({
    sprite: null,
    Img: null,
    isShoot: false,
    dx: 10,
    dy: 10,
    rect:null,
    ctor: function () {

        this._super();

        this.Img = new cc.Sprite(res.HelloWorld_png);
        this.Img.attr({
            x: 0,
            y: 0
        });
        this.addChild(this.Img);

        this.rect = cc.rect(
          this.Img.x - this.Img.width /2,
          this.Img.y - this.Img.height /2,
          this.Img.width,
          this.height

        );


        this.setupMouse();
        this.scheduleUpdate();

        return true;
    },
    setupMouse: function () {

        cc.eventManager.addListener({

            event: cc.EventListener.MOUSE,

            onMouseDown: function (e) {
                target = e.getCurrentTarget();
                var x = e.getLocationX();
                var y = e.getLocationY();
                var p = new cc.Point(x,y);
                if(cc.rectContainsPoint(target.rect,p)){

                    target.isShoot = true;
                }

            },
            onMouseUp: function (e) {
                target = e.getCurrentTarget();
                target.isShoot = false;
            }
        }, this);
    },

    update: function () {

        if (this.isShoot) {
            cc.log("i'm moving");

            this.Img.x += this.dx;
            this.Img.y += this.dy;
        }

    },
});

var ImhMovingScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new ImhMovingLayer();
        this.addChild(layer);
    }
});

