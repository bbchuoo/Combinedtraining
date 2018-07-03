
var ArrayLayer = cc.Layer.extend({
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

                /*------------------關於陣列---------------------*/

                var ary = new Array(4);
                ary[0]=123;
                ary[2]=223;
                ary[3]=323;

                //所以for in 的用法就是 有的話才顯示出來 沒有就不用顯示了
                // for(var p in ary ){
                //     // cc.log(p); //所以p所代表的是ary的指數 也就是 023
                //     cc.log(ary[p]); //ary這個陣列裡面的p p也就是023
                // }
                //傳統的用法是
                //這樣最後一個會顯示undefine

                // for(i=0;i<ary.length;i++){
                //     cc.log(ary[i]);
                // }

                var a = [0,11,22,33,44];

                for(var i in a){
                    cc.log(i);
                    //這裡的i就是值
                    // 一樣是01234 因為要看他的值會顯示指數也就是值沒錯

                    cc.log(typeof (i)); //string
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

var ArrayScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new ArrayLayer();
        this.addChild(layer);
    }
});

