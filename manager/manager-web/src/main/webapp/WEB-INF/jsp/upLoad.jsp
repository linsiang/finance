<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>图片上传</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/weadmin.css">
</head>
<body>
<%--存放富文本的容器--%>
<textarea id="demo" style="display: none;"></textarea>

<script type="text/javascript" src="${pageContext.request.contextPath}/lib/layui/layui.js" charset="utf-8"></script>
<script>
    layui.use('layedit',function(){
        //创建变量
        var layedit = layui.layedit;
        layedit.build('demo',{
            uploadImage:{
                url:'upload',
                type:'post'
            }
        });
    });
</script>
</body>
</html>
