//***********************************************
var backLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        var size = cc.winSize;
        var back = cc.MenuItemFont.create("back", this.clickCallback, this);
        back.setPosition(size.width - 100, 100);
        back.setColor(cc.color.RED);
        back.setScale(2);

        var menu = new cc.Menu(back);
        menu.setPosition(0, 0);
        this.addChild(menu);
//***********************************************
    },
    clickCallback: function () {

        cc.director.runScene(new saoleiScene());
    }

});

Array.prototype.remove = function (dx) {
        if (isNaN(dx) || dx > this.length) { return false; }
        for (var i = 0, n = 0; i < this.length; i++) {
            if (this[i] != this[dx]) {
                this[n++] = this[i]
            }
        }
        this.length -= 1

}
