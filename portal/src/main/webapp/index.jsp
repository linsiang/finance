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
    <title>一页书诗词网</title>

    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link rel="stylesheet" href="static/css/bootstrap.min.css" type="text/css"/>

    <link rel="icon"
          href="static/img/lqz.jpg"
          type="image/x-icon"/>
    <meta name="keywords" content=""/>

    <script type="text/javascript">
        var tjObj_rt = new Date();
    </script>
    <link rel="stylesheet" href="static/css/font-awesome.min.css" type="text/css"/>

    <link rel="stylesheet" href="static/css/v3-framework.css" type="text/css"/>
    <link rel="stylesheet" href="static/css/v3-common.css" type="text/css"/>
    <link rel="stylesheet" href="static/css/v3-site.css" type="text/css"/>

    <script src="static/js/zcms_require.js" contextpath="http://www.zgshige.com/zcms/"></script>
    <script src="static/js/bootstrap.min.js"></script>
    <script src="static/js/hammer.min.js"></script>


    <link rel="stylesheet" type="text/css" href="static/css/responsiveslides.css"/>

    <script src="static/js/bootstrap-hover-dropdown.min.js"></script>
    <script src="static/js/responsiveslides.js"></script>

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



<div class="container">
    <div class="row m-t-md">


        <div class="row m-t-md">
            <div class="pull-left m-l-sm">
                <img src="static/img/onePage.png"/>

            </div>
            <div class="pull-right m-t-sm m-r-md visible-xs">
                <a class="btn btn-default" onclick="$('#catalogNav').toggleClass('hidden')" href="#;"><span
                        class="fa font14">栏目</span> </a>
            </div>
            <div class="pull-left hidden-xs hidden-sm m-md p-l-sm">
                <img src="static/picture/slogen.png">

            </div>
         <%--   <div class="pull-left m-l-sm">
                <img src="static/img/banner_right.jpg" width="251px" height="60px"/>
            </div>--%>
            <form action="test" method="post">
                <div style="max-width: 320px" class="text-center search input-group pull-left m-t-sm m-l-sm p-t-xs">
                    <input type="text" class="form-control search-query" name="author" placeholder="请输入关键字"/>
                    <span
                            class="input-group-btn">
                    <button class="btn btn-primary search-submit"
                            style="background-color:#ddd; border-color:#ddd; color:#333!important;" type="submit"> <span
                            class="fa fa-search"></span>&nbsp;搜索</button>
                </span>
                </div>
            </form>

          <c:if test="${user.uname==null}">
              <div class="pull-right hidden-xs hidden-sm m-md p-l-sm" >
                  <p >
                      <a href="login"> <button type="button" class="btn btn-default ">登录</button></a>
                      <a href="toRegister"><button type="button" class="btn btn-default ">注册</button></a>
                  </p>
              </div>
          </c:if>

          <c:if test="${user.uname!=null}">
              <div class="pull-right" style="color: #7e3d3c;font-size: x-large">
                  <p>
                    欢迎你:${user.uname}

                       <a href="loginout"><button type="button" class="btn btn-default ">退出</button></a>
                   </p>
              </div>

          </c:if>



        </div>
    </div>
</div>

</div>

<div class="raiders mt20">
    <div class="raiders_wrap wrap1000">
        <div class=title>
            <h2><a href="JavaScript:;">诗词专题</a></h2></div>
        <div class="pic_rad pt10 clearfix">
            <div class="pic_shaw right">
                <ul>
                    <li class=right><a href="javascript:;" target=_blank><img
                            data-src="static\img\timg.gif"></a>
                        <p><a href="javascript:;" target=_blank>相见时难别亦难</a></p>
                    </li>
                    <li class=left><a href="javascript:;" target=_blank><img
                            data-src="static/img/junren.png"></a>
                        <p><a href="javascript:;" target=_blank>玉楼春 · 军人三叹</a></p></li>
                </ul>
            </div>
            <div class=tab_pic_show>
                <ul>
                    <li><span ></span><a href="javascript:;" target=_blank>意琦行：
                        亦狂亦侠亦超尘</a>
                    </li>
                    <li class=on><span class=ei_icon></span><a href="javascript:;"
                                                               target=_blank>又是一年樱花盛开</a>
                    </li>
                    <li><span class=ei_icon></span><a href="javascript:;" target=_blank>古风原创-唯美意境</a>
                    </li>
                    <li><span class=ei_icon></span><a href="javascript:;" target=_blank>出淤泥而不染，荷花之乡</a></li>
                </ul>
                <OL>
                    <li style="display: none"><a href="javascript:;" target=_blank><img
                            alt=亦狂亦侠亦超尘 data-src="static/img/yiqixing.png" width=380
                            height=220></a>
                    </li>
                    <li style="display: list-item"><a href="javascript:;" target=_blank><img
                            alt=又是一年樱花盛开 data-src="http://47.110.72.50/group1/M00/00/00/rBCVGVxH5f6ACWclAACru6e6NJg028.jpg" width=380
                            height=220></a>
                    </li>
                    <li style="display: none"><a href="javascript:;" target=_blank><img
                            alt=古风原创-唯美意境 data-src="static/img/gufeng.png" width=380
                            height=220></a>
                    </li>
                    <li style="display: none"><a href="javascript:;" target=_blank><img
                            alt=出淤泥而不染，荷花之乡 data-src="static/img/hehua.gif" width=380
                            height=220></a></li>
                </OL>
            </div>
        </div>
    </div>
</div>
<!--no record end-->
<!--fold start -->
<!--fold start-->



<div class="raiders mt20">
    <div class="raiders_wrap wrap1000">
        <div class=title>
            <h2><a href="JavaScript:;">热门诗人</a></h2></div>
    </div>
</div>
<div class="fold mt20 mb20">
    <div class="fold_wrap">

        <ul class="clearfix" id="sm">
            <li class="active">
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>白居易</h4></div>
                    <div class="pic_auto pic_auto1"></div>

                </a>
            </li>
            <li>
                <a href="javascript:;" target="_blank">
                    <div class="mask_b">
                        <h4>杜甫</h4></div>
                    <div class="pic_auto pic_auto2"></div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>李白</h4></div>
                    <div class="pic_auto pic_auto3"></div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>李清照</h4></div>
                    <div class="pic_auto pic_auto4"></div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>陆游</h4></div>
                    <div class="pic_auto pic_auto5"></div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>苏轼</h4></div>
                    <div class="pic_auto pic_auto6"></div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" target="_blank">
                    <div class="mask_b">
                        <h4>王维</h4></div>
                    <div class="pic_auto pic_auto7"></div>
                </a>
            </li>
        </ul>
    </div>
</div>

<!--raiders-->



<div class="jumbotron" style="background-image: url('static/img/002.png') ;width: 1300px">

           <h1 align="center" style="font-family: 华文行楷">中华诗词</h1>
</div>


<div id="m_contentend" style="z-index: 200;"></div>

<div class="container-fluid bg-copyright m-t-lg">
    <div class="container">
        <div class="row">
            <div class="col-md-8 p-lg">
                <h4 class="text-white m-b-md">版权信息</h4>
                <p>本站内容为赣南师范大学指导下的学生毕设作品</p>
                <p>Copyright &copy; 2018-2019 全景统计</p>
            </div>
            <div class="col-md-4 p-lg">
                <h4 class="text-white m-b-md"><a href="http://www.zgshige.com/c/2015-06-08/503919.shtml" style="color:#fff;">关于我们</a></h4>
                <div class="media">
                    <div class="media-left">
                        <img src="static/picture/home-icon.png" alt="关于我们">
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">地址</h4>
                        <p>江西省赣州市</p>
                        <p>赣南师范大学</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>




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
<script data-main='//file.40017.cn/js40017cnproduct/cn/h/elong_pc/2019114_18.12037/elong_index/elong_index_cn.js?20190115054936'
        src='static/js/require.js'></script>

</body>
</html>
