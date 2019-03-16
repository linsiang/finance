
(function () {
	var _zcms_ad_d,_zcms_ad_s,_zcms_ad_c,_zcms_ad_l,_zcms_ad_t,_zcms_ad_s,_zcms_ad_i,_zcms_ad_p;
	var _zcms_ad_st=new Date().getTime();
	var _zcms_ad_stat = function(param){
		var p = {};
		if(param){
			var arr = param.split("&");
			for(var i=0;i<arr.length;i++){
				if(arr[i]){
					var arr2 = arr[i].split("=");
					if(arr2[0]){
						p[arr2[0]] = arr2[1];
					}
				}
			}
		}
		_zcms_ad_d = p["Dest"];
		_zcms_ad_s = p["SiteID"];
		_zcms_ad_c = p["CatalogInnerCode"];
		_zcms_ad_l = p["LeafID"];
		_zcms_ad_t = p["Type"];
		_zcms_ad_i = p["ADID"];		
		_zcms_ad_p = p["ADPID"];
		
		p["sr"] = screen.width+"x"+screen.height;
		p["cd"] = screen.colorDepth;
		p["fv"] = _zcms_ad_stat.fv();
		p["ce"] = _zcms_ad_stat.ce();	
		p["je"] = _zcms_ad_stat.je();
		p["la"] = navigator.language?navigator.language:navigator.browserLanguage;
		p["la"] = p["la"]?p["la"]:navigator.systemLanguage;
		p["cs"] = document.charset;
		
		p["vq"] = _zcms_ad_stat.vq();	
		p["Referer"] = _zcms_ad_stat.eu(document.referrer);
		p["URL"] = _zcms_ad_stat.eu(location.href);
		p["Host"] = location.host;
		p["Event"] = "Show";
		var dest = _zcms_ad_d;
		p["Dest"] = false;
		dest = dest+"?"+_zcms_ad_stat.mq(p);
		
		var s = document.createElement("script");
		s.src = dest;
		(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(s);
		
		return dest;
	};

	_zcms_ad_stat.eu =  function(str){
		return encodeURI(str).replace(/=/g,"%3D").replace(/\+/g,"%2B").replace(/\?/g,"%3F").replace(/\&/g,"%26").replace(/\#/g,"%23");
	}

	_zcms_ad_stat.mq = function(map){
		var sb = [];
		for(var prop in map){
			if(map[prop]){
				sb.push(prop+"="+map[prop]);
			}
		}	
		return sb.join("&");
	}

	_zcms_ad_stat.trim = function(str){
		return str.replace(/(^\s*)|(\s*$)/g,"");
	}


	_zcms_ad_stat.je = function(){
		var je="";
		var n=navigator;
		je = n.javaEnabled()?1:0;
		return je;
	} 

	_zcms_ad_stat.fv = function(){
		var f="",n=navigator;	
		if(n.plugins && n.plugins.length){
			for(var ii=0;ii<n.plugins.length;ii++){
				if(n.plugins[ii].name.indexOf('Shockwave Flash')!=-1){
					f=n.plugins[ii].description.split('Shockwave Flash ')[1];
					break;
				}
			}
		}else if(window.ActiveXObject){
			for(var ii=10;ii>=2;ii--){
				try{
					var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");
					if(fl){
						f=ii + '.0'; break;
					}
				}catch(e){} 
			} 
		}
		return f;
	}

	_zcms_ad_stat.ce = function(){
		var c_en = (navigator.cookieEnabled)? 1 : 0;
		return c_en;
	}

	_zcms_ad_stat.vq = function(){
	  var cs = document.cookie.split("; ");
	  var name = _zcms_ad_s+"_vq";
	  var vq = 1;
	  for(i=0; i<cs.length; i++){
		  var arr = cs[i].split("=");
		  var n = _zcms_ad_stat.trim(arr[0]);
		  var v = arr[1]?_zcms_ad_stat.trim(arr[1]):"";
		  if(n==name){
		  	vq = parseInt(v)+1;
		  	break;
		  }
		}
		var expires = new Date(new Date().getTime()+365*10*24*60*60*1000).toGMTString();
		var cv = name+"="+vq+";expires="+expires+";path=/;";
		document.cookie = cv;
		return vq;
	}
	
	function _zcms_ad_bu(param){
		var p = {};
		if(param){
			var arr = param.split("&");
			for(var i=0;i<arr.length;i++){
				if(arr[i]){
					var arr2 = arr[i].split("=");
					if(arr2[0]){
						p[arr2[0]] = arr2[1];
					}
				}
			}
		}
		if(_zcms_ad_d){ 
			p["Event"] = "Click";
			p["LeafID"] = p["ADID"];
			p["SiteID"] = _zcms_ad_s;
			p["Type"] = _zcms_ad_t;
			p["ADPID"] = _zcms_ad_p;
			p["URL"] = _zcms_ad_stat.eu(location.href);
			p["vq"] = _zcms_ad_stat.vq();	
			var dest = _zcms_ad_d+"?"+_zcms_ad_stat.mq(p);
			return dest
		}
	}
	

	
	
	function ZCMSAD(PositionID) {
	  this.ID        = PositionID;
	  this.PosID  = 0; 
	  this.ADID		  = 0;
	  this.ADType	  = "";
	  this.ADName	  = "";
	  this.ADContent = "";
	  this.PaddingLeft = 0;
	  this.PaddingTop  = 0;
	  this.Width = 0;
	  this.Height = 0;
	  this.IsHitCount = "N";
	  this.URL = "";
	  this.SiteID = 0;
	  this.ShowAD  = showADContent;
	}
	
	function loadJs(url, onsuccess,loadDefault) {
		var head = document.getElementsByTagName('head')[0] || document.documentElement,
			script = document.createElement('script'),
			done = false;
		script.src = url;

		script.onerror = script.onload = script.onreadystatechange = function() {
			if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
				done = true;
				script.onerror = script.onload = script.onreadystatechange = null;
				head.removeChild(script);
				
				//处理返回结果（可能的结果：未请求到数据,返回无效数据，返回有效数据）
				//如果加载失败，在IE中readyState=="loaded",所以只能通过检测所需的数据是否已经存在来判断是否加载成功。				
				var advjson=getWeightRandom(window['advjson329']);
				
				if(!advjson){//未加载成功
					return;
				}else if(advjson.errormsg){//返回无效数据
					if(advjson.errormsg.length > 0 && console && console.log)console.log(advjson.errormsg);
					return;
				}else if(advjson.ID && onsuccess){//返回无效数据				
					onsuccess(advjson);				
				}					
			}
		};
		head.appendChild(script);
	}

	function ggClick(SiteID,URL,ADID,PosID,ADURL,isSelf) {
		var dest = _zcms_ad_bu("ADID="+ADID);
		loadJs(dest,function(){
			if(isSelf) location=ADURL;
		});
	}
	
	var randomFuncName='ggClick'+(+new Date);
	window[randomFuncName]=ggClick;

	function showADContent() {
	  var content = this.ADContent;
	  var str = "<div id='ZCMSAP_"+this.PosID+"_Box' style='width:"+this.Width+"px; height:"+this.Height+"px;border:1px solid #E1E1E1;overflow:hidden;position:relative;text-align:left;'>";
	  var AD = eval('('+content+')');
	  if (this.ADType == "images") {
		  for(var i=0;i<AD.ADImage.length;i++){
			  str += "<a href='"+AD.ADImage[i].imgADLinkUrl+"' onClick='"+randomFuncName+"(\""+this.SiteID+"\",\""+this.URL+"\",\""+AD.ADImage[i].imgID+"\",\""+this.PosID+"\",\""+AD.ADImage[i].imgADLinkUrl+(AD.imgADLinkTarget == "Old" ? "\",true" : "\",false") +"); return "+((AD.imgADLinkTarget == "Old") ? "false" : "true") + ";'  target='"+((AD.ADImage[i].imgADLinkTarget == "Old") ? "_self" : "_blank") + "'>";
			  str += "<img alt='"+AD.ADImage[i].imgADAlt+"' title='"+AD.ADImage[i].imgADAlt+"' src='"+AD.ADImage[i].ImgPath+"' width='"+this.Width+"' height='"+this.Height+"' style='position:absolute;border:0px;background:#fff;'/>";
		  	  str += "</a>";
		  }
	  }
	  str += "<div id='ZCMSAP_"+this.PosID+"_Tip' style='width:"+this.Width+"px; height:"+this.Height+"px;position:absolute;height:20px;padding:5px;font-family:Arial;color:#fff;font-weight:bold;bottom:-1;left:0;z-index:999997;filter:alpha(opacity=60);opacity:0.6;background-color:#333333'></div>"
	  str += "</div>";
	  //document.write(str);
	  //$("#advertisejs_"+this.PosID).after(str);
	  var div=document.createElement('div');
	  div.innerHTML=str;
	  var adNode=document.getElementById("apjs_"+this.PosID);
	  adNode.parentNode.insertBefore(div.firstChild,adNode.nextSibling);
	  div=null;
	  //
	}
	
	var ldh={
		$:function(o){return typeof o=="string"?document.getElementById(o):o},
		$$:function (o,p){return (p==undefined?document:this.$(p)).getElementsByTagName(o)},
		on:function(o,type,fn){o.attachEvent?o.attachEvent('on'+type,function(){fn.call(o)}):o.addEventListener(type,fn,false);},
		opacity:function(who,x){
			who=this.$(who);
			if(x==undefined){
				if( !!window.ActiveXObject && who.filters){
					return who.filters.alpha?(who.filters.alpha.opacity/100):1;
				}else{
					var op=who.style.opacity;
					return isNaN(op)?1:op*1;
				}
			}
			who.style.filter="alpha(opacity="+parseInt(x*100)+")";
			who.style.opacity=x;
			return this;
		},
		fadeTo:function(who,x,fn){
			who=this.$(who);
			var fm=this.opacity(who),m=1,r=Math.floor,s=2,v;
			if(fm>x){m=-1;r=Math.ceil;s=1};
			var iFx=function(){return fm=r((fm+m*0.02*s)*100)/100};
			clearInterval(who.opacityTimer);
			who.opacityTimer=setInterval(function (){
				var v=Math.max(0,Math.min(x,iFx()));
				ldh.opacity(who,v);
				if(v==x){
					fn&&fn.call(who);
					clearInterval(who.opacityTimer);
				};
			},13);return this;
		},
		fadeOut:function(who,fn){return this.fadeTo(who,0,fn)},
		fadeIn:function(who,fn){return this.fadeTo(who,1,fn)},
		move:function(who,attr,val,s,fn){
			who=this.$(who);
			var fm=parseInt(who.style[attr])||0;
			var iFx=this.fx(fm,val,s);
			clearInterval(who.moveTimer);
			who.moveTimer=setInterval(function (){
				var v=iFx();
				who.style[attr]=v+'px';
				if(v==val){
					fn&&fn.call(who);
					clearInterval(who.moveTimer);
				};
			},13);return this;
		},
		fx:function(form,to,s){
			var m=Math[form<to?'ceil':'floor'];
			return function (){return form+=m((to-form)*(s||0.13))};
		}
	};
	try{document.execCommand("BackgroundImageCache", false, true);}catch(e){};//for IE6
	var shower={
		init:function(setting){
			//如果数据没准备好，就延迟
			if(!dataLoaded){				
				setTimeout(function(){return shower.init.call(shower,setting);},100);			
				return;
			}
			var ini={box:ldh.$(setting.box),tip:ldh.$(setting.tip),index:0,z:99,list:[]};
			for(var Id in ini)this[Id]=ini[Id];
			var imgs=ldh.$$('img',this.box);
			for (var i=0;i<imgs.length;++i ) {
				this.list.push(imgs[i]);
				imgs[i].style.zIndex=i;
			};
			this.tip.innerHTML=imgs[0].getAttribute('alt');
			this.hideTip();
		},
		show:function(){
			var p2=this.list[this.index++];
			if(this.index==this.list.length)this.index=0;
			ldh.opacity(p2,0);
			p2.style.zIndex=++this.z;
			ldh.fadeIn(p2,function (){
				shower.tip.innerHTML=p2.getAttribute('alt');
				ldh.move(shower.tip,'bottom',-1,0.1,function (){
						setTimeout(function(){shower.hideTip()},4000);
				}).opacity(shower.tip,0.6);
			})
		},
		hideTip:function(){
			shower.show();
			ldh.move(this.tip,'bottom',-100,0.05);
		}
	}
	
	function displayAlt(Content,TipID){
		 var AD = eval('('+Content+')');
		 var flag = true;
		 for(var i=0;i<AD.ADImage.length;i++){
			 if(AD.ADImage[i].showAlt=="N"){
				 flag = false;
			 }
		 }
		 if(!flag){
			 document.getElementById(TipID).style.display="none";
		 }
	}

	var kw = "";
	if("undefined" != typeof zcmsad_params_keywords) {
		kw = encodeURI(encodeURI(zcmsad_params_keywords));
	}
	var dataLoaded=false;
	var _path="http://www.zgshige.com/zcms/advertise/dataaction?pid=329&type=Weight&keywords=" + kw;
	//专题编辑页面要避免使用缓存页面
	if(/special\/designer\.zhtml/.test(location.href)){
		_path=_path+'&'+(+new Date());
	}
	function getWeightRandom(advs) {
		if(Object.prototype.toString.apply(advs) !== '[object Array]'){
			return advs;
		}
		var seed = 0;
		var isSameWeight = true;
		for (var i=0;i<advs.length;i++) {
			if(typeof advs[i].Weight=='number'){
				seed += advs[i].Weight;
			}
			if(i>0 && advs[i].Weight !== advs[i-1].Weight){
				isSameWeight = false;
			}
		}
		var random = Math.round(Math.random() * seed);
		if(isSameWeight){
			return advs[Math.floor(Math.random()*advs.length)];
		}
		var curWt = 0;
		var result = null;
		for (var i=0;i<advs.length;i++) {
			if(typeof advs[i].Weight=='number'){
				curWt += advs[i].Weight;
				if (curWt >= random) {
					result = advs[i];
					break;
				}
			}
		}
		return result;
	}
	function onSuccess(advjson){
		if(typeof window['advjson329'] != 'undefined') {
			if(advjson.errormsg && advjson.errormsg.length > 0) {
				if(window.console && console.log)console.log(advjson.errormsg);
				return;
			}
			var cmsAD = new ZCMSAD('cmsAD_329'); 
			cmsAD.PosID = 329; 
			cmsAD.SiteID = 122; 
			cmsAD.Width = 1170; 
			cmsAD.Height = 110; 
			cmsAD.ADID = advjson.ID; 
			cmsAD.ADType = advjson.AdType; 
			cmsAD.ADName = advjson.AdName; 
			cmsAD.ADContent = advjson.AdContent; 
			cmsAD.URL = "http://www.zgshige.com/zcms/advertise/hitcount";
			cmsAD.ShowAD();
			_zcms_ad_stat("SiteID="+cmsAD.SiteID+"&Type=AD&ADPID="+cmsAD.PosID+"&ADID="+cmsAD.ADID+"&Dest="+cmsAD.URL)
			displayAlt(cmsAD.ADContent,'ZCMSAP_329_Tip');
			dataLoaded=true;
		}
	}
	if(kw == ""){
		advjson329=[{"ID":346,"PositionID":329,"PositionCode":"sygg2","SiteID":122,"ResourceID":0,"AdName":"全国诗歌征文大赛 参赛作品大全","AdType":"images","AdContent":"{\"ADImage\":[{\"imgID\":346,\"imgADLinkUrl\":\"http://www.zgshige.com/zwhd/\",\"imgADAlt\":\"\",\"ImgPath\":\"http://www.zgshige.com/upload/resources/image/2017/01/23/142462.jpg\",\"imgADLinkTarget\":\"New\",\"showAlt\":\"N\"},{\"imgID\":327,\"imgADLinkUrl\":\"http://www.zgshige.com/xmrpd/gdsr/sgdt-ahsr.shtml\",\"imgADAlt\":\"\",\"ImgPath\":\"http://www.zgshige.com/upload/resources/image/2018/03/22/232729.jpg\",\"imgADLinkTarget\":\"New\",\"showAlt\":\"N\"},{\"imgID\":326,\"imgADLinkUrl\":\"http://www.zgshige.com/c/2016-06-16/1383717.shtml\",\"imgADAlt\":\"\",\"ImgPath\":\"http://www.zgshige.com/upload/resources/image/2016/11/22/126888.jpg\",\"imgADLinkTarget\":\"New\",\"showAlt\":\"N\"},{\"imgID\":331,\"imgADLinkUrl\":\"http://www.zgshige.com/xmrpd/gdsr/hnsrzt.shtml\",\"imgADAlt\":\"\",\"ImgPath\":\"http://www.zgshige.com/upload/resources/image/2016/11/22/126886.jpg\",\"imgADLinkTarget\":\"New\",\"showAlt\":\"N\"},{\"imgID\":333,\"imgADLinkUrl\":\"http://www.zgshige.com/c/2016-06-03/1320003.shtml\",\"imgADAlt\":\"\",\"ImgPath\":\"http://www.zgshige.com/upload/resources/image/2016/11/22/126887.jpg\",\"imgADLinkTarget\":\"New\",\"showAlt\":\"N\"}]}","Weight":0,"Keywords":"","OrderFlag":146406084332502,"IsHitCount":"N","HitCount":4804,"StickTime":0,"IsOpen":"Y","StartTime":"1485158566000","EndTime":"32503651199000","Memo":null,"LinkTarget":"New","Prop1":null,"Prop2":null,"Prop3":null,"Prop4":null,"AddUser":"nichunhua","AddTime":"1485158566000","ModifyUser":null,"ModifyTime":null}];
		onSuccess(getWeightRandom(advjson329));
	}else{
		loadJs(_path, onSuccess,true);
	}	
	ldh.on(window,'load',function (){
		shower.init({box:'ZCMSAP_329_Box',tip:'ZCMSAP_329_Tip'});
	});

})();