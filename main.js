cc.game.onStart = function () {
   
    //���Ǵ���gameCanvas�ߴ��
    if (!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    cc.view.setDesignResolutionSize(800, 800, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    //���Ǽ���һ��scene�� ����
    cc.LoaderScene.preload(g_resources, function () {

        cc.director.runScene(new saoleiScene());

    }, this);

};
cc.game.run();