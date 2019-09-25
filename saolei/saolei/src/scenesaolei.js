var allSprite = [];
var leis = [];
var size = cc.winSize;
var ox, oy;
var index = 100;


var pintuLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();

        allSprite = [];
        leis = [];

        this.create();

        //重新开始
        var back = new backLayer();
        this.addChild(back);


        return true;
    },

    create: function () {

        var x1 = size.width / 4;
        var y1 = 650;


        //5*5 de lei zhen
        //var leis = [];
        for (var i = 0; i < 5; i++) {
            var ls = [];

            for (var j = 0; j < 5; j++) {
                var tupian = new spritesaolei();
                ls.push(tupian);

                tupian.setPosition(x1, y1);

                tupian.setScale(2);
                this.addChild(tupian);
                x1 = x1 + tupian.getBoundingBox().width;

                console.log(tupian.getBoundingBox().width);
                allSprite.push(tupian);


            }
            leis.push(ls);
            x1 = size.width / 4;
            y1 = y1 - tupian.getBoundingBox().height;

        }

        //zhi zao lei
        var count = Math.floor(Math.random() * 5) + 1; //随机数
        var temp = allSprite;
        for (var i = 0; i < count; i++) {
            var d = Math.floor(Math.random(1) * allSprite.length); //随机数

            allSprite[d].islei = 1;
            allSprite.remove(d);

        }
        allSprite = temp;


    }


});

var saoleiScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new pintuLayer();
        this.addChild(layer);
    }
});


var spritesaolei = cc.Sprite.extend({
    islei: 0,
    isdiankai: 0,
    ctor: function () {
        this._super(res.zhuankuai);


        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan


        }, this);

    }
    ,


    onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget();

        var locationInNode = target.convertToNodeSpace(touch.getLocation());

        var s = target.getContentSize();

        var rect = cc.rect(0, 0, s.width, s.height);

        if (cc.rectContainsPoint(rect, locationInNode)) {

            if (target.islei == 1) {
                //target.setTexture(res.lei);

                target.showall();

            } else {

                for (var i = 0; i < leis.length; i++) {
                    leiss = leis[i];
                    for (var j = 0; j < leiss.length; j++) {

                        if (leiss[j] == target) {

                            var count = 0;
                            if (leis[i][j - 1]) {
                                count += leis[i][j - 1].islei;
                            }
                            if (leis[i][j + 1]) {
                                count += leis[i][j + 1].islei;
                            }
                            if (leis[i - 1]) {
                                if (leis[i - 1][j + 1]) {
                                    count += leis[i - 1][j + 1].islei;
                                }
                                if (leis[i - 1][j - 1]) {
                                    count += leis[i - 1][j - 1].islei;
                                }
                                if (leis[i - 1][j]) {
                                    count += leis[i - 1][j].islei;
                                }
                            }
                            if (leis[i + 1]) {
                                if (leis[i + 1][j + 1]) {
                                    count += leis[i + 1][j + 1].islei;
                                }
                                if (leis[i + 1][j - 1]) {
                                    count += leis[i + 1][j - 1].islei;
                                }
                                if (leis[i + 1][j]) {
                                    count += leis[i + 1][j].islei;
                                }

                            }
                            target.addtext(count);
                            target.isdiankai = 1;

                        }
                    }


                }


            }


            //return true;
        }

        //判断成功
        for (var i = 0; i < allSprite.length; i++) {
            if (allSprite[i].islei == 0 && allSprite[i].isdiankai == 0) {
                return;

            }
        }

        cc.director.runScene(new scenesuccess());


    },
    addtext: function (i) {

        var helloLabel = new cc.LabelTTF(i + "", "Arial", 38);
        helloLabel.setColor(cc.color.RED);
        helloLabel.x = this.width / 2;
        helloLabel.y = this.height / 2;

        this.addChild(helloLabel);

    },
    showall: function () {
        for (var i = 0; i < leis.length; i++) {
            leiss = leis[i];
            for (var j = 0; j < leiss.length; j++) {
                if (leis[i][j].islei == 1) {
                    leis[i][j].setTexture(res.lei);

                }
                else {

                    var count = 0;
                    if (leis[i][j - 1]) {
                        count += leis[i][j - 1].islei;
                    }
                    if (leis[i][j + 1]) {
                        count += leis[i][j + 1].islei;
                    }
                    if (leis[i - 1]) {
                        if (leis[i - 1][j + 1]) {
                            count += leis[i - 1][j + 1].islei;
                        }
                        if (leis[i - 1][j - 1]) {
                            count += leis[i - 1][j - 1].islei;
                        }
                        if (leis[i - 1][j]) {
                            count += leis[i - 1][j].islei;
                        }
                    }
                    if (leis[i + 1]) {
                        if (leis[i + 1][j + 1]) {
                            count += leis[i + 1][j + 1].islei;
                        }
                        if (leis[i + 1][j - 1]) {
                            count += leis[i + 1][j - 1].islei;
                        }
                        if (leis[i + 1][j]) {
                            count += leis[i + 1][j].islei;
                        }

                    }

                    leis[i][j].addtext(count);
                }
            }

        }

    }

});






