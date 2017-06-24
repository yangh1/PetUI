$(document).ready(function () {

    var n1 = {
        title: "新产品于2017年六月正式发布，谨请期待！",
        time: "2017年6月",
        content: "正在进行的乒乓球中国公开赛昨天连续传出退赛消息，中国男乒的马龙、许昕和樊振东三人都退出了比赛。国际乒联主席维克特表示，对三人的行为相当失望，将和中国乒乓球协会一起就此事展开调查。【前情回顾】国乒在本次的中国公开赛尽遣主力参加，马龙、许昕和樊振东原本都已经通过首轮关，按照赛程要进行16进8的争夺，但是昨晚三人都突然退出，两名教练员秦志戬和马琳同时缺席。国际乒联官网今天发表主席维克特就此事的回应：“如此大的一项比赛，世界上三位最好的球员却放弃了比赛，国际乒联对此非常失望。我们会和中国乒乓球协会的朋友们一起进行严肃调查，以确定要采取怎样的行动。同时，中国公开赛最后两天的比赛，我们依然有世界级的球员在进行竞争。昨天深夜，国家体育总局已经就此事发表声明，称三人擅自弃赛的行为极其错误，已经责成中国乒乓球协会进行严肃调查。",
        link: "#"
    }

    var n2 = {
        title: "新产品于2017年六月正式发布，谨请期待！",
        time: "2017年6月",
        content: "新华社北京6月23日电 国家体育总局新闻发言人23日就在国际乒联中国公开赛上中国男子乒乓球队数名队员、教练弃赛事件进行表态。发言人表示，6月23日，在成都举行的2017国际乒联世界巡回赛中国公开赛上，中国乒乓球男队的2名教练员、3名运动员擅自弃赛，造成了很坏的社会影响。发言人说，在重要国际赛事中不辞而别、擅自弃赛，完全置运动员的职业道德和操守于不顾，置国家荣誉和利益于不顾，不尊重观众、不尊重对手，这种行为极其错误，我们坚决反对。发言人还说，我们要求运动队、运动员任何时候都要将爱国主义、集体主义放在首位，过硬的思想作风、严格的纪律要求与运动水平同样重要。国家体育总局已责成中国乒乓球协会查清事实、严肃处理。",
        link: "#"
    }

    var news1 = {
        time: "六月",
        list: [n1]
    }

    var news2 = {
        time: "五月",
        list: [n2, n1]
    }

    var news3 = {
        time: "四月",
        list: [n2, n1]
    }

    var news4 = {
        time: "三月",
        list: [n2]
    }

    var news5 = {
        time: "二月",
        list: [n1, n2]
    }

    var news6 = {
        time: "一月",
        list: [n1]
    }

    var news7 = {
        time: "十二月",
        list: [n2, n1]
    }

    var news8 = {
        time: "十一月",
        list: [n2]
    }

    var newsl = [news1, news2, news3, news4, news5, news6, news7, news8];
    var length = 4;
    var loadMore = false;
    var i = 0;
    for (i = 0; i < length && i < newsl.length; i++) {
        loadNews(i, newsl[i]);
        if (i != Math.min(newsl.length, length) - 1) $(".news-container").append('<hr class="hr' + i + '">');
        else {
            $(".news-container").append('<hr class="hr' + i + '" style="visibility: hidden;">');
            $(".main").append('<a class="moreNews">更多文章<span class="glyphicon glyphicon-menu-down"></span></a>');

            $(".moreNews").click(function () {
                if (loadMore) loadMore = false;
                else loadMore = true;
                if (loadMore) {
                    $(".glyphicon.glyphicon-menu-down")[0].setAttribute("class", "glyphicon glyphicon-menu-up");
                    $(".hr" + (Math.min(newsl.length, length) - 1)).css({
                        "visibility": "visible"
                    });
                    for (i = Math.min(newsl.length, length); i < newsl.length; i++) {
                        loadNews(i, newsl[i]);
                        if (i != newsl.length - 1) $(".news-container").append('<hr class="hr' + i + '">');
                        else {
                            $(".news-container").append('<hr class="hr' + i + '" style="visibility: hidden;">');
                        }
                    }
                } else {
                    $(".glyphicon.glyphicon-menu-up")[0].setAttribute("class", "glyphicon glyphicon-menu-down");
                    $(".hr" + (Math.min(newsl.length, length) - 1)).css({
                        "visibility": "hidden"
                    });
                    for (i = Math.min(newsl.length, length); i < newsl.length; i++) {
                        $("#news" + i).remove();
                        $(".hr" + i).remove();
                    }
                }
            })

        }

    }

});


function loadNews(i, news) {

    $(".news-container").append('<div class="news" id="news' + i + '"><h2>' + news.time + '</h2><div class="news-list" id="newslist' + i + '"></div></div>');

    for (var j in news.list) {
        var n = news.list[j];
        $("#newslist" + i).append('<div class="news_content" id="news' + i + 'content' + j + '"></div>');
        $("#news" + i + "content" + j).append('<h2>' + n.title + '</h2>');
        $("#news" + i + "content" + j).append('<p>' + n.time + '</p>');
        $("#news" + i + "content" + j).append('<p>' + n.content + '</p>');
        $("#news" + i + "content" + j).append('<a href=' + n.link + '>了解更多<span class="glyphicon glyphicon-menu-right"></span></a>');
    }
}