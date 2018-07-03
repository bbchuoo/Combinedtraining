
var JavaScriptLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        //透過eventMangar用來addListener產生傾聽
        // ({},誰被賦予這個事件[通常都是自己所在的layer])
        cc.eventManager.addListener({

            //第一個屬性 滑鼠的事件監聽器

            event: cc.EventListener.MOUSE,
            //
            //第二個屬性 當滑鼠點下的時候

            onMouseDown: function (e) {

                //getCurrentTraget獲取當前目標 也就是layer

                var traget = e.getCurrentTarget();

                /*------------------js的基礎觀念檢測---------------------*/
                cc.log(typeof traget); //JavaScript 中任何東西都是物件

                //for (變數 in 物件) {} 他會把物件的屬性存進去變數裡面
                //檢視看看參數傳入的e是不是代表layer

                for(var look in traget){
                    cc.log(look);
                }




            },

            //第三個屬性 當鼠標拿起的時候

            onMouseUp: function (e) {


            },
            //第四個屬性 當鼠標移動的時候

            onMouseMove: function (e) {
            },

            //第五個屬性 當滑鼠滾輪移動的時候
            onMouseScroll: function (e) {


            },



        },this);





        return true;
    }
});

var JavaScriptScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new JavaScriptLayer();
        this.addChild(layer);
    }
});

