<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
              <c:forEach items="${picList}" var="list" >
                  <h1>${list.psrc}</h1>
                  <img src="${list.psrc}" style="width: 400px;height: 300px">
              </c:forEach>
</body>
</html>
