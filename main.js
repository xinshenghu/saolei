cc.game.onStart = function () {
   
    //这是处理gameCanvas尺寸的
    if (!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    cc.view.setDesignResolutionSize(800, 800, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    //这是加载一个scene的 场景
    cc.LoaderScene.preload(g_resources, function () {

        cc.director.runScene(new saoleiScene());

    }, this);

};
cc.game.run();