<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <!--包含通用样式-->

    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link rel="stylesheet" href="static/css/bootstrap.min.css" type="text/css"/>

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
    <title>诗词网</title>

<body class="bg-white">

<div class="container">
    <div class="row m-t-md">


        <div class="row m-t-md">
            <div class="pull-left m-l-sm">
                <a href="http://www.zgshige.com/"><img src="static/picture/logo_20181219.png"/></a>
            </div>
            <div class="pull-right m-t-sm m-r-md visible-xs">
                <a class="btn btn-default" onclick="$('#catalogNav').toggleClass('hidden')" href="#;"><span
                        class="fa font14">栏目</span> </a>
            </div>
            <div class="pull-left hidden-xs hidden-sm m-md p-l-sm">
                <img src="static/picture/slogen.png">
            </div>

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
        </div>
    </div>
</div>
</body>
</html>
