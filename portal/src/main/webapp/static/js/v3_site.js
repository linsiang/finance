//站点自定义javascript放到本文件
/**
 * 代理监听类，拦截元素所有的绑定的eventType事件监听，使用proxyHandler执行完之后在callback中执行
 * (仅能拦截使用JQuery bind的事件监听)
 * @param {DOMElement} ele 处理的元素
 * @param {String} eventType 拦截的事件类型
 * @param {Function} proxyHandler 代理方法,第一个接收参数为回调其他监听handler执行方法
 * @author cs@zving.com
 */
var jqProxyHandler=function(ele,eventType,proxyHandler){
	var events=$._data(ele, 'events');//JQuery1.8 and 1.8+
	//var events=$(ele).data('events');//JQuery1.8-
	var handlers=[];
	if(events&&events[eventType]){
		var bindFuns=events[eventType];
		for(var i=0;i<bindFuns.length;i++){
			handlers.push(bindFuns[i].handler);
		}
	}
	$(ele).unbind(eventType);
	$(ele).bind(eventType,function(proxyHandler,handlers){
		return function(){
			var me=this;
			proxyHandler(function(){
				for(var i=0;i<handlers.length;i++){
					handlers[i].call(me);
				}
			});
		}
	}(proxyHandler,handlers));
}
/**
 * SNS退出登陆方法，退出后执行callback
 */
var snsLogout=function(callback){
	var SNSURL = "http://www.zgshige.com/sns/";
	var url = SNSURL + "doLogout?" + $.param({
		noRedirect : true
	});
	var snsIframe = document.createElement("iframe");
	$(snsIframe).bind("load", function(callback, snsIframe) {
		return function(e) {
			this.loadTimes = (this.loadTimes || 0) + 1;
			//console.log("remove sns iframe");
			document.body.removeChild(snsIframe);
			callback();
			//在onload中执行监听回调
		}
	}(callback, snsIframe));
	snsIframe.style.display = "none";
	snsIframe.src = url;
	document.body.appendChild(snsIframe);
};
$(function() {
	//拦截并代理所有退出按钮click事件，先执行SNS退出
	$(".member-logout").each(function() {
		jqProxyHandler(this,"click",snsLogout);
	});
});