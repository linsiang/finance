<%--
  Created by IntelliJ IDEA.
  User: landmyp
  Date: 19-1-17
  Time: 下午2:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js"></script>
</head>
<body>

<script>
    $.ajax({
        url:'index'
    });
    // 拿到数据并将数据发送到index.jsp后跳转到该页面
    window.location="index"
</script>
</body>
</html>
