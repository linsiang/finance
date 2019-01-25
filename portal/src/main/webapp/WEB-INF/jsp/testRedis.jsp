
<%--
  Created by IntelliJ IDEA.
  User: lsyp
  Date: 2019/1/24
  Time: 16:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <script src="http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js"></script>
</head>
<body>
         <c:forEach  items="${reidsList}" var="url">
             <img src="${url.url}" style="width: 200px;height: 200px"><br>
         </c:forEach><br>

            <c:forEach items="${reidsList1}" var="fuck">
          <img src="${fuck.url}" height="200px" width="300px">
  </c:forEach>

</html>
