var app = angular.module("app",[]);
angular.module("app").controller("controller",["$scope","$http", "$timeout",function($$,$http, $timeout){
    $$.congratulation = ["嘿","晚安","林育萱","生日快樂","實在\n有點趕",
                        "只好\n自己做了","現在\n二十二來著","好像不太該\n提年齡","一開始認識\n是高二吧","當時覺得\n你其實\n很厲害",
                        "腦波\n是高中生\n在做的嗎？","本來\n以為不會有\n太多的交集","畢竟\n班級、專題\n都不會接觸到","沒想到\n之後會一起去\n日本玩（？","那段時間\n其實我覺得\n你還挺有趣的",
                        "尤其是\n你在制止別人\n捏你臉時的\n聲音","好笑到\n我直到現在都\n還記得那場景\nXD","我到高三之後\n跟你就\n沒什麼聯絡\n有點可惜","到了大學\n聊了一下才知道\n妳好像\n壓力很大啊","想抱怨的話\n可以找我聊\n（其實聽故事\n挺有趣的",
                        "話說\n你怎麼在生日當天\n把自己弄得這麼累\n傻眼ㄟ","好啦\n希望你喜歡這個\n我也只能送網頁了\n快說喜歡！"];
    $$.touch_count = -1;
    $$.congratulation_now = "";
    var time_set = "";
    $$.touch = function(){
        var obj = $("p")[0];

        $$.touch_count = ($$.touch_count + 1) % 22;
        if($$.touch_count!=0){
            obj.style = "animation:1s animeleave ease;";
            obj.style.fontSize = (100-($$.touch_count-1)*3)+`px`;
            obj.style.letterSpacing = (-12+$$.touch_count-1)+`px`;
            //$("p")[0].setAttribute("style","animation:1s animeleave ease;");
            time_set = $timeout($$.anime,950);
        }
        else{
            $$.congratulation_now = $$.congratulation[$$.touch_count];
            obj.style = "animation:1s anime ease;";
            obj.style.fontSize = (100)+`px`;
            obj.style.letterSpacing = (-12)+`px`;
            //$("p")[0].setAttribute("style","animation:1s anime ease;");
        }
    }
    $$.anime = function(){
        $$.congratulation_now = $$.congratulation[$$.touch_count];
        var obj = $("p")[0];
        obj.style = "animation:1s anime ease;";
        obj.style.fontSize = (100-$$.touch_count*3)+`px`;
        obj.style.letterSpacing = (-12+$$.touch_count)+`px`;
        //$("p")[0].setAttribute("style","animation:1s anime ease;")
    }
}]);
