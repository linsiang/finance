<%--
  Created by IntelliJ IDEA.
  User: landmyp
  Date: 19-1-16
  Time: 上午11:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <title>缈缈屋旅游网</title>
    <link rel="icon"
          href="http://m.elongstatic.com/static/webapp/pc_static/pc_hotel/other/common/pic/favicon.ico?t=201411070740"
          type="image/x-icon"/>
    <meta name="keywords" content="酒店,机票,火车票,汽车票,旅行,旅游,攻略"/>
    <meta name="description"
          content="艺龙旅行网是中国领先的在线旅行服务提供商，纳斯达克上市公司(NASDAQ: LONG)。提供全球57万家酒店预订服务，2015年艺龙用户入住了4000万以上的间夜。低价有房保障，到店无房赔付。包含星级酒店、宾馆、快捷酒店、家庭旅馆、公寓、情侣酒店、精品酒店、青年旅舍、主题酒店、客栈、农家乐、温泉酒店。同时提供机票查询、机票预订、火车时刻表查询、高铁火车票预订、汽车票查询和预订等服务。更有丰富的旅游目的地攻略和游记。"/>


    <script type="text/javascript">
        var tjObj_rt = new Date();
    </script>

    <link rel="stylesheet" rev="stylesheet" href='static/css/new2015.min.css'
          type="text/css" media="all"/>

    <link rel="stylesheet" type="text/css" href='static/css/hotel-com.css'
          media="all"/>
    <link rel="stylesheet" type="text/css" href='static/css/new_index2017.css'/>
    <link rel="stylesheet" type="text/css" href="static/css/train.css"/>
    <link rel="stylesheet" type="text/css" href="static/css/flight.css"/>
    <link rel="stylesheet" type="text/css" href="static/css/common_index.css"/>
    <script src="http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js"></script>
</head>
<body>


<%--<c:forEach begin="0" end="8" items="${list}" var="url" varStatus="i" >--%>
    <%--${url.url}<br/>--%>
<%--</c:forEach>--%>
<%--<br/>--%>



<%--<c:forEach begin="12" end="16" items="${list}" var="url" varStatus="i" >--%>
    <%--${url.url}<br/>--%>
<%--</c:forEach><br/>--%>
<%--<c:forEach begin="16" end="20" items="${list}" var="url" varStatus="i" >--%>
    <%--${url.url}<br/>--%>
<%--</c:forEach><br/>--%>
<%--<c:forEach begin="20" end="24" items="${list}" var="url" varStatus="i" >--%>
    <%--${url.url}<br/>--%>
<%--</c:forEach><br/>--%>
<%--<c:forEach begin="24" end="28" items="${list}" var="url" varStatus="i" >--%>
    <%--${url.url}<br/>--%>
<%--</c:forEach>--%>
<%--<br/>--%>
<%--<c:forEach begin="28" end="32" items="${list}" var="url" varStatus="i" >--%>
    <%--${url.url}<br/>--%>
<%--</c:forEach>--%>

<!-- ===================== header 2018-12-18 start ===================== -->
<div id="header" class="header" v='20181218' b='hotels' g='NaN' lg='f'>

    <div class="nav_box">
        <div id="nav" class="response_wrap3" style="width: 1200px;">
            <ul class="link" id="channelMenu">
                <li sid="28632"><a href="http://www.elong.com" title="艺龙旅行网" id="nav_home">首页</a></li>

            </ul>
            <div class="account" method="dvAccount"><input type="hidden" id="hidden_memberid_user" value=""/> <input
                    type="hidden" id="hidden_user_name" value=""/>
                <div class="log" id="user_display_login"><span><a href="https://secure.elong.com/passport/login_cn.html"
                                                                  rel="nofollow" rel="nofollow">登录</a></span>|<span><a
                        href="https://secure.elong.com/passport/register_cn.html?rnd=20190116111331" rel="nofollow"
                        rel="nofollow">注册</a> </span></div>  <!--弹出-->
                <div class="drop_box_log pt" style="display: none" id="div_user_center">
                    <div class="new_btnLogin"><a href="https://secure.elong.com/passport/login_cn.html" rel="nofollow">登录</a>
                    </div>
                    <ul class='clx'>
                        <li class='icon_d1'><b></b><a
                                href="http://my.elong.com/hotel/MyHotelOrderList_cn.html?rnd=20190116111331"
                                rel="nofollow">酒店订单</a></li>
                        <li class='icon_d2' style="display:none;"><b></b><a
                                href="http://my.elong.com/GrouponOrder_cn.html?rnd=20190116111331"
                                rel="nofollow">团购订单</a></li>
                        <li class='icon_d3'><a href="http://my.elong.com/Flight/FlightOrder_cn.html?rnd=20190116111331"
                                               rel="nofollow">机票订单</a></li>
                        <li class='icon_d4'><a href="http://my.elong.com/train/orderlist?rnd=20190116111331"
                                               rel="nofollow">火车票订单</a></li>
                        <li class='icon_d5'><b></b><a
                                href="http://my.elong.com/CashCoupon_cn.html?flag=Cash&rnd=20190116111331"
                                rel="nofollow">现金账户</a></li>
                        <li class='icon_d6'><b></b><a href="http://my.elong.com/ly/lyOrderFill?rnd=20190116111331"
                                                      rel="nofollow">汽车票订单</a></li>
                        <li class='icon_d7'><b></b><a
                                href="http://my.elong.com/hotel/hotelfavlist_cn.html?rnd=20190116111331" rel="nofollow">酒店收藏</a>
                        </li>
                        <li class='icon_d8'><b style='display: none;' id='comment_notice'>9</b> <a id="n_comment_a"
                                                                                                   href="http://my.elong.com/Hotel/reviewedorderlist_cn.html?rnd=20190116111331"
                                                                                                   rel="nofollow">我的点评</a>
                        </li>
                        <li class='icon_d9'><b></b><a href="http://my.elong.com/me_personalcenter_cn" rel="nofollow">个人设置</a>
                        </li>
                    </ul>
                </div> <!--弹出 end--> </div>
        </div>
    </div>
    <style type="text/css"> .appWrap {
        background: url(static/images/app-com.png) no-repeat 0 -483px
    }

    .appBox .close {
        background: url(static/images/app-com.png) no-repeat -328px -182px;
        _background-image: url(http://www.elongstatic.com/images/other/app-com-ie6.png);
    }

    .appBox .close:hover {
        background-position: -358px -182px;
    }

    .appBox .intro {
        width: 480px;
        height: 210px;
        background: url(static/images/fx_btm.png) no-repeat 0 0px;
        font-size: 0;
        line-height: 0;
        overflow: hidden;
        position: absolute;
        top: 27px;
        left: 33px;
    }

    .appBox .way i {
        display: inline-block;
        width: 43px;
        height: 43px;
        margin-right: 5px;
        background: url(static/images/app-com.png) no-repeat 0 -334px;
        _background-image: url(http://www.elongstatic.com/images/other/app-com-ie6.png);
        vertical-align: middle;
    }

    .appBox .way .but {
        width: 170px;
        height: 30px;
        background: url(static/images/app-com.png) no-repeat -181px -334px;
        _background-image: url(http://www.elongstatic.com/images/other/app-com-ie6.png);
        border: 0;
        text-align: center;
        color: #fff;
        font: 16px "Microsoft Yahei", Simsun, sans-serif;
        cursor: pointer;
    }

    .appBox .way .but:hover {
        background-position: -181px -364px;
    }

    .appBox .way .success i {
        width: 20px;
        height: 16px;
        margin-right: 5px;
        background: url(static/images/app-com.png) no-repeat -181px -394px;
        _background-image: url(http://www.elongstatic.com/images/other/app-com-ie6.png);
        vertical-align: middle;
    } </style>
    <div class="clear"></div>
</div> <!-- ===================== header end ===================== -->
<!--contentTime : 2019-01-16 00:00:00 -->
<!-- banner start -->
<div class="banner_n">
    <!-- banner advInfos start -->
    <div class="banner_wrap">
        <ul class="pic_show">
            <c:forEach begin="0" end="7" items="${list}" var="url" varStatus="i" >

                <li style="display: block;"><a href="javascript:;" target="_blank"
                                               style="background:url( ${url.url}) no-repeat center bottom;"></a>
                </li>
            </c:forEach>


        </ul>
    </div>
    <!-- banner advInfos end -->
    <!--big search start-->

    <div class="all_search wrap1000">
        <div class="wrap1000">
            <div class="all_search_wrap">
                <div class="cate_channel">
                    <ul class="left" id="searchTabs" advInfoSuccess="true">
                        <li class="on" index="0"><span><i class="ei_icon icon020"></i>酒店</span></li>
                        <li index="1"><span><i class="ei_icon icon021"></i>机票</span></li>
                        <li index="2"><span><i class="ei_icon icon022"></i>火车票</span></li>
                        <li class="emty"></li>
                        <li class="emty"></li>
                    </ul>
                    <div class="cate_channel_option left">
                        <div class="wrap_ts cate_hotel" style="display: block;">
                            <div class="title_tab clearfix" id="hotel_sub_tabs">
<span class="on"
      sub_index="0"><b>国内酒店</b><i></i></span> <span
                                    sub_index="1"><b>国际·港澳台酒店</b><i></i></span>
                            </div>
                            <!--国内酒店搜索 start-->
                            <div class="keywords_wrap" id="domesticDiv" panel="hotelSubPanel"
                                 style="display: block">
                                <dl class="clearfix">
                                    <dt class="w60">目的地</dt>
                                    <dd class="w332">
                                        <input data-bindid='city' type="text" class="input_text" value="北京"
                                               cityid="0101" cityname="北京" citynameen="beijing" citynamecn="北京">
                                    </dd>
                                </dl>
                                <dl class="date_picker clearfix">
                                    <dt class="w60">入住</dt>
                                    <dd>
                                        <label>
                                            <input data-bindid='checkIn' type="text" class="input_text w170"
                                                   value="yyyy-MM-dd" selectedValue="yyyy-MM-dd"/>
                                            <span class="weekDesc"></span>
                                            <i class="com_icondate"></i>
                                        </label>
                                    </dd>
                                    <dt class="w50">退房</dt>
                                    <dd><label>
                                        <input data-bindid='checkOut' type="text" class="input_text w170"
                                               value="yyyy-MM-dd" selectedValue="yyyy-MM-dd"/>
                                        <span class="weekDesc"></span>
                                        <i class="com_icondate"></i>
                                    </label>
                                    </dd>
                                </dl>
                                <dl class="clearfix">
                                    <dt class="w60">关键词</dt>
                                    <dd class="w332">
                                        <input data-bindid='allInOne' type="text" class="input_text "
                                               placeholder="如位置\酒店名\品牌">
                                </dl>
                                <div class="submit_wrap mt20">
<span class="search_btn mr10" data-bindid='search'><i
        class="com_iconsearch"></i>搜索</span>
                                    <span class="search_btn mr10 search_btn_on" style="display: none;">搜索中...</span>
                                    <span class="search_map_btn" data-bindid='mapSearch' method="mapsearch"
                                          action="search"> <i class="com_iconmap"></i>地图搜索</span>
                                </div>
                            </div>
                            <!--国内酒店搜索 end-->
                            <!--国际酒店搜索 start-->
                            <div class="keywords_wrap" id="subPanelIHotel" panel="hotelSubPanel"
                                 style="display: none">
                            </div>
                            <!--国际酒店搜索 end-->
                        </div>
                        <!--酒店搜索 end-->
                        <!--机票搜索 start-->
                        <div class="wrap_ts cate_hotel cate_tricket" id="plane_tricket_area" style="display: none;">
                        </div>
                        <!--机票搜索 end-->
                        <!--火车票搜索 start-->
                        <div class="wrap_ts cate_hotel cate_train" id="train_tricket_area" style="display: none;">
                        </div>
                        <!--火车票搜索 end-->
                        <div class="wrap_ts cate_hotel cate_mobile" style="display: none;">
                            <div class="keywords_wrap pt20">
                                <div class="ew_code">
                                </div>
                            </div>
                        </div>
                        <!---->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--big search end-->
</div>
<!-- banner end -->
<!--my_record start-->
<div class="wrap1000 pr">
    <div class="open_wrap pa">
        <i class="ei_icon icon04 icon04a" style="display: none"></i>
    </div>
</div>
<div class="my_record clearfix" style="display: none">
    <div class="wrap1000 my_record_wrap pr">
        <div class="title clearfix">
            <h2 class="left">我的记录</h2>
            <div class="tab_option left" id="my_record_tabs">
                <span class="on" index="0">我浏览过的酒店</span>
                <b></b>
                <span index="1" class="">我的点评</span>
                <b></b>
                <span index="2" class="">我的收藏</span>
            </div>
        </div>
        <div class="tab_main" id="my_record_tabs_content">
            <div class="smain_list wrap1000" style="display: block;" id="my_record_history">
                <ul class="clearfix" id="my_record_historys">
                </ul>
                <div class="no_reocrd no_history clearfix" style="display: none" id="my_record_no_history">
                    <i class="left"></i>
                    <h5>您目前没有浏览过的酒店呦~<a href="#?" method="go2HotelList">快去看看&gt;</a></h5>
                </div>
            </div>
            <div class="smain_list wrap1000" style="display: none;" id="my_record_comment">
                <ul class="clearfix" id="my_record_comments">
                </ul>
                <div class="no_reocrd no_comment clearfix" style="display: none" id="my_record_no_comment">
                    <i class="left"></i>
                    <h5> 您目前没有待点评的酒店呦~</h5>
                </div>
            </div>
            <div class="smain_list wrap1000" style="display: none;" id="my_record_fav">
                <ul class="clearfix" id="my_record_favs">
                </ul>
                <div class="no_reocrd no_fav clearfix" id="my_record_no_fav" style="display: none">
                    <i class="left"></i>
                    <h5>您目前没有收藏的酒店呦~<a href="#?" method="go2HotelList">快去看看&gt;</a></h5>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- my_record end-->
<!--no record start-->
<div class="no_record mt20 " style="display: none">
    <div class="wrap1000 clearfix">
        <div class="no_record_inf left">
            <i class="ei_icon icon025 mr5"></i><a href="javascript:;">登录</a><em>展示你的个性化内容</em>
        </div>
    </div>
</div>
<!--no record end-->
<!--fold start -->
<!--fold start-->
<div class="fold mt20 mb20">
    <div class="fold_wrap">
        <ul class="clearfix" id="sm">
            <li class="active">
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>园林酒店</h4></div>
                    <div class="pic_auto pic_auto1"></div>
                    <div class="adv_intro">有谁不爱泡温泉？浸入雾气蒸腾的泉水之中，把身体泡成一片茶叶，舒展轻盈。有比这更美妙的感觉吗？</div>
                </a>
            </li>
            <li>
                <a href="javascript:;" target="_blank">
                    <div class="mask_b">
                        <h4>情侣酒店</h4></div>
                    <div class="pic_auto pic_auto2"></div>
                    <div class="adv_intro">浪漫，是香闺围笼里的暧昧，是灯火迷离，泪眼婆裟的唯美，是杨柳岸、晓风残月中的无语凝噎……</div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>设计师酒店</h4></div>
                    <div class="pic_auto pic_auto3"></div>
                    <div class="adv_intro">前卫的酒店设计理念，独具魅力的风格，优美的自然风光才能有这样顶级的酒店。</div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>青年旅舍</h4></div>
                    <div class="pic_auto pic_auto4"></div>
                    <div class="adv_intro">我为你煮一杯温茶，斟一杯美酒。让我们席地而坐，听你的梦想。用你的只言片语装点我们的梦想博物馆。</div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>特色客栈</h4></div>
                    <div class="pic_auto pic_auto5"></div>
                    <div class="adv_intro">在这里，你可以静静发呆，而不被人打扰，只用细细品味它的美好；在这里，你能看见最美好的星星，能让你找到最深的感动。</div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>海岛酒店</h4></div>
                    <div class="pic_auto pic_auto6"></div>
                    <div class="adv_intro">不想过冬，厌倦沉重，就飞去热带的岛屿游泳，卸下包袱，放下压力，让自己的身与心，在这碧海蓝天之中，享受一次超自然的洗礼。</div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>海外温泉</h4></div>
                    <div class="pic_auto pic_auto7"></div>
                    <div class="adv_intro">因地形地质的区别，世界各地的温泉也千差万别，选择一处适合自己的温泉，5分钟后，你会忘记自己，20分钟后，你会忘记世界。</div>
                </a>
            </li>
        </ul>
    </div>
</div>
<!--fold end-->
<!--fold end-->
<!--termini start-->
<div class=termini>
    <div class="termini_wrap wrap1000">
        <div class="title clearfix">
            <h2 class=clearfix><b style="display: none" class=right><i class="ei_icon icon05 mr5 mt5"></i>定制我的目的地</b><a
                    class=pr10 href="javascript:void(0);" style="cursor:text;">目的地指数</a>
                <span>覆盖全球75万家酒店，你想住的，我们都有</span></h2></div><!--国内-->
        <div class=domestic>
            <h3 class=clearfix><em class="more right"></em> <a
                    class="pr20 left" href="javascript:;"><i class="ei_icon icon06 left pr5"></i>国内</a> <span
                    class=on>登高踏青</span> <span>小憩温泉</span> <span>天然氧吧</span>
            </h3>
            <ul class=tab_theme>
                <c:forEach begin="8" end="11" items="${list}" var="url" varStatus="i" >
                    <li>
                        <a href="javascript:;"
                           target=_blank>
                            <div class=pic_add><img alt=图片GG了 data-src="${url.url}"></div>
                            <div class=city_name>${url.pname}</div>
                        </a>
                        <div class=mask_num>
                            <p><span>380</span>家酒店特卖</p></div>
                        <div class=scale_tour><span class=right><b>?</b><em>380</em>起</span>
                            <p>春意撩人 登高踏青赏春色</p></div>

                    </li>
                </c:forEach>
            </ul>
            <ul style="display: none" class=tab_theme>

                <c:forEach begin="12" end="15" items="${list}" var="url" varStatus="i" >
                    <li>
                        <a href="javascript:;"
                           target=_blank>
                            <div class=pic_add><img alt=图片GG了 data-src="${url.url}"></div>
                            <div class=city_name>${url.pname}</div>
                        </a>
                        <div class=mask_num>
                            <p><span>380</span>家酒店特卖</p></div>
                        <div class=scale_tour><span class=right><b>?</b><em>380</em>起</span>
                            <p>春意撩人 登高踏青赏春色</p></div>
                    </li>
                </c:forEach><br/>
            </ul>
            <ul style="display: none" class=tab_theme>

                <c:forEach begin="16" end="19" items="${list}" var="url" varStatus="i" >
                    <li>
                        <a href="javascript:;"
                           target=_blank>
                            <div class=pic_add><img alt=图片GG了 data-src="${url.url}"></div>
                            <div class=city_name>${url.pname}</div>
                        </a>
                        <div class=mask_num>
                            <p><span>380</span>家酒店特卖</p></div>
                        <div class=scale_tour><span class=right><b>?</b><em>380</em>起</span>
                            <p>春意撩人 登高踏青赏春色</p></div>

                    </li>
                </c:forEach><br/>
            </ul>


        </div><!--国内--><!--国际-->
        <div class="domestic mt20">
            <h3 class=clearfix><em class="more right"></em> <a
                    class="pr20 left" href="http://ihotel.elong.com/"><i class="ei_icon icon062 left pr5"></i>海外</a>
                <span class=on>文艺清新</span> <span>面朝大海</span> <span>别样建筑</span> </h3>
            <ul class=tab_theme>
                <c:forEach begin="20" end="23" items="${list}" var="url" varStatus="i" >


                    <li>
                        <a href="javascript:;"
                           target=_blank>
                            <div class=pic_add><img alt=图片GG了 data-src="${url.url}"></div>
                            <div class=city_name>${url.pname}</div>
                        </a>
                        <div class=mask_num>
                            <p><span>380</span>家酒店特卖</p></div>
                        <div class=scale_tour><span class=right><b>?</b><em>380</em>起</span>
                            <p>春意撩人 登高踏青赏春色</p></div>

                    </li>
                </c:forEach>
            </ul>
            <ul style="display: none" class=tab_theme>


                <c:forEach begin="24" end="27" items="${list}" var="url" varStatus="i" >


                    <li>
                        <a href="javascript:;"
                           target=_blank>
                            <div class=pic_add><img alt=图片GG了 data-src="${url.url}"></div>
                            <div class=city_name>${url.pname}</div>
                        </a>
                        <div class=mask_num>
                            <p><span>380</span>家酒店特卖</p></div>
                        <div class=scale_tour><span class=right><b>?</b><em>380</em>起</span>
                            <p>春意撩人 登高踏青赏春色</p></div>

                    </li>
                </c:forEach>
            </ul>
            <ul style="display: none" class=tab_theme>
                <c:forEach begin="28" end="31" items="${list}" var="url" varStatus="i" >
                    <li>
                        <a href="javascript:;"
                           target=_blank>
                            <div class=pic_add><img alt=图片GG了 data-src="${url.url}"></div>
                            <div class=city_name>${url.pname}</div>
                        </a>
                        <div class=mask_num>
                            <p><span>380</span>家酒店特卖</p></div>
                        <div class=scale_tour><span class=right><b>?</b><em>380</em>起</span>
                            <p>春意撩人 登高踏青赏春色</p></div>
                    </li>
                </c:forEach>
            </ul>

        </div><!--国际--></div>
</div>
<!--termini CMS节点 end-->
<!--termini end-->
<!--discount start-->
<div class="discount mt20" style="display: none;">
    <div class="discount_wrap wrap1000">
        <div class="title">
            <h2 class="clearfix">
                <a class="pr10">超值特价票</a>
            </h2>
        </div>
        <!--机票 -->
        <div class="discount_tricket mt10" id="discount_plane_tricket">
            <h3 class="clearfix">
                <em class="more right"></em> <a
                    class="pr20 left"
                    href="//flight.elong.com/" target="_blank"><i class="ei_icon icon07 left pr5"></i>机票</a>
                <span csn="BJS" class="on">北京出发</span>
                <span csn="SHA">上海出发</span>
                <span csn="CAN">广州出发</span>
                <span csn="HGH">杭州出发</span>
                <span csn="SZX">深圳出发</span>
                <span csn="CTU">成都出发</span>
            </h3>
            <div class="tab_rebate">
                <ul class="clearfix" id="discount_plane_trickets"></ul>
                <div class="com_loading_gif clearfix" id="flight_loading" style="display:none">
                    <span><i class="com_loading left mr10"></i>数据加载中...</span>
                </div>
            </div>
        </div>
        <!--火车票-->
        <!---->
    </div>
</div>
<!--discount end-->
<!--raiders-->
<div class="raiders mt20">
    <div class="raiders_wrap wrap1000">
        <div class=title>
            <h2><a href="http://trip.elong.com/">旅游指南</a></h2></div>
        <div class="pic_rad pt10 clearfix">
            <div class="pic_shaw right">
                <ul>
                    <li class=right><a href="javascript:;" target=_blank><img
                            data-src="http://47.110.72.50/group1/M00/00/00/rBCVGVxH6DeAVIgwAADH-YsGD98590.jpg"></a>
                        <p><a href="javascript:;" target=_blank>再赴婺源油菜花之约</a></p>
                    </li>
                    <li class=left><a href="javascript:;" target=_blank><img
                            data-src="http://47.110.72.50/group1/M00/00/00/rBCVGVxH6DGAZRFyAACe_wlrQbg945.jpg"></a>
                        <p><a href="javascript:;" target=_blank>全年旅行月历 四季里的12种玩法</a></p></li>
                </ul>
            </div>
            <div class=tab_pic_show>
                <ul>
                    <li><span class=ei_icon></span><a href="javascript:;" target=_blank>烟雨江南醉杭州
                        正是问茶时</a>
                    </li>
                    <li class=on><span class=ei_icon></span><a href="javascript:;"
                                                               target=_blank>无锡鼋头渚的樱舞飞扬</a>
                    </li>
                    <li><span class=ei_icon></span><a href="javascript:;" target=_blank>武大樱花
                        飞扬校园里的青春</a>
                    </li>
                    <li><span class=ei_icon></span><a href="javascript:;" target=_blank>昆明郁金香
                        赏花何必去荷兰</a></li>
                </ul>
                <OL>
                    <li style="display: none"><a href="javascript:;" target=_blank><img
                            alt=烟雨江南醉杭州 正是问茶时 data-src="http://47.110.72.50/group1/M00/00/00/rBCVGVxH5fmAQHD-AADCQX4NqGA621.jpg" width=380
                            height=220></a>
                    </li>
                    <li style="display: list-item"><a href="javascript:;" target=_blank><img
                            alt=无锡鼋头渚的樱舞飞扬 data-src="http://47.110.72.50/group1/M00/00/00/rBCVGVxH5f6ACWclAACru6e6NJg028.jpg" width=380
                            height=220></a>
                    </li>
                    <li style="display: none"><a href="javascript:;" target=_blank><img
                            alt=武大樱花 飞扬校园里的青春 data-src="http://47.110.72.50/group1/M00/00/00/rBCVGVxH5gOAXdXTAACprDAuKoM335.jpg" width=380
                            height=220></a>
                    </li>
                    <li style="display: none"><a href="javascript:;" target=_blank><img
                            alt=昆明郁金香 赏花何必去荷兰 data-src="http://47.110.72.50/group1/M00/00/00/rBCVGVxH5gmARhgeAACPNE4r2GM165.jpg" width=380
                            height=220></a></li>
                </OL>
            </div>
        </div>
    </div>
</div>
<!--raiders-->
<!--coupon-->
<!--coupon-->
<!--why us-->
<!--why us-->
<div class="service_us mt20">
    <div class="service_wrap wrap1000">
        <div class="service_inf">
            <ul class="clearfix">
                <li><i class="ei_icon icon012"></i><span>全球110万家酒店</span></li>
                <li><i class="ei_icon icon013"></i><span>订酒店返现金高达20%</span></li>
                <li><i class="ei_icon icon014"></i><span>国际酒店8折起</span></li>
                <li><i class="ei_icon icon015"></i><span>7×24小时服务</span></li>
            </ul>
        </div>

    </div>
</div>
<!--why us-->
<!--why us-->
<div id="m_contentend" style="z-index: 200;"></div>
<script type="text/javascript">
    var tjObj_rt2 = new Date();
</script>
<div id="m_adsContainer" style="display: none"></div>

<script type="text/javascript">var IndexController = {
    resourceMap: {"search_keywordtip": "\u5982\u4F4D\u7F6E\\\u9152\u5E97\u540D\\\u54C1\u724C"},
    vm: {
        "checkInDateDes": "\u4ECA\u5929",
        "checkInDateStr": "2019-01-16",
        "checkOutDateDes": "\u660E\u5929",
        "checkOutDateStr": "2019-01-17",
        "cityId": "0101",
        "cityName": "\u5317\u4EAC\u5E02",
        "cityNameCn": "\u5317\u4EAC\u5E02",
        "cityNameEn": "Beijing",
        "citySeoNameEn": "beijing",
        "indexCacheMode": 1,
        "login": false,
        "today": "2019-01-16 00:00:00"
    },
    emergencyNotice: null,
    esid: null,
    isLogin: false,
    enabledYesterday: false,
    serverTime: "2019-01-16",
    serverTimeHour: "2019-01-16 11:13:30",
    webHotelTjObj: {
        "st": "1547608411038",
        "pt": "pc-elong-homepage",
        "idc": "idc2",
        "pturl": "http:\/\/www.elong.com\/",
        "et": "show",
        "cid": "622e0365-25d8-4b9c-8c87-41dbbe1b242d"
    },
    needElongRisk: true,
    needCtripRisk: true,
    showLoginOption: true,
    showCommentInfo: true,
    commonStaticPath: "\/\/file.40017.cn\/js40017cnproduct\/cn\/h\/elong_pc\/common\/",
    hotelStaticJsPath: "http:\/\/m.elongstatic.com\/static\/webapp\/pc_static\/pc_hotel\/2018\/09\/11\/views\/",
    hotelStaticCssPath: "http:\/\/m.elongstatic.com\/static\/webapp\/pc_static\/pc_hotel\/2018\/09\/11\/css\/",
    hotelStaticJsPathTmapi: "\/\/file.40017.cn\/js40017cnproduct\/cn\/h\/elong_pc\/2019114_18.12037\/",
    hotelStaticCssPathTmapi: "\/\/file.40017.cn\/css40017cnproduct\/cn\/h\/elong_pc\/2019114_13.12017\/",
    appUrlVersion: "20190115054936",
    urlVersion: null,
    jsPath: "..\/..\/..\/web\/hotel\/views\/",
    basePath: "",
    curDate: "2019-01-16",
    getCmsPicture: function (isElongIndex, callback, E, httpmethod, dataType, timeoute, enabledCache) {
        E.ajax.exec("/ajax/elongIndex/getCmsPicture", {isElongIndex: isElongIndex}, callback, httpmethod, dataType, timeoute, enabledCache);
    },
    getFavHotelInfosByPage: function (callback, E, httpmethod, dataType, timeoute, enabledCache) {
        E.ajax.exec("/ajax/elongIndex/getfavhotelinfosbypage", {}, callback, httpmethod, dataType, timeoute, enabledCache);
    },
    getOrderToReview: function (callback, E, httpmethod, dataType, timeoute, enabledCache) {
        E.ajax.exec("/ajax/elongIndex/getordertoreview", {}, callback, httpmethod, dataType, timeoute, enabledCache);
    },
    getHoteBasicInfo: function (hotelIds, callback, E, httpmethod, dataType, timeoute, enabledCache) {
        E.ajax.exec("/ajax/elongIndex/gethotebasicinfo", {hotelIds: hotelIds}, callback, httpmethod, dataType, timeoute, enabledCache);
    },
    getTrainTickt: function (callback, E, httpmethod, dataType, timeoute, enabledCache) {
        E.ajax.exec("/ajax/elongIndex/getTrainTickt", {}, callback, httpmethod, dataType, timeoute, enabledCache);
    }
};
var pageController = IndexController;</script>
<script type="text/javascript">
    var hotelPageController = pageController;//兼容
    var tj_jsStartTime = new Date().getTime();
</script>
<script type="text/javascript">
    document.getElementsByClassName('weekDesc')[0].innerHTML = pageController.vm.checkInDateDes;
    document.getElementsByClassName('weekDesc')[1].innerHTML = pageController.vm.checkOutDateDes;
</script>
<script type="text/javascript" src="static/js/tjmvt.js"></script>
<script type="text/javascript"
        src="static/js/fingerprint.pc.js"></script>

<script type="text/JavaScript">
    function CNNIC_change(eleId) {
        var str = document.getElementById(eleId).href;
        var str1 = str.substring(0, (str.length - 6));
        str1 = [str1, CNNIC_RndNum(6)].join('');
        document.getElementById(eleId).href = str1;
        //window.open(str1);
    }

    function CNNIC_RndNum(k) {
        var rnd = [""];
        for (var i = k; i != 0; i--) {
            rnd.push(Math.floor(Math.random() * 10));
        }
        return rnd.join('');
    }
</script>

<script type="text/javascript">var trackingOBJ = {
    "oOrderFromId": "50",
    "oCityId": "0101",
    "oPageName": "ElongIndexPage",
    "oClientGuid": "622e0365-25d8-4b9c-8c87-41dbbe1b242d",
    "oServerTime": "2019-01-16 11:13:30"
}; </script>
<script type="text/javascript"
        src="static/js/s_code.js"></script>
<script language="JavaScript">  var s_code = s.t();
if (s_code) document.write(s_code);</script>
<script type="text/javascript">var tjObj = {"channel": "home", "orderfrom": "50", "pagetype": "ElongIndexPage"}</script>
<script type="text/javascript">var TJObject = {
    "pt": "pc-elong-homepage",
    "orderfrom": 50,
    "cip": "124.160.17.98",
    "pturl": "http://www.elong.com/",
    "rfurl": "http://www.elong.com/",
    "sid": "5e3817cc-d068-42bc-8706-cd3ca37a3fc5",
    "biz": "pc_hotel",
    "id": "36531a76-7213-4cc4-bd3f-66896103e00b",
    "st": 1547608411040,
    "bns": 4,
    "idc": "idc2",
    "mvt": "[{\"vid\":462,\"val\":\"0\",\"eid\":376},{\"vid\":186,\"val\":\"1\",\"eid\":197},{\"vid\":366,\"val\":\"0\",\"eid\":376}]",
    "ct": 2,
    "opens": 1,
    "lg": "zh-CN",
    "cid": "622e0365-25d8-4b9c-8c87-41dbbe1b242d"
}</script>
<script type="text/javascript" src="static/js/netextend.js"></script>
<script type="text/javascript">
    if (TJObject && TJObject.pt) {
        TJObject.et = "show";
        TJObject.st = new Date().getTime();
        tjMVT.setData(TJObject);
    } else if (hotelPageController && hotelPageController.webHotelTjObj) {
        tjMVT.setData(hotelPageController.webHotelTjObj);
    }

</script>


<script data-main='//file.40017.cn/js40017cnproduct/cn/h/elong_pc/2019114_18.12037/elong_index/elong_index_cn.js?20190115054936'
        src='static/js/require.js'></script>

<script>require(['http://www.elongstatic.com/ihotelStatic/js/common_index.js'], function () {
})</script>
<div class="clear"></div>
</body>
</html>
