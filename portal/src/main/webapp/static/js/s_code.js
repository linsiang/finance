function getKeyword(refUrl, keys) {
	var bs;
	var p = refUrl.indexOf('?');
	var params = refUrl.substr(p+1).split('&');
	for(var i=0,l=params.length;i<l;i++){
		if(params[i].indexOf(keys)+1){
			return params[i].split("=")[1];
		}
	}
	return "null";
}
/**customerevent**/
var checkedVouch_OM;
function debug_OM(err_OM)
{
	//alert(err_OM);
}
function getElongPageVal()
{
	var oCurrentPageIndexVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oCurrentPageIndex) != "undefined")
	{
		oCurrentPageIndexVal = trackingOBJ.oCurrentPageIndex;
	}
	return oCurrentPageIndexVal;
}
function BindCustomerEvent_OM(pageType_OM){
	try{
		switch(pageType_OM)
		{
			// case "hotel home page":
				// $("#poiDiv").bind("click", this.OnHotelHomePoiClick_OM.bindAsEventListener(this));
				// $("#moreseasoncity").bind("click", this.OnHotelHomeHotCityMoreClick_OM.bindAsEventListener(this));
				// $("div.cityBox").bind("click", this.OnHotelHomeHotCityClick_OM.bindAsEventListener(this));
				// break;
			case "elong home page":
				// $("footer a").bind("click", this.OnElongHompClick_OM.bindAsEventListener(this));
				// $("div.bottomBanner a").bind("click", this.OnElongHompClick_OM.bindAsEventListener(this));
				break;
			// case "hotel noncoop page":
				// $("div.recOther a").bind("click", this.OnHotelNoncoopClick_OM.bindAsEventListener(this));
				// $("#m_search").bind("click", this.OnHotelNoncoopClick_OM.bindAsEventListener(this));
				// $("#NearHotels").live("click", this.OnHotelNoncoopClick_OM.bindAsEventListener(this));
				break;
			case "hotel list page":
				// $("div.wBox li").bind("click.scode", this.OnListFilter_OM.bindAsEventListener(this));

				// hotel list
				// $("#hotelList").live("click", this.OnHotelListClick_OM.bindAsEventListener(this));

				// iPad hotel list
				// $("#showSearchpop").bind("click", this.OnHotelListiPadClick_OM.bindAsEventListener(this));
				// $("#sort").bind("click", this.OnHotelListiPadClick_OM.bindAsEventListener(this));
				// $("#locationArea").bind("click", this.OnHotelListiPadClick_OM.bindAsEventListener(this));
				// $("#price").bind("click", this.OnHotelListiPadClick_OM.bindAsEventListener(this));
				// $("#brand").bind("click", this.OnHotelListiPadClick_OM.bindAsEventListener(this));
				// $("#starLev").bind("click", this.OnHotelListiPadClick_OM.bindAsEventListener(this));

				// coupon
				// $("#CouponCMS").bind("click", this.OnHotelListCouponClick_OM.bindAsEventListener(this));

				// hide filters
				// $("div.hidefilters a").bind("click", this.OnHotelListResearchClick_OM.bindAsEventListener(this));

				// dajiadouzhunaer
				// $("#dvLookWhere").bind("click", this.OnHotelListZhunaerClick_OM.bindAsEventListener(this));

				// fav
				// $(".col").bind("click", this.OnHotelListFavClick_OM.bindAsEventListener(this));
				break;
			case "hotel map page":
				// $("#divSearchBox li").bind("click", this.OnHotelMapClick_OM.bindAsEventListener(this));
				// $("#hotelMapLeft li").bind("click", this.OnHotelMapClick_OM.bindAsEventListener(this));
				// $("#selectMenu").bind("click", this.OnHotelMapFilterClick_OM.bindAsEventListener(this));
				// $("#divAdvanceFilter label").bind("click", this.OnHotelMapClick_OM.bindAsEventListener(this));
				// $("#Periphery li").bind("click", this.OnHotelMapClick_OM.bindAsEventListener(this));
				break;
			case "hotel detail page 20120906":
				// new detail page
				// $("#rightCommentDiv").bind("click", this.OnHotelDetailSidebarClick_OM.bindAsEventListener(this));
				// $("#imageMapShow").bind("click", this.OnHotelDetailSidebarClick_OM.bindAsEventListener(this));
				// $("#detailTab li").bind("click", this.OnHotelDetailTabsClick_OM.bindAsEventListener(this));
				// $("#tabButton a").bind("click", this.OnHotelDetailTabsClick_OM.bindAsEventListener(this));
				// $("#keywordsDiv").bind("click", this.OnHotelDetailReviewClick_OM.bindAsEventListener(this));
				// $("a.csDiv").live("click", this.OnHotelDetailSidebarClick_OM.bindAsEventListener(this));

				// old detail page
				// $("div.review").bind("click", this.OnHotelDetailSidebarClick_OM.bindAsEventListener(this));
				// $("#imageMapDiv").bind("click", this.OnHotelDetailSidebarClick_OM.bindAsEventListener(this));
				// $("ul.tabs li").bind("click", this.OnHotelDetailTabsClick_OM.bindAsEventListener(this));
				// $("div.cs").live("click", this.OnHotelDetailSidebarClick_OM.bindAsEventListener(this));

				// general
				// $("ul.hotelName a").bind("click", this.OnHotelDetailBriefInfoClick_OM.bindAsEventListener(this));
				// $("#divHotelPrice").bind("click", this.OnHotelDetailBriefInfoClick_OM.bindAsEventListener(this));
				// $("#Revise").bind("click", this.OnHotelDetailRPClick_OM.bindAsEventListener(this));
				// $("#divRoomList").bind("click", this.OnHotelDetailRPClick_OM.bindAsEventListener(this));
				// $("#tab").bind("click", this.OnHotelDetailReviewClick_OM.bindAsEventListener(this));

				// ImageDiv
				// $("#bigImage350").bind("click", this.OnHotelDetailImageClick_OM.bindAsEventListener(this));
				// $("#imageItem0").bind("click", this.OnHotelDetailImageClick_OM.bindAsEventListener(this));
				// $("#imageItem1").bind("click", this.OnHotelDetailImageClick_OM.bindAsEventListener(this));
				// $("#imageItem2").bind("click", this.OnHotelDetailImageClick_OM.bindAsEventListener(this));
				// $("#imageItem3").bind("click", this.OnHotelDetailImageClick_OM.bindAsEventListener(this));
				// $("#imageItem4").bind("click", this.OnHotelDetailImageClick_OM.bindAsEventListener(this));
				// $("#imageItem5").bind("click", this.OnHotelDetailImageClick_OM.bindAsEventListener(this));
				// $("#imageItem6").bind("click", this.OnHotelDetailImageClick_OM.bindAsEventListener(this));
				// $("#hotelFavDetail i").bind("click", this.OnHotelDetailFavIconClick_OM.bindAsEventListener(this));
			case "hotel detail page_map":
			case "hotel detail page_cmt":
				// $("#InCityName").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#CheckInDate").bind("blur", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#CheckOutDate").bind("blur", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#HotelName").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#txtSearchNear").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#btnSearch").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $(".fast_price").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $(".mt10").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#hrfIntroEditor").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $(".box").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#hrfApplySearch").bind("click", this.OnClick_OM.bindAsEventListener(this));
				break;
			case "hotel fillorder0620 page":
				// $("#rdoRoomNum").bind("change", this.OnHotelFillOrderClick_OM.bindAsEventListener(this));
				// $("#chDate").bind("click", this.OnHotelFillOrderClick_OM.bindAsEventListener(this));
				break;
			case "globalhotel list page":
			case "globalhotel new list page":
				// $("#btnSearch").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#RoomNum").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#CheckInDate").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#adult_room1").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $(".omniclck").bind("click", this.OnClick_IHR.bindAsEventListener(this));
				break;
			case "globalhotel detail page":
				// $("#btnSearch").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#editroom").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#lookcomment").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#hotelmore").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $(".hide_detail").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#divPublicdiplay").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#areaopensp").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#RoomNum").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#CheckInDate").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#adult_room1").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				break;
			case "globalhotel home page":
				// $("#btnSearch").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#RoomNum").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#CheckInDate").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				// $("#adult_room1").bind("change", this.OnValueChange_OM.bindAsEventListener(this));
				break;
			case "globalhotel book page":
				// $("#SubmitOrder").bind("click", this.OnClick_OM.bindAsEventListener(this));
				// $("#needinvoiceshow").bind("change", this.OnGlobalHotelBookClick_OM.bindAsEventListener(this));
				// $("#hrefEdit").bind("click", this.OnClick_OM.bindAsEventListener(this));
				break;
			case "ihotel list page":
			case "ihotel list no results":
				// $("#locationTab a").bind("click", this.OnListFilter_OM.bindAsEventListener(this));
				// $("#filterArea input").bind("click", this.OnListFilter_OM.bindAsEventListener(this));
				// $("#order_ul a").bind("click", this.OnListFilter_OM.bindAsEventListener(this));
				// $("#hotelList").live("click", this.OnHotelListClick_OM.bindAsEventListener(this));
				// $(".serchBut").bind("click", this.OnHotelListSearchbarClick_OM.bindAsEventListener(this));
				// $(".only").bind("click", OnIHotelOnlyClick_OM.bindAsEventListener(this));
				break;
			case "ihotel detail page":
				// $("div.review").bind("click", this.OnHotelDetailSidebarClick_OM.bindAsEventListener(this));
				// $("div.map").bind("click", this.OnHotelDetailSidebarClick_OM.bindAsEventListener(this));
				// $("ul.detailTab li").bind("click", this.OnHotelDetailTabsClick_OM.bindAsEventListener(this));
				// $("ul.hotelName a").bind("click", this.OnHotelDetailBriefInfoClick_OM.bindAsEventListener(this));
				// $("#BtnSearch").bind("click", this.OnHotelDetailRPClick_OM.bindAsEventListener(this));
				break;
			case "Else Elong Page":
				// $("div.hzybanner a").bind("click", this.OnHzybannerClick_OM.bindAsEventListener(this));
				break;
			}
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
/*
function OnHzybannerClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar12,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		var href = $(evt.currentTarget).attr('href');
		if (href.indexOf("hzypms") > 0) {
			s2.eVar12 = "eb:hzypms";
		} else {
			s2.eVar12 = "eb:yzg";
		}
		s2.prop11 = s2.eVar12;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnValueChange_OM(evt) {
	try
	{
    var s2=s_gi(s_account);
    s2.usePlugins = false;
    s2.linkTrackVars='prop11';
		//s2.linkTrackEvents='';
    s2.prop11 = s2.prop5+evt.target.id;
    if(evt.target.id.toLowerCase() == "arrivetime" || evt.target.id.toLowerCase() == "rdoroomnum")
    {
		CheckVouchInfo_OM(evt.target.value);
    }
	if(s2.prop5.indexOf('globalhotel') > -1) {
		s2.prop11 = s2.prop5 + "-" + evt.target.id;
		s2.linkTrackVars = "prop11,eVar37,events";
		s2.linkTrackEvents = "event23"; //Onclick
		s2.events = "event23";	//Onclick
		s2.eVar37 = s2.prop11;
	}
	if(evt.target.id == 'RoomNum' || evt.target.id == 'CheckInDate' || evt.target.id == 'adult_room1'){
		s2.tl(true,'o',s2.prop5+evt.target.id+evt.target.value);
	}
	if(evt.target.id != 'RoomNum' && evt.target.id != 'CheckInDate' && evt.target.id != 'adult_room1'){
		s2.tl(this,'o',s2.prop5+evt.target.id+evt.target.value);
	}
    debug_OM(s2.prop5+evt.target.id+evt.target.value);
  }
  catch(e)
  {
	debug_OM(e.toString());
  }
}
*/
/*
function OnHotelHomePoiClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		var text =  $(evt.target).text();
		if ($(evt.target).parents('div.fast_search_mod').length > 0) {
			s2.prop11 = s2.prop5 + "-poi-" + text;
		} else if ($(evt.target).parents('ul.cate_more').length > 0) {
			s2.prop11 = s2.prop5 + "-cate_more-" + text;
		} else if ($(evt.target).parents('ul.cate_area').length > 0) {
			s2.prop11 = s2.prop5 + "-cate_area-" + text;
		} else {
			return;
		}
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelHomeHotCityClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		var href = $(evt.currentTarget).children('a').get(0).getAttribute('href');
		var city = href.substring(23,href.length - 1);
		s2.prop11 = s2.prop5 + "-hotcity-" + city;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelHomeHotCityMoreClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-hotcity-more";
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnElongHompClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";
		s2.prop11 = s2.prop5 + "downloadApp";
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelNoncoopClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		if ($(evt.target).parents('#NearHotels').length > 0) {
			s2.prop11 = s2.prop5 + "-" + "HotList";
		} else {
			var method = evt.currentTarget.getAttribute("method");
			if (method == "null" || method == "") {
				s2.prop11 = s2.prop5 + "gotolist";
			} else {
				s2.prop11 = s2.prop5 + "-" + method;
			}
		}
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelListSearchbarClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";
		s2.prop11 = s2.prop5 + "-searchbar-" + evt.currentTarget.id;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11, null, 'navigate');
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelListSidebarClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";
		s2.prop11 = s2.prop5 + "-sidebar-" + evt.currentTarget.id;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnListFilter_OM(evt){
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		// var nodeName = evt.currentTarget.nodeName.toLowerCase();
		// if (nodeName == 'input') {
		// 	var datatype = evt.currentTarget.getAttribute("datatype");
		// 	if (datatype == 3) {
		// 		s2.prop11 = s2.prop5 + " -areaFilterItem";
		// 	} else if (datatype == 6) {
		// 		s2.prop11 = s2.prop5 + " -districtFilterItem";
		// 	} else {
		// 		var id = evt.currentTarget.id;
		// 		var name = evt.currentTarget.name;
		// 		s2.prop11 = s2.prop5 + " - " + (id !== null ? id : name);
		// 	}
		// } else if (nodeName == 'a' || nodeName == 'span' || nodeName == 'li') {
		// 	var mark = evt.currentTarget.getAttribute('mark');
		// 	var method = evt.currentTarget.getAttribute('method');
		// 	s2.prop11 = s2.prop5 + ' - ' + (mark !== null ? mark : method);
		// } else if ((evt.currentTarget.id == 'tiaojian' && evt.target.nodeName.toLowerCase() == 'span') || (evt.currentTarget.id == 'NoHotels' && evt.target.nodeName.toLowerCase() == 'a') || (evt.currentTarget.id == 'filterDivLeft' && evt.target.nodeName.toLowerCase() == 'a') || (evt.target.getAttribute('method') == 'showAllFilter')) {
		// 	s2.prop11 = s2.prop5 + ' - ' + evt.target.getAttribute('method');
		// } else {
		// 	return;
		// }

        var method = $(evt.currentTarget).attr("method");
        if (method == "locationTab") {
            tabcode = $(evt.currentTarget).attr("data-tab")
            var tabname = "";
            if (tabcode == "businessArea") {
            	tabname = "商圈";
            } else if (tabcode == "districtArea") {
            	tabname = "行政区";
            } else if (tabcode == "1") {
            	tabname = "火车站/机场";
            } else if (tabcode == "2") {
            	tabname = "地铁站";
            } else if (tabcode == "71") {
            	tabname = "周边游";
            } else if (tabcode == "77") {
            	tabname = "公务员考试";
            } else {
            	console.log(tabcode);
            }
            s2.prop11 = s2.prop5 + "-" + tabname;
            if (tabname != "businessArea" && tabname != "districtArea") {
                setTimeout(bindFilters, 1000);
            }
        } else if (method == "locationSubTab") {
            s2.prop11 = s2.prop5 + "-" + $(evt.currentTarget).text().trim();
            setTimeout(bindFilters, 1000);
        } else if (method == "priceFilter" || method == "starFilter" || method == "brandFilter" || method == "capacityFilter" || method == "facilityFilter" || method == "themeFilter" || method == null) {
            s2.prop11 = s2.prop5 + "-" + $(evt.currentTarget).children("label").text().trim();
        } else {
            return;
        }

		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
*/
/*
function bindFilters() {
    $("div.filterShow li").unbind("click.scode");
    $("div.filterShow li").bind("click.scode", this.OnListFilter_OM.bindAsEventListener(this));
}
*/
/*
function OnHotelListClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar31,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		var pageNumber = parseInt($('li.page_on').text(), 10);
		var hotelIndex = $('div.hotelInfo').index($(evt.target).parents('div.hotelInfo').get(0));
		if (-1 == hotelIndex) {
			hotelIndex = $('div.newHotelInfo').index($(evt.target).parents('div.newHotelInfo').get(0));
		}
		var hotelRank = 20 * (pageNumber - 1) + hotelIndex + 1;

		if ($(evt.target).parents('div.picwk').length > 0 || $(evt.target).parents('div.t1').length > 0) {
			s2.prop11 = s2.prop5 + "-hotellist-image";
			s2.eVar31 = hotelRank;
		} else if ($(evt.target).parents('dl.info dt').length > 0 || $(evt.target).parents('dl.t2 dt').length > 0) {
			s2.prop11 = s2.prop5 + "-hotellist-title";
			s2.eVar31 = hotelRank;
		} else if ($(evt.target).parents('ul.review').length > 0 || $(evt.target).parents('div.t3').length > 0 || $(evt.target).parents('div.t5 div.dp').length > 0) {
			s2.prop11 = s2.prop5 + "-hotellist-review";
			s2.eVar31 = hotelRank;
		} else if ($(evt.target).parents('div.price').length > 0 || $(evt.target).parents('div.t4').length > 0 || $(evt.target).parents('div.t5 span.price').length > 0) {
			s2.prop11 = s2.prop5 + "-hotellist-price";
			s2.eVar31 = hotelRank;
		} else if ($(evt.target).parents('table.rpList td.w1').length > 0 || $(evt.target).parents('div.RpList p.rw1').length > 0) {
			s2.prop11 = s2.prop5 + "-hotellist-rpname";
			s2.eVar31 = hotelRank;
		} else if ($(evt.target).parents('table.rpList td.w5').length > 0 || $(evt.target).parents('div.RpList p.rw7').length > 0) {
			s2.prop11 = s2.prop5 + "-hotellist-viewbutton";
			s2.eVar31 = hotelRank;
		} else if ($(evt.target).parents('dl.info dd').length > 0 || $(evt.target).parents('dl.t2 dd').length > 0) {
			var tab = evt.target.getAttribute("tab");
			if (tab == null || tab == "") {
				s2.prop11 = s2.prop5 + "-hotellist-district";
			} else {
				s2.prop11 = s2.prop5 + "-hotellist-" + tab;
			}
		} else if ($(evt.target).parents('div.prompt').length > 0 || $(evt.target).parents('div.rpMore').length > 0) {
			s2.prop11 = s2.prop5 + "-hotellist-showallrp";
		} else {
			return;
		}
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	}
	catch(e)
	{
		debug_OM(e.toString());
	}

}
*/
/*
function OnHotelListCouponClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-" + evt.currentTarget.id;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelListResearchClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-viewallhotels";
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11, null, 'navigate');
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelListZhunaerClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-zhunaer";
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelListFavClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-favicon";
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelListiPadClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-" + evt.currentTarget.id;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	}
	catch(e)
	{
		debug_OM(e.toString());
	}

}
*/
/*
function OnHotelMapClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		var method = evt.currentTarget.getAttribute('method');
		s2.prop11 = s2.prop5 + "-" + method;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelMapFilterClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		var parents = $(evt.target).parents('#selectMenu dt');
		if (parents.length == 1) {
			var parent = parents.get(0);
			var method = parent.getAttribute('method');
			s2.prop11 = s2.prop5 + "-" + method;
			s2.eVar37 = s2.prop11;
			s2.tl(true, 'o', s2.prop11);
		}
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelDetailBriefInfoClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";
		s2.prop11 = s2.prop5 + "-brief-";
		var id = evt.currentTarget.id;
		var className = evt.currentTarget.className;
		if (className == "area" || className == "ghi") {
			s2.prop11 += "area";
			s2.eVar37 = s2.prop11;
			s2.tl(true, "o", s2.prop11, null, 'navigate');
		} else if (className == "map") {
			s2.prop11 += className;
			s2.eVar37 = s2.prop11;
			s2.tl(true, "o", s2.prop11);
		} else if (id == "divHotelPrice") {
			s2.prop11 += "order";
			s2.eVar37 = s2.prop11;
			s2.tl(true, "o", s2.prop11);
		} else {
			return;
		}
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelDetailSidebarClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.prop11 = s2.prop5 + "-sidebar-";
		var id = evt.currentTarget.id;
		var className = evt.currentTarget.className;
		if (id == "rightCommentDiv" || className.indexOf("review") != -1) {
			s2.prop11 += "comment";
		} else if (id == "imageMapDiv" || id == "imageMapShow" || className.indexOf("map") != -1) {
			s2.prop11 += "map";
		} else if (className == "csDiv" || className == "cs") {
			s2.prop11 += "cs";
		}else {
			return;
		}
		s2.eVar37 = s2.prop11;
		s2.tl(true, "o", s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelDetailTabsClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.prop11 = s2.prop5 + "-tabs-";
		var id = evt.currentTarget.id;
		if (id != null && id != "") {
			s2.prop11 += id;
		} else {
			s2.prop11 += $(evt.currentTarget).text().trim().substring(0,4);
		}
		s2.eVar37 = s2.prop11;
		s2.tl(true, "o", s2.prop11, null, 'navigate');
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelDetailFavIconClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.prop11 = s2.prop5 + "-favicon";
		s2.eVar37 = s2.prop11;
		s2.tl(true, "o", s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelDetailReviewClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.prop11 = s2.prop5;
		var nodeName = evt.target.nodeName.toLowerCase();
		var mth = evt.target.getAttribute("mth");
		var className = evt.target.className;
		var text = "";
		if ((nodeName == "li" || nodeName == "a") && mth != null && mth != "divide") {
			s2.prop11 += "-reviewtype-";
            text = $(evt.target).text().trim();
        } else if (nodeName == "span" && className == "") {
			s2.prop11 += "-reviewtype-";
            text = $(evt.target).parent().text().trim();
        } else if (nodeName == "span" && className.indexOf("btn") != -1) {
			s2.prop11 += "-reviewkw-";
            text = $(evt.target).text().trim();
		} else {
			return;
		}
		var index = text.indexOf("(");
		if (index == -1) {
			s2.prop11 += text;
		} else {
			s2.prop11 += text.substring(0, index);
		}
		s2.eVar37 = s2.prop11;
		s2.tl(true, "o", s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelDetailRPClick_OM(evt) {
	try
	{
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar35,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";
		s2.prop11 = s2.prop5 + "-rplist-";
		if (typeof(HotelDetailNewController) != "undefined" && HotelDetailNewController != null) {
			var currentDate = new Date(HotelDetailNewController.ServerTime);
			var checkinDate = new Date($('#checkInDateApply').val());
			s2.eVar35 = Math.round((checkinDate.getTime() - currentDate.getTime())/1000/60/60/24).toString();
		}
		var id = evt.target.id;
		var nodeName = evt.target.nodeName.toLowerCase();
		var method = evt.target.getAttribute("method");
		if (id == "Revise" || id == "BtnSearch") {
			s2.prop11 += "modifyDate";
			s2.eVar37 = s2.prop11;
			s2.tl(true, "o", s2.prop11);
		} else if (method == "RoomDetail") {
			s2.prop11 += method + "-" + nodeName;
			s2.eVar37 = s2.prop11;
			s2.tl(true, "o", s2.prop11);
		} else if (nodeName == "a" && method == "Order") {
			s2.prop11 = method + "-" + s2.getElongOHotelIDVal();
			s2.eVar37 = s2.prop11;
			s2.tl(true, 'o', s2.prop11, null, 'navigate');
		} else {
			return;
		}
	}
	catch(e)
	{
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelDetailImageClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-image-" + evt.currentTarget.id;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnHotelFillOrderClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-" + evt.currentTarget.id;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnGlobalHotelBookClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-" + evt.currentTarget.id;
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnIHotelOnlyClick_OM(evt) {
	try {
		var s2 = s_gi(s_account);
		s2.usePlugins = false;
		s2.linkTrackVars = 'prop11,eVar37,events';
		s2.linkTrackEvents = "event23";
		s2.events = "event23";

		s2.prop11 = s2.prop5 + "-" + "elongonly";
		s2.eVar37 = s2.prop11;
		s2.tl(true, 'o', s2.prop11);
	} catch (e) {
		debug_OM(e.toString());
	}
}
*/
/*
function OnClick_OM(evt) {
	try
	{
    var s2=s_gi(s_account);
    s2.usePlugins = false;
    s2.linkTrackVars='prop11';
		//s2.linkTrackEvents='';
    var actionType_OM = "";
    switch(evt.target.id)
    {
    	case "ContinueOrder":
    		actionType_OM = "finishOrder";
    		break;
    	case "btnSearch":
    		actionType_OM = "leftReSearch";
    		break;
    	case "hrfApplySearch":
    		actionType_OM = "hrfApplySearch";
    		break;
    	case "hrfIntroEditor":
    		actionType_OM = "hrfIntroEditor";
    		break;
    	default:
    		if(Event.element(evt).attr("id")=="searchBtnApply")
    		{
    			actionType_OM += "rightReSearch";
    		}
        else if(Event.element(evt).attr("mth") == "order")
        {
          actionType_OM += "fillOrder";
    		}
    		else if(Event.element(evt).attr("method")=="changedate")
    		{
    			actionType_OM += "changeDate";
    		}
    		//20110328
    		else if(Event.element(evt).attr("href") == "#room")
    		{
    			actionType_OM += "fastPrice";
    		}
    		else if(evt.currentTarget.className.indexOf("box") >= 0)
    		{
    			if(evt.currentTarget.innerHTML.indexOf("pic_dom") > 0)
    			{
    				actionType_OM += "imgClick";
    			}
    			else if(evt.currentTarget.innerHTML.indexOf("map_dom") > 0)
    			{
    				actionType_OM += "mapClick";
    			}
    			else if(evt.currentTarget.innerHTML.indexOf("comments_dom") > 0)
    			{
    				actionType_OM += "cmtClick";
    			}
    		}
    		else if(evt.currentTarget.className == "tab mt10 clx")
    		{
    			if(Event.element(evt).attr("href") != null && Event.element(evt).attr("href").indexOf("detailcmt") >= 0)
    			{
    				actionType_OM += "topCmtClick";
    			}
    			if(Event.element(evt).attr("href") !=null && Event.element(evt).attr("href").indexOf("list_") >= 0)
    			{
    				actionType_OM += "topCityClick";
    			}
    		}
    		//20110328end
    		break;
    }
	if(s2.prop5.indexOf('globalhotel') > -1) {
		switch (evt.target.id) {
			case "mapSeek": actionType_OM = "-map"; break;
			case "btnSearch": actionType_OM = "-search"; break;
			case "com_search75": actionType_OM = "-detailmodify"; break;
			case "bggmap": actionType_OM = "-map"; break;
			case "lookcomment": actionType_OM = "-reviews"; break;
			case "hotelmore": actionType_OM = "-hotelinfo"; break;
			case "divPublicdiplay": actionType_OM = "-hotelservice"; break;
			case "areaopensp": actionType_OM = "-hotelsurround"; break;
			case "SubmitOrder": actionType_OM = "-submitorder"; break;
			default:actionType_OM = "-" + evt.target.id;
		}
		if (evt.target.id.indexOf('tipword') > -1) {
			actionType_OM = "-roomdetail";
		}
		s2.linkTrackVars = "prop11,eVar37,events";
		s2.linkTrackEvents = "event23"; //OnClick
		s2.events = "event23"; //OnClick
	}

    if(actionType_OM!="")
    {
    	s2.prop11 = s2.prop5+actionType_OM;
		s2.eVar37=(s2.prop5.indexOf("globalhotel") > -1)?s2.prop11:"";
    	s2.tl(this,'o',s2.prop5+actionType_OM);
    	debug_OM(s2.prop5+actionType_OM);
    }
  }
  catch(e)
  {
  	debug_OM(e.toString());
  }
}
*/
/*
function OnClick_IHR(evt) {
	try
	{
    var s2=s_gi(s_account);
    s2.usePlugins = false;
    s2.linkTrackVars = "products,prop11,eVar37,eVar41,events";
	s2.linkTrackEvents = "event13"; //OnClick
	s2.events = "event13"; //OnClick

    var actionType_OM = "-clicklist";
	var rank = evt.target.getAttribute("rank");
	var hid = evt.target.getAttribute("hotelid");
	s2.products = ";"+hid+";;;;eVar41="+rank;
	s2.prop12 = s2.prop5+actionType_OM;
	s2.eVar37=(s2.prop5.indexOf("globalhotel") > -1)?s2.prop11:"";

	s2.tl(this,'o',s2.prop5+actionType_OM);
	debug_OM(s2.prop5+actionType_OM);
	}
  catch(e)
  {
  	debug_OM(e.toString());
  }
}
*/
function CheckVouchInfo_OM(actionId){
	try
	{
    if ((!checkedVouch_OM) && (($("#VouchInfo") != null && $("#VouchInfo")[0].style.display.toLowerCase() != "none") || ($("#dvInvoiceRegion") != null && $("#dvInvoiceRegion").length ==1 )))
    {
    	checkedVouch_OM = true;
   		var s2=s_gi(s_account);
	    s2.usePlugins = false;
	    s2.linkTrackVars='prop11';
			//s2.linkTrackEvents='';
			if(actionId != 'enter')
			{
	    	s2.prop11 = s2.prop5 + "change-vouch";
		  }
	    else
	    {
	    	s2.prop11 = s2.prop5 + "enter-vouch";
	    	if($("#dvInvoiceRegion") != null && $("#dvInvoiceRegion").length ==1 )
	    	{
	    		s2.prop11 = s2.prop5 + "prepay-vouch";
	    	}
	    }
	    debug_OM(s2.prop11+actionId);
	    s2.tl(this,'o',s2.prop11+actionId);
    }
  }
  catch(e)
  {
  	debug_OM(e.toString());
  }
}
/**customereventend**/
/* SiteCatalyst code version: H.1.
Copyright 1997-2005 Omniture, Inc. More info available at
http://www.omniture.com */
/* Specify the Report Suite ID(s) to track here  */
var s_account="elongcom";
var s = function(){};
var bind_OM = 'UNDO';
s.t = function(){};
if (document.location.host.toLowerCase().indexOf("elong") > 0 || document.location.host.toLowerCase().indexOf("hzypms") > 0) {
if (document.location.host.toLowerCase().indexOf("net") != -1) { s_account="elongnet"};
// if (document.location.host.toLowerCase().indexOf("big5") != -1) { s_account="elongbig5"};
if (document.location.host.toLowerCase().indexOf("fer") != -1) { s_account="elongtest"};
s=s_gi(s_account);
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8";
/* E-commerce Config */
s.currencyCode="CNY";
/* Link Tracking Config */
s.trackDownloadLinks=false;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
s.linkInternalFilters="javascript:,elong.com,elong.net,#,/";
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";
/* Plugin Config */
s.usePlugins=true;

function s_doPlugins(s) {
    /* Add calls to plugins here */
    s.pageName = "";
	s.server = "";
	s.channel = "";
	s.pageType = "";
	s.prop1 = "";
	s.prop2 = "";
	s.prop3 = "";
	s.prop4 = "";
	s.prop5 = "Else Elong Page";
	s.prop6 = "";
	s.prop7 = "";
	s.prop8 = "";
	s.prop9 = "";
	s.prop10 = "";
	s.prop18 = s.getLoadTime();
	/* E-commerce Variables */
	s.campaign = "";
	s.state = "";
	s.zip = "";
	s.events = "event1,";
	s.products = "";
	s.purchaseID = "";
	s.eVar1 = "";
	s.eVar2 = "";
	s.eVar3 = "";
	s.eVar5 = "";
	s.eVar6 = "";
	s.eVar8 = "";
	s.eVar9 = "";
	s.eVar10 = "";
  if(!s.pageName)
	{
		s.pageName=s.getElongPageName(location.href,location.host);
	}
  if (!s.channel)
  {
  	s.channel=s.getElongChannel(location.href);
  }
  s.prop8 = s.getBrowser();
  s.prop7 = "20150416";
  s.prop6 = s.getOrderFrom();
  s.eVar15= s.prop6;
  s.eVar50= s.prop6;
  s.eVar18 = s.prop8;
  s.eVar3 = s.getCard();
  s.contextData['vstart']=s.getVisitStart('s_visit'); //get visit start
  s.prop17=s.get_cookie('SessionGuid');
	/*2009.7ÐÂÔö Campaign Tracking */

	// External Campaign
	if(!s.campaign)
		s.campaign=s.getValOnce(s.getQueryParam('exid'),'s_campaign',30);

	// Internal Campaign
	s.eVar11=s.getValOnce(s.getQueryParam('inid'),'s_eVar11',30);

	// WebUnion Campaign
	s.eVar43=s.getValOnce(s.getQueryParam('campaign_id'),'s_eVar43',30);
	if(!s.campaign) s.campaign=s.eVar43;

	// Paid Search Campaign
	s.eVar44=s.getValOnce(s.getQueryParam('semid'),'s_eVar44',30);
	if(!s.campaign) s.campaign=s.eVar44;

	// Affiliate Campaign
	s.eVar45=s.getValOnce(s.getQueryParam('aid'),'s_eVar45',30);
	if(!s.campaign) s.campaign=s.eVar45;

	// Banner Campaign
	s.eVar46=s.getValOnce(s.getQueryParam('banid'),'s_eVar46',30);
	if(!s.campaign) s.campaign=s.eVar46;
	// Banner Campaign ins
	s.eVar19=s.getQueryParam('banid');
	// Corp Campaign ins
	s.eVar20=s.getQueryParam('canid');
	// Corp Campaign ins
	s.eVar21=s.getValOnce(s.getQueryParam('canid'),'s_eVar21',30);
	// Email Campaign
	s.eVar47=s.getValOnce(s.getQueryParam('emailid'),'s_eVar47',30);
	if(!s.campaign) s.campaign=s.eVar47;

	//2009.10 add
	s.eVar12=s.getQueryParam('keycoid');
	if(!s.campaign) s.campaign=s.eVar12;

	//2010.03 added
	// s.eVar13=s.getValOnce(s.getQueryParam('tripid'),'s_eVar13',30);
	// if(!s.campaign) s.campaign=s.eVar13;
	//2014.04 modified to preserve keycooperation for 30 days
	s.eVar13=s.eVar12;

	//2010.04 added
	s.eVar14=s.getValOnce(s.getQueryParam('promotionIndex'),'s_eVar14',30);

	//2013.04 added
	s.eVar75=s.getQueryParam('semwp');
	s.eVar35 = s.getElongOLatency();
	s.eVar31 = s.getElongOFlight();
	s.eVar4 = s.getElongOPaymentType();

	s.eVar51 = s.getElongOMVT1Val();
	s.eVar52 = s.getElongOMVT2Val();
	s.eVar53 = s.getElongOMVT3Val();
	s.eVar54 = s.getElongOMVT4Val();
	s.eVar55 = s.getElongOMVT5Val();
	s.eVar56 = s.getElongOMVT6Val();
	s.eVar57 = s.getElongOMVT7Val();
	s.eVar58 = s.getElongOMVT8Val();
	s.eVar59 = s.getElongOMVT9Val();
	s.eVar60 = s.getElongOMVT10Val();
	s.eVar61 = s.getElongOMVT11Val();
	s.eVar62 = s.getElongOMVT12Val();
	s.eVar63 = s.getElongOMVT13Val();
	s.eVar64 = s.getElongOMVT14Val();
	s.eVar65 = s.getElongOMVT15Val();
	s.eVar66 = s.getElongOMVT16Val();
	s.eVar67 = s.getElongOMVT17Val();
	s.eVar68 = s.getElongOMVT18Val();
	s.eVar69 = s.getElongOMVT19Val();
	s.eVar70 = s.getElongOMVT20Val();
	s.eVar71 = s.getElongOPOIVal();
	s.eVar72 = s.getElongOHNAME();
	s.eVar73 = s.getElongOAIO();
	s.eVar74 = s.getElongOSUGGSTION();

	if(!s.campaign) s.campaign=s.eVar14;
	if(document.referrer.length > 5 && document.referrer.toLowerCase().indexOf(".elong.") <= 0)
	{
	  s.eVar28 = s.AnalystSE(document.referrer.toLowerCase(),location.href);
	  if(s.eVar28.indexOf("__")>=0)
	  {
	  	if(s.eVar28.indexOf("_SEO")>=0)
	  	{
	  		s.eVar29 = s.AnalystSEKW(s.eVar28,document.referrer,location.href);
	  	}
	  	else
	  	{
	  		s.eVar30 = s.AnalystSEKW(s.eVar28,document.referrer,location.href);
	  	}
	  }
	}
	/*ÐÂÔö½áÊø*/

	s.prop1 = location.host
	s.eVar1 = location.host
	var elongReserNo = s.getElongReservNo();
	if (elongReserNo !='')
	{
		s.eVar2 = elongReserNo;
		var elongProductsVal = s.getElongProducts();
		if(elongProductsVal !='')
		{
			s.products = elongProductsVal;
			s.purchaseID = elongReserNo;
			s.events = "purchase";
		}
	}

	var s_URL=document.location.href.toLowerCase();
	//code for for trip event
	if(location.host.toLowerCase().indexOf("trip.elong") > -1)
	{
		if(s.pageName.indexOf("cp.php")>-1 && s.getQueryParam('ac') == "blog")
		{
			s.prop3 = "write blog";
		}
		else if(s.pageName.indexOf("space.php")>-1 && s.getQueryParam('do') == "blog" && document.referrer.indexOf("cp.php") >-1)
		{
			s.prop3 = "write blog success";
		}
		else if(s.pageName.indexOf("cp.php")>-1 && s.getQueryParam('ac') == "tour" && s.getQueryParam('blogid') != "")
		{
			s.prop3 = "contribute";
		}
		else if(s.pageName.indexOf("cp.php")>-1 && s.getQueryParam('ac') == "tour" && s.getQueryParam('blogid') == "")
		{
			s.prop3 = "contribute success";
		}
		else if(s.pageName.indexOf("cp.php")>-1 && s.getQueryParam('ac') == "upload")
		{
			s.prop3 = "upload";
		}
		else if(s.pageName.indexOf("space.php")>-1 && s.getQueryParam('do') == "album" && document.referrer.indexOf("cp.php") >-1)
		{
			s.prop3 = "upload success";
		}
		else if(s.pageName.indexOf("ask.php")>-1)
		{
			s.prop3 = "ask";
		}
		else if(s.pageName.indexOf("signal.php")>-1 && s.getQueryParam('resultno') != ""  && document.referrer.indexOf("ask.php") >-1)
		{
			s.prop3 = "ask success";
		}
		else if(s.pageName.indexOf("post.php")>-1 && s.getQueryParam('action') == "newthread")
		{
			s.prop3 = "post";
		}
		else if(s.pageName.indexOf("viewthread.php")>-1 && s.getQueryParam('tid') != ""  && document.referrer.indexOf("post.php") >-1)
		{
			s.prop3 = "post success";
		}
		else
		{
			s.prop3 = "else trip page";
		}
	}
	//  Code for Booking Funnel
	if(s.pageName.indexOf("www.elong.com/chat.html") >= 0)
	{
		//online service page
		var now= new Date();
		s.eVar17 = now.getYear() + "-" + now.getMonth() + "-" + now.getDate();
	}
	if(s.channel=="hotels")
	{
		// s.eVar6="actual hotel visitor";
		if(s.pageName.indexOf("list_")>0 || s.pageName.indexOf("/list")>0 || s.pageName.indexOf("/city")>0 || s.pageName.indexOf("/city")>0 || s.pageName.indexOf("/province")>0 || s.pageName.indexOf("/district")>0 || s.pageName.indexOf("/business")>0 || s.pageName.indexOf("/place")>0 || s.getElongOPageNameVal().toLowerCase()=="hotellist" )
		{
			var elongProductListVal = s.getElongProductList();
			if(elongProductListVal !='')
			{
				s.products = elongProductListVal;
			}
			if(s.getElongOPageNameVal().toLowerCase()=="hotellistsimple")
			{
				s.events="event8," +s.events;  //Shopper
				s.prop4="actual hotel shopper";
				s.prop5="hotel simple list page";
				s.prop9=s.getElongOCityIDVal();
				s.eVar26 = s.prop9;
			}
			else if(s.getElongOPageNameVal().toLowerCase()=="hotelmap")
			{
				s.events="event8," +s.events;  //Shopper
				s.prop4="actual hotel shopper";
				s.prop5="hotel map list page";
				s.prop9=s.getElongOCityIDVal();
				s.eVar26 = s.prop9;
			}
			else if(s.getElongOPageNameVal().toLowerCase()=="cityhomepage")
	  		{
	  		s.events="event8," +s.events;  //Shopper
	    	s.prop4="actual hotel shopper";
			s.prop5="hotel city homepage";
	  		}
			else
			{
				s.events="event8," +s.events;  //Shopper
				s.prop4="actual hotel shopper";
				s.prop5="hotel list page";
				s.prop9=s.getElongOCityIDVal();
				s.eVar26 = s.prop9;
				// s.eVar31 = s.getElongRankType();
			}
		}
	  else if(s.getElongOPageNameVal().toLowerCase()=="hoteldetail"
		|| s.getElongOPageNameVal().toLowerCase()=="hoteldetailreviews"
		|| s.getElongOPageNameVal().toLowerCase()=="hotelphotos"
		|| s.getElongOPageNameVal().toLowerCase()=="hoteldetailmap" )
	  {
	  	s.events="event8," +s.events;  //Shopper
	    s.prop4="actual hotel shopper";
	    s.prop5="hotel detail page";
	    if(s.getElongOPageNameVal().toLowerCase()=="hoteldetailmap")
	  	{
	  		s.prop5="hotel detail page_map";
	  	}
	  	if(s.getElongOPageNameVal().toLowerCase()=="hoteldetailreviews")
	  	{
	  		s.prop5="hotel detail page_cmt";
	  	}
	    s.eVar22 = s.getElongOHotelIDVal();
	    s.prop10=s.getElongOHotelIDVal();

	    s.prop9=s.getElongDetailCityIDVal();
	    if(s.prop9 == "")
	    {
	    	s.prop9=s.getElongOCityIDVal();
	    }
	    s.eVar26 = s.prop9;
	  }
	  else if(s.getElongOPageNameVal().toLowerCase()=="hoteldetail20120906" ||
		s.getElongOPageNameVal().toLowerCase()=="hoteldetailreviews20120906" ||
		s.getElongOPageNameVal().toLowerCase()=="hotelphotos20120906" ||
		s.getElongOPageNameVal().toLowerCase()=="hoteldetailmap20120906" 	)
	  {
	  	s.events="event8," +s.events;  //Shopper
	    s.prop4="actual hotel shopper";
	    s.prop5="hotel detail page 20120906";
	    if(s.getElongOPageNameVal().toLowerCase()=="hoteldetailmap20120906")
	  	{
	  		s.prop5="hotel detail page_map 20120906";
	  	}
	  	if(s.getElongOPageNameVal().toLowerCase()=="hoteldetailreviews20120906")
	  	{
	  		s.prop5="hotel detail page_cmt 20120906";
	  	}

	    s.eVar22 = s.getElongOHotelIDVal();
	    s.prop10=s.getElongOHotelIDVal();

	    s.prop9=s.getElongDetailCityIDVal();
	    if(s.prop9 == "")
	    {
	    	s.prop9=s.getElongOCityIDVal();
	    }
	    s.eVar26 = s.prop9;
	  }
	  else if(s.getElongOPageNameVal().toLowerCase()=="hotelkoubeipage")
	  {
	  		s.events="event8," +s.events;  //Shopper
	    	s.prop4="actual hotel shopper";
			s.prop5="hotel koubei page";
	  }
	  else if(s.getElongOPageNameVal().toLowerCase()=="error404cnpage")
	  {
	  		s.events="event8," +s.events;  //Shopper
	    	s.prop4="actual hotel shopper";
			s.prop5="Error 404 CnPage";
	  }
	  else if(s.getElongOPageNameVal().toLowerCase()=="hotelchaindetail")
	  {
	  		s.events="event8," +s.events;  //Shopper
	    	s.prop4="actual hotel shopper";
			s.prop5="hotel chain detail";
	  }
	  else if(s.getElongOPageNameVal().toLowerCase()=="hoteldetailhelp" )
	  {
	  	s.events="event8," +s.events;  //Shopper
	    s.prop4="actual hotel shopper";
	    s.prop5="hotel detail help";
	  }

	  else if(s.getElongOPageNameVal().toLowerCase()=="hoteldetailhelp20120906" )
	  {
	  	s.events="event8," +s.events;  //Shopper
	    s.prop4="actual hotel shopper";
	    s.prop5="hotel detail help 20120906";
	  }

	  else if(s.pageName.indexOf("/index_")>0 || s.pageName == "hotel.elong.com" || s.pageName == "big5.elong.com/gate/big5/hotel.elong.com")
	  {
	    s.prop5="hotel home page";
	  }
	  else if(s.pageName.indexOf("florder")>0)
	  {
	  	s.events="event9," +s.events;  //booker
	    s.prop4="actual hotel booker";
	    // s.prop5="hotel book page";
		s.prop5="hotel fillorder0620 page";
	    if(s.getElongOPageNameVal().toLowerCase()=="fillorder_b")
	    {
	    	s.prop5="new hotel book page";
	  	}
		else if(s.getElongOPageNameVal().toLowerCase()=="fillorder")
		{
			s.prop5="hotel fillorder page";
		}
		else if(s.getElongOPageNameVal().toLowerCase()=="fillorder0620")
		{
			s.prop5="hotel fillorder0620 page";
        }
        else if (s.getElongOPageNameVal().toLowerCase() == "hotelfillorderjava") {
            s.prop5 = "hotel hotelfillorderjava page";
        }

	  	CheckVouchInfo_OM('enter');
	  }
	  else if(s.pageName.indexOf("ckorder")>0)
	  {
	  	s.events="event11," +s.events;  //confirmer
	    s.prop4="actual hotel confirmer";
	    s.prop5="hotel confirm page";
	  }
	  else if(s.pageName.indexOf("fhorder")>0)
	  {
	  	s.events="event12," +s.events;  //purchaser
	    s.prop4="actual hotel purchaser";
	    s.prop5="hotel puchase page";
	    if(s.getElongOPageNameVal().toLowerCase()=="hotelordersuccess")
	    {
	    	s.prop5="hotel hotelordersuccess page";
	  	}
		else if(s.getElongOPageNameVal().toLowerCase()=="hotelordersuccess0620")
		{
			s.prop5="hotel hotelordersuccess0620 page";
        }
        else if (s.getElongOPageNameVal().toLowerCase() == "hotelordersuccessjava") {
            s.prop5 = "hotel hotelordersuccessjava page";
        }

	  }
	  else if (s.getElongOPageNameVal().toLowerCase() == "hotel payment page") {
	  	s.events="event12," +s.events;  //purchaser
	    s.prop4="actual hotel purchaser";
	    s.prop5="hotel payment page";
	  }
	  else
	  {
	  	s.prop5="else hotel page";
	  }

	  if(s.pageName.indexOf("listmap_")>0)
	  {
	  	s.events="event8," +s.events;  //Shopper
	    s.prop4="actual hotel shopper";
	    s.prop5="hotel map page";
	  }
	  //shopper,record the refer path
	  if(s.prop4=="actual hotel shopper")
	  {
	  	var referPath = s.getPathFromUrl(document.referrer);
	  	s.eVar16=referPath;
	  	s.prop2=referPath;
	  }
	  s.prop11 = "visit " + s.prop5;
	  s.eVar23 = s.getElongOClientGuidVal();
	  s.eVar24 = s.getElongOImpressionGuidVal();
	  s.eVar25 = s.getElongOServerTimeVal();
	  if(bind_OM == "UNDO")
	  {
	    	BindCustomerEvent_OM(s.prop5);
	    	bind_OM = "DONE";
	  }
	}
	else if(s.channel=="globalhotels")
	{
		// s.eVar6 = "actual globalhotel visitor";
		/** record intlH source **/
		var intls = s.getQueryParam('intls');
		var semtcid = s.getQueryParam('semtcid');
		var semid = s.getQueryParam('semid');
		var ibanid = s.getQueryParam('banid');
		var icanid = s.getQueryParam('canid');
		var gbhsource = intls;
		if(semid=='bidu'){ gbhsource = 'baidu|' + semtcid }
		if(semid=='goog'){ gbhsource = 'goog|' + semtcid }
		if(ibanid) { gbhsource = ibanid; }
		if(icanid) { gbhsource = icanid; }
		s.prop13=(gbhsource)?gbhsource:"n/a";
		s.eVar39=s.getValOnce(gbhsource,'s_intls',0);

		//IntlH finding method
		var global_fm = document.location.hash;
		if(global_fm.indexOf('intlfm=') > -1) {
			s.eVar36 = global_fm.split('=')[1];
		}

		//shopper,record the refer path
		if (s.pageName.indexOf("list_") > 0 || s.pageName.indexOf("/list") > 0 || s.pageName.indexOf("detail") > 0)
		{
			var referPath = s.getPathFromUrl(document.referrer);
			s.eVar16 = referPath;
			s.prop2 = referPath;
		}
		if (s.pageName.indexOf("list_") > 0 || s.pageName.indexOf("/list") > 0)
		{
			//clean global list URL
			urltokens = s.pageName.split('_').slice(0,3);
			cleanurl = urltokens.join('_');
			s.pageName=(cleanurl.indexOf('.html') > - 1)?cleanurl:cleanurl + '.html';

			s.events = "event8,event24," + s.events;//Shopper,Search
			s.prop4 = "actual globalhotel browser";
			s.prop5 = "globalhotel list page";
			if(s.getElongOCityIDVal()){
				s.prop9 = s.eVar26 = 'intl-'+ s.getElongOCityIDVal();
			}
			if(typeof(trackingOBJ) != "undefined"){
				if (typeof (trackingOBJ.oSearchFilter) != "undefined") {
					s.eVar32 = trackingOBJ.oSearchFilter;
				}
				if (typeof (trackingOBJ.oLandmark) != "undefined") {
					s.eVar33 = (trackingOBJ.oLandmark == "")?"no_landmark":trackingOBJ.oLandmark;
				}
				if (typeof (trackingOBJ.oSort) != "undefined") {
					s.eVar34 = (trackingOBJ.oSort == "")?"default":trackingOBJ.oSort;
				}
				if (typeof (trackingOBJ.oNoResults) != "undefined") {
					if(trackingOBJ.oNoResults == "1"){
						s.prop5 = "globalhotel list no results";
						s.events = "event21," + s.events; //Result
					}
				}
				if (typeof (trackingOBJ.oHotelName) != "undefined") {
					s.eVar38 = (trackingOBJ.oHotelName == "")?"no_hotel":trackingOBJ.oHotelName.toLowerCase();
				}
				if (s.pageName.indexOf("listrank_") > 0 ) {  //modify tracking for ranklist
					s.prop5 = "globalhotel listrank page";
					s.eVar33 = s.eVar32 = s.eVar34 = s.eVar38 = '';
				}
				var elongProductListVal = s.getElongProductList();
				s.products = "";

				if(elongProductListVal !='') {
					var intlprods=elongProductListVal.split(",");
					for (var i = 0; i < intlprods.length; i++) {
						var rank = i + 1;
						s.products += ";"+intlprods[i]+";;;;eVar41="+rank;
						if (i < intlprods.length - 1) {
							s.products += ",";
						}
					}
				}

			}
		}
		else if (s.pageName.indexOf("detail") > 0)
		{
			s.events = "event8,event22," + s.events;//Shopper, DetailView
			s.prop4 = "actual globalhotel shopper";
			s.prop5 = "globalhotel detail page";
			if (typeof(trackingOBJ) != "undefined" && typeof (trackingOBJ.oNoResults) != "undefined") {
				if(trackingOBJ.oNoResults == "1"){
					s.events = "event21," + s.events; //NoResult
				}
			}
			// if (typeof(trackingOBJ) != "undefined" && typeof (trackingOBJ.oPageType) != "undefined") {
				// s.evar31 = "intlh-detail1218-" + trackingOBJ.oPageType;
			// }
			if(s.getElongOCityIDVal()){
				s.prop9 = s.eVar26 = 'intl-'+ s.getElongOCityIDVal();
			}
			if(s.getElongOHotelIDVal()){
				s.eVar22 = 'intl-' + s.getElongOHotelIDVal();
				s.products = ";"+s.getElongOHotelIDVal()+";;;;";
			}
			if(typeof(s._intlhlist) == "undefined") {
				s._intlhlist = s.getAndPersistValue(0,'s_ih_per',0);
			}
			if(s._intlhlist.indexOf(s.eVar22)<0) {
				s.eVar10 = '+1';
			}
			s._intlhlist = s.apl(s._intlhlist,'intl-' + s.getElongOHotelIDVal(),',',2);
			s._intlhlist = s.getAndPersistValue(s._intlhlist,'s_ih_per',0);

		}
		else if (s.pageName.indexOf("/search/") > 0)
		{
			s.prop5 = "globalhotel geo city page";
		}
		else if (s.pageName.indexOf("/index_") > 0 || s.pageName == "globalhotel.elong.com")
		{
			s.prop5 = "globalhotel home page";
		}
		else if (s.pageName.indexOf("florder") > 0)
		{
			s.events = "event9,event25," + s.events; //booker
			s.prop4 = "actual globalhotel booker";
			s.prop5 = "globalhotel book page";
			//s.eVar26 = 'intl-' + s.getElongOCityIDVal();
			//s.eVar22 = 'intl-' + s.getElongOHotelIDVal();
		}
		else if (s.pageName.indexOf("creditcardpay") > 0)
		{
			s.events = "event11," + s.events; //confirmer
			s.prop4 = "actual globalhotel payer";
			s.prop5 = "globalhotel pay page";
		}
		else if (s.pageName.indexOf("fhorder") > 0)
		{
			s.events = "event12,event26," + s.events; //purchaser
			s.prop4 = "actual globalhotel purchaser";
			s.prop5 = "globalhotel puchase page";
			//s.eVar26 = 'intl-' + s.getElongOCityIDVal()
			if(s.getElongOHotelIDVal()) {
				s.eVar22 = 'intl-' + s.getElongOHotelIDVal();
				s.products = ";"+s.getElongOHotelIDVal()+";;;;";
			}
		}
		else if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oPageName.indexOf("googlemap") > -1)
		{
			s.events = "event27," + s.events;
			s.prop5 = 'globalhotel hotelmap';
			if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oMapType.indexOf("detail") > -1)
			{
				s.prop5 += ' detail';
			}
			else if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oMapType.indexOf("list") > -1)
			{
				s.prop5 += ' list';
			}
			if(s.getElongOCityIDVal()){
				s.prop9 = s.eVar26 = 'intl-'+ s.getElongOCityIDVal();
			}
			if(s.getElongOHotelIDVal()){
				s.eVar22 = 'intl-' + s.getElongOHotelIDVal();
			}
		}
		else if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oPageName != "" && trackingOBJ.oPageName.toLowerCase().indexOf("seotheme") >= 0)
		{
			s.prop5 = "globalhotel seo-lp page";
		}
		else if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oPageName != "" && trackingOBJ.oPageName.toLowerCase().indexOf("promotion") >= 0)
		{
			s.prop5 = "globalhotel promo page";
		}
		else if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oPageName != "" && trackingOBJ.oPageName.toLowerCase() == "maporder")
		{
			s.prop5 = "globalhotel map page";
			if(s.getElongOCityIDVal()){
				s.prop9 = s.eVar26 = 'intl-'+ s.getElongOCityIDVal();
			}
		}
		else if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oPageName != "" && trackingOBJ.oPageName.toLowerCase() == "ihotel h5fillorder page")
		{
			s.prop5 = "globalhotel h5fillorder page";
		}
		else
		{
			s.prop5 = "else globalhotel page";
		}
		if(bind_OM == "UNDO"){
	    	BindCustomerEvent_OM(s.prop5);
	    	bind_OM = "DONE";
		}
	}
	else if (s.channel == "gongyu")
	{
		s.prop5 = s.getElongOPageNameVal() == "" ? "else gongyu page" : s.getElongOPageNameVal();
	}
	else if (s.channel == "train") {
		s.prop5 = s.getElongOPageNameVal() == "" ? "else train page" : s.getElongOPageNameVal();
	}
	else if (s.channel == "ihotel")
	{
		s.prop5 = s.getElongOPageNameVal() == "" ? "else ihotel page" : s.getElongOPageNameVal();

		if (typeof (trackingOBJ.oNoResults) != "undefined" && trackingOBJ.oNoResults == "1") {
			s.prop5 = "ihotel list no results";
		}

		if (s.prop5 == "ihotel detail page" && s.getQueryParam("type") == "self") {
			s.prop5 = "ihotel detail elongonly";
		}

		if(s.getElongOCityIDVal()){
			s.prop9 = s.eVar26 = 'intl-'+ s.getElongOCityIDVal();
		}

		if(s.getElongOHotelIDVal()){
			s.eVar22 = 'intl-' + s.getElongOHotelIDVal();
			s.products = ";"+s.getElongOHotelIDVal()+";;;;";
		}

		if(bind_OM == "UNDO"){
	    	BindCustomerEvent_OM(s.prop5);
	    	bind_OM = "DONE";
		}

	}
	else if (s.channel == "hzypms")
	{
		s.prop5 = s.getElongOPageNameVal() == "" ? "else hzypms page" : s.getElongOPageNameVal();
	}
	else if(s.channel=="flights")
	{
		// s.eVar6="actual flight visitor";
		s.prop5 = s.getElongOPageNameVal().toLowerCase() == "" ? "else flight page" : s.getElongOPageNameVal();

		if (s.prop5 == "FlightOneWayList" || s.prop5 == "FlightRoundtripList") {
			s.events = "event8," + s.events;
			s.prop4 = "actual flight shopper";
		} else if (s.prop5 == "FlightOrderFill") {
			s.events = "event9," + s.events;
			s.prop4 = "actual flight booker";
			s.eVar6 = s.getElongOIsUpgraded();
		} else if (s.prop5 == "FlightOrderConfirm") {
			s.events = "event11," + s.events;
			s.prop4 = "actual flight confirmer";
		} else if (s.prop5 == "FlightOrderSuccess") {
			s.events = "event12," + s.events;
			s.prop4 = "actual flight purchaser";
		}
	}

	else if(s.channel=="iflights")
	{
		// s.eVar6 = "actual iflight visitor";
		s.prop5 = s.getElongOPageNameVal() == "" ? "else iflight page" : s.getElongOPageNameVal();

		if (s.prop5 == "iFlightList") {
			s.events = "event8," + s.events;
			s.prop4 = "actual iflight shopper";
		} else if (s.prop5 == "iFlightOrderFill") {
			s.events = "event9," + s.events;
			s.prop4 = "actual iflight booker";
		} else if (s.prop5 == "iFlightOrderConfirm") {
			s.events = "event11," + s.events;
			s.prop4 = "actual iflight confirmer";
		} else if (s.prop5 == "iFlightOrderFinish") {
			s.events = "event12," + s.events;
			s.prop4 = "actual iflight purchaser";
		}
	}

	else if(s.channel=="package")
	{
		if(s.pageName.indexOf("packproductlist")>0 || s.pageName.indexOf("packsearch")>0)
		{
			s.events="event8," +s.events;  //Shopper
    	s.prop4="actual package shopper";
    	s.prop5="package list page";
    }
    else if(s.pageName.indexOf("packfill")>0)
	  {
	  	s.events="event9," +s.events;  //booker
	    s.prop4="actual package booker";
	    s.prop5="package book page";
	  }
	}
  else if(s.channel=="myelong")
	{
		if(s.pageName.indexOf("userReg")>0)
		{
			s.prop4="register";
		}
		else if(s.pageName.indexOf("GrouponOrder")>0)
		{
			s.prop4="tuan";
		}
		else if(s.pageName.indexOf("FlightOrder")>0)
		{
			s.prop4="flight myelong page";
		}
    s.prop5 = "myelong page";
	}

	else if(s.channel=="tuan")
	{
		if(s.pageName== "tuan.elong.com")
		{
			s.prop5="tuan home page";
		}
		else if((s.getElongOPageNameVal().toLowerCase()=="groupondetailpage") || (s.getElongOPageNameVal().toLowerCase()=="groupondetailpage20121016"))
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual tuan shopperr";
			s.prop5="tuan detail page";
			if(s.getElongOPageNameVal().toLowerCase()=="groupondetailpage20121016")
			{
				s.prop5="tuan detail page 20121016";
			}
		}
		else if (s.getElongOPageNameVal().toLowerCase() == "grouponkuaijiepage") {
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual tuan shopper";
			s.prop5="tuan kuaijie page";
		}
		else if(s.pageName.indexOf("index")>0 || s.pageName == "tuan.elong.com/all" || s.pageName.indexOf("_jiudian_tuangou")>0)
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual tuan shopper";
			s.prop5="tuan list page";
		}
		else if(s.pageName.indexOf("fillorder_cn")>0)
		{
		s.events="event9," +s.events;  //booker
	    s.prop4="tuan hotel booker";
	    s.prop5="tuan book page";
		}
		else if(s.pageName.indexOf("pastgroup")>0)
		{
	    s.prop4="tuan pastgroup page";
	    s.prop5="tuan pastgroup page";
		}
		else if(s.pageName.indexOf("finishorder")>0)
		{
	  	s.events="event12," +s.events;  //purchaser
	    s.prop4="actual tuan purchaser";
	    s.prop5="tuan puchase page";
		}
		else if(trackingOBJ.oPageName.toLowerCase()=="grouponotherredirect")
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual xianshiqiang shopper";
			s.prop5="group on other redirect page";
		} else
		{
			s.prop5="else tuan page";
		}

		s.prop9=s.getElongOCityIDVal();
		// s.eVar31 = s.getElongRankType();
	}

	else if(s.channel=="bid")
	{
		if(s.pageName == "bid.elong.com")
		{
			s.prop5="bid home page";
		}
		else if(s.pageName.indexOf("hotels")>0)
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual bid shopper";
			s.prop5="bid list page";
		}
		else if(s.pageName.indexOf("inputorder")>0)
		{
		s.events="event9," +s.events;  //booker
	    s.prop4="actual bid booker";
	    s.prop5="bid book page";
		}
		else if(s.pageName.indexOf("finishorder")>0)
		{
	  	s.events="event12," +s.events;  //purchaser
	    s.prop4="actual bid purchaser";
	    s.prop5="bid puchase page";
		}
		else
		{
			s.prop5="else bid page";
		}
	}

	else if(s.channel=="huixuan")
	{
		if(s.pageName == "huixuan.elong.com")
		{
			s.prop5="huixuan home page";
		}
		else if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oPageName != ""
			&& trackingOBJ.oPageName.toLowerCase().indexOf("opaquelist") >= 0)
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual huixuan shopper";
			s.prop5="huixuan list page";
		}
		else if(s.pageName.indexOf("-hotel")>0)
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual huixuan shopper";
			s.prop5="huixuan detail page";
		}
		else if(s.pageName.indexOf("florder_")>0)
		{
			s.events="event9," +s.events;  //booker
			s.prop4="actual huixuan booker";
			s.prop5="huixuan book page";
		}
		else if(s.pageName.indexOf("fhorder_")>0)
		{
			s.events="event12," +s.events;  //purchaser
			s.prop4="actual huixuan purchaser";
			s.prop5="huixuan puchase page";
		}
		else
		{
			s.prop5="else huixuan page";
		}
	}

	else if(s.channel=="xianshiqiang")
	{
		if(s.getElongOPageNameVal().toLowerCase()=="qiangindex")
		{
			s.prop5="xianshiqiang home page";
		}
		else if(trackingOBJ.oPageName.toLowerCase()=="qianglist")
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual xianshiqiang shopper";
			s.prop5="xianshiqiang list page";
		}
		else if(trackingOBJ.oPageName.toLowerCase()=="brandlist")
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual xianshiqiang shopper";
			s.prop5="Brand list page";
		}
		else
		{
			s.prop5="else huixuan page";
		}
	}

	else if(s.channel=="longcui")
	{
		if(s.getElongOPageNameVal().toLowerCase()=="longcuiindex")
		{
			s.prop5="longcui hotel home page";
		}
		else if(s.getElongOPageNameVal().toLowerCase()=="longcuilist")
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual longcui hotel shopper";
			s.prop5="longcui hotel list page";
		}
		else if(s.getElongOPageNameVal().toLowerCase()=="longcuihoteldetail")
		{
			s.events="event8," +s.events;  //Shopper
			s.prop4="actual longcui hotel shopper";
			s.prop5="longcui hotel detail page";
		}
		else if(s.getElongOPageNameVal().toLowerCase()=="fillorder")
		{
			s.events="event9," +s.events;  //booker
			s.prop4="actual longcui hotel booker";
			s.prop5="longcui hotel book page";
		}
		else if(s.getElongOPageNameVal().toLowerCase()=="hotelordersuccess")
		{
			s.events="event12," +s.events;  //purchaser
			s.prop4="actual longcui hotel purchaser";
			s.prop5="longcui hotel puchase page";
		}
		else
		{
			s.prop5="else longcui hotel page";
		}
	}

	else if(s.channel=="triplvyou")
	{
		s.prop14 = s.getElongSubChannel(location.href);
	}

	else if(s.channel == "elonghomepage")
	{
		s.prop5 = "elong home page"
		if(bind_OM == "UNDO"){
	    	BindCustomerEvent_OM(s.prop5);
	    	bind_OM = "DONE";
		}
	} else if (s.channel == "hotelhomepage") {
		s.prop5 = "hotel home page";
	} else if (s.channel == "hotelnoncooppage") {
		s.prop5 = "hotel noncoop page";
		if(bind_OM == "UNDO"){
	    	BindCustomerEvent_OM(s.prop5);
	    	bind_OM = "DONE";
		}
	} else if (s.channel == "go360hotels" || s.channel == "2345hotels") {
		s.prop5 = s.getElongOPageNameVal().toLowerCase();
	}

	var eventLength = s.events.length;
	if(eventLength >1 && s.events.substring(eventLength-1,eventLength) == ",")
	{
		s.events = s.events.substring(0,eventLength-1);
	}
	// ended code by for Booking Funnel
	//analyst error page
	if(typeof(trackingOBJ) != "undefined" && trackingOBJ.oPageName != "")
	{
		if(trackingOBJ.oPageName.toLowerCase().indexOf("error") >= 0)
		{
			s.prop12 = trackingOBJ.oPageName + "_" + s.pageName;
		}
	}
}
s.doPlugins=s_doPlugins;
/************************** PLUGINS SECTION *************************/

/* You may insert any plugins you wish to use here.                 */
/*
/*
 * Plugin: getElongProducts ,getElongReservNo, getEvents . Elong Team Add
 */
/* getValOnce 0.2 - get a value once per session or number of days  */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
s.getOrderFrom = function()
{
	var valOrderFrom = "invalid";
	if(typeof(trackingOBJ) != "undefined")
	{
		if(typeof(trackingOBJ.oOrderFromId) != "undefined" && trackingOBJ.oOrderFromId != "")
		{
			valOrderFrom = trackingOBJ.oOrderFromId;
		}
		else
		{
			valOrderFrom = "invalidval";
		}
	}

	if (valOrderFrom.indexOf("invalid")>-1){ //get orderfromid from cookie if there is no value present on the page
		var cookieVal = s.get_cookie('com.eLong.CommonService.OrderFromCookieInfo');
		if(!!cookieVal){
			valOrderFrom = cookieVal.substring(cookieVal.indexOf("Pkid=")+5, cookieVal.indexOf("&"));
		}
	}
	return valOrderFrom;
};

s.getCard = function() {
	var cookieVal = s.get_cookie('member'); //get card no. from cookie
	if(!!cookieVal){
		valCard = cookieVal;
		return valCard;
	}
};

s.get_cookie=function(cookname) {
    var a = document.cookie.match("(^|;)?" + cookname + "=([^;]*)(;|$)");
    if (a) {
        return (unescape(a[2]))
    } else {
        return null
    }
};

s.getElongProducts = function()
{
	var productStr = "";
	if(typeof(trackingOBJ) != "undefined")
	{
		if(typeof(trackingOBJ.oReserveNo) != "undefined" && trackingOBJ.oReserveNo != "")
		{
			productStr = trackingOBJ.oHotelID + ";" + trackingOBJ.oHotelName + ";" + trackingOBJ.oRoomNum + ";" + trackingOBJ.oPrice;
		}
		else if(typeof(trackingOBJ.oOrderCode) != "undefined" && trackingOBJ.oOrderCode != "")
		{
			var airProductName = trackingOBJ.oDepartCityName + trackingOBJ.oArriveCityName + trackingOBJ.oFirst_DepartCityName + trackingOBJ.oFirst_ArriveCityName;
			airProductName += trackingOBJ.oSecond_DepartCityName + trackingOBJ.oSecond_ArriveCityName;
			productStr = trackingOBJ.oFlightType + ";" + airProductName + ";" + trackingOBJ.oIsDirectBooking + ";" + trackingOBJ.oPayOrderMoney;
		}
	}
	return productStr;
};

s.getElongProductList = function()
{
	var productStr = "";
	if(typeof(trackingOBJ) != "undefined")
	{
		if(typeof(trackingOBJ.oHotelIdList) != "undefined" && trackingOBJ.oHotelIdList != "")
		{
			productStr = trackingOBJ.oHotelIdList;
		}
	}
	return productStr;
};

s.getElongReservNo = function()
{
	var reserveNo = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oReserveNo) != "undefined")
	{
		reserveNo = trackingOBJ.oReserveNo;
	}
	else if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oOrderCode) != "undefined")
	{
		reserveNo = trackingOBJ.oOrderCode;
	}
	return reserveNo;
};
s.getElongOHotelIDVal = function()
{
	var oHotelIDVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oHotelID) != "undefined")
	{
		oHotelIDVal = trackingOBJ.oHotelID;
	}
	return oHotelIDVal;
};
s.getElongOCityIDVal = function()
{
	var oCityIDVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oCityId) != "undefined")
	{
		oCityIDVal = trackingOBJ.oCityId;
	}
	return oCityIDVal;
};
/*
s.getElongRankType = function()
{
	var oRankTypeVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oRankType) != "undefined")
	{
		oRankTypeVal = trackingOBJ.oRankType;
	}
	return oRankTypeVal;
};
*/
s.getElongOIsUpgraded = function() {
	var oIsUpgraded = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oIsUpgraded) != "undefined")
	{
		oIsUpgraded = trackingOBJ.oIsUpgraded;
	}
	return oIsUpgraded;
};
s.getElongOPaymentType = function()
{
	var oPaymentTypeVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oPaymentType) != "undefined")
	{
		oPaymentTypeVal = trackingOBJ.oPaymentType;
	}
	return oPaymentTypeVal;
}

s.getElongDetailCityIDVal = function()
{
	var detailCityIDVal = "";
	if(document.getElementById("InCityName_input") != null)
	{
		detailCityIDVal = document.getElementById("InCityName_input").value;
	}
	return detailCityIDVal;
};
s.getElongOClientGuidVal = function()
{
	var oClientGuidVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oClientGuid) != "undefined")
	{
		oClientGuidVal = trackingOBJ.oClientGuid;
	}
	return oClientGuidVal;
};
s.getElongOImpressionGuidVal = function()
{
	var oImpressionGuidVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oImpressionGuid) != "undefined")
	{
		oImpressionGuidVal = trackingOBJ.oImpressionGuid;
	}
	return oImpressionGuidVal;
};
s.getElongOServerTimeVal = function()
{
	var oServerTimeVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oServerTime) != "undefined")
	{
		oServerTimeVal = trackingOBJ.oServerTime;
	}
	return oServerTimeVal;
};

s.getElongOPageNameVal = function()
{
	var oPageNameVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oPageName) != "undefined")
	{
		oPageNameVal = trackingOBJ.oPageName;
	}
	return oPageNameVal;
};

s.getElongOWebChannelVal = function()
{
	var oWebChannelVal = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oWebChannel) != "undefined")
	{
		oWebChannelVal = trackingOBJ.oWebChannel;
	}
	return oWebChannelVal;
};

s.getElongOMVT1Val = function()
{
	var oMVT1Val = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT1) != "undefined")
	{
		oMVT1Val = trackingOBJ.oMVT1;
	}
	return oMVT1Val;
};

s.getElongOMVT2Val = function()
{
	var oMVT1Va2 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT2) != "undefined")
	{
		oMVT1Va2 = trackingOBJ.oMVT2;
	}
	else if (s.getQueryParam("oMVT2") != null && s.getQueryParam("oMVT2") != "") {
		oMVT1Va2 = s.getQueryParam("oMVT2");
	}
	return oMVT1Va2;
};


s.getElongOMVT3Val = function()
{
	var oMVT1Va3 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT3) != "undefined")
	{
		oMVT1Va3 = trackingOBJ.oMVT3;
	}
	return oMVT1Va3;
};

s.getElongOMVT4Val = function()
{
	var oMVT1Va4 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT4) != "undefined")
	{
		oMVT1Va4 = trackingOBJ.oMVT4;
	}
	return oMVT1Va4;
};


s.getElongOMVT5Val = function()
{
	var oMVT1Va5 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT5) != "undefined")
	{
		oMVT1Va5 = trackingOBJ.oMVT5;
	}
	return oMVT1Va5;
};

s.getElongOMVT6Val = function()
{
	var oMVT1Va6 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT6) != "undefined")
	{
		oMVT1Va6 = trackingOBJ.oMVT6;
	}
	return oMVT1Va6;
};

s.getElongOMVT7Val = function()
{
	var oMVT1Va7 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT7) != "undefined")
	{
		oMVT1Va7 = trackingOBJ.oMVT7;
	}
	return oMVT1Va7;
};

s.getElongOMVT8Val = function()
{
	var oMVT1Va8 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT8) != "undefined")
	{
		oMVT1Va8 = trackingOBJ.oMVT8;
	}
	return oMVT1Va8;
};

s.getElongOMVT9Val = function()
{
	var oMVT1Va9 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT9) != "undefined")
	{
		oMVT1Va9 = trackingOBJ.oMVT9;
	}
	return oMVT1Va9;
};

s.getElongOMVT10Val = function()
{
	var oMVT1Va10 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT10) != "undefined")
	{
		oMVT1Va10 = trackingOBJ.oMVT10;
	}
	return oMVT1Va10;
};

s.getElongOMVT11Val = function()
{
	var oMVT1Va11 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT11) != "undefined")
	{
		oMVT1Va11 = trackingOBJ.oMVT11;
	}
	else if (s.getQueryParam("oMVT11") != null && s.getQueryParam("oMVT11") != "") {
		oMVT1Va11 = s.getQueryParam("oMVT11");
	}
	return oMVT1Va11;
};

s.getElongOMVT12Val = function()
{
	var oMVT1Va12 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT12) != "undefined")
	{
		oMVT1Va12 = trackingOBJ.oMVT12;
	}
	return oMVT1Va12;
};

s.getElongOMVT13Val = function()
{
	var oMVT1Va13 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT13) != "undefined")
	{
		oMVT1Va13 = trackingOBJ.oMVT13;
	}
	return oMVT1Va13;
};

s.getElongOMVT14Val = function()
{
	var oMVT1Va14 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT14) != "undefined")
	{
		oMVT1Va14 = trackingOBJ.oMVT14;
	}
	return oMVT1Va14;
};

s.getElongOMVT15Val = function()
{
	var oMVT1Va15 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT15) != "undefined")
	{
		oMVT1Va15 = trackingOBJ.oMVT15;
	}
	return oMVT1Va15;
};

s.getElongOMVT16Val = function()
{
	var oMVT1Va16 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT16) != "undefined")
	{
		oMVT1Va16 = trackingOBJ.oMVT16;
	}
	return oMVT1Va16;
};

s.getElongOMVT17Val = function()
{
	var oMVT1Va17 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT17) != "undefined")
	{
		oMVT1Va17 = trackingOBJ.oMVT17;
	}
	return oMVT1Va17;
};

s.getElongOMVT18Val = function()
{
	var oMVT1Va18 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT18) != "undefined")
	{
		oMVT1Va18 = trackingOBJ.oMVT18;
	}
	return oMVT1Va18;
};

s.getElongOMVT19Val = function()
{
	var oMVT1Va19 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT19) != "undefined")
	{
		oMVT1Va19 = trackingOBJ.oMVT19;
	}
	return oMVT1Va19;
};

s.getElongOMVT20Val = function()
{
	var oMVT1Va20 = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oMVT20) != "undefined")
	{
		oMVT1Va20 = trackingOBJ.oMVT20;
	}
	return oMVT1Va20;
};


s.getElongOPOIVal = function()
{
	var oPoi = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oPoi) != "undefined")
	{
		oPoi = trackingOBJ.oPoi;
	}
	return oPoi;
};

s.getElongOHNAME = function()
{
	var oHName = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oHName) != "undefined")
	{
		oHName = trackingOBJ.oHName;
	}
	return oHName;
};

s.getElongOAIO = function()
{
	var oAio = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oAio) != "undefined")
	{
		oAio = trackingOBJ.oAio;
	}
	return oAio;
};

s.getElongOSUGGSTION = function()
{
	var suggstion = "";
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.suggstion) != "undefined")
	{
		suggstion = trackingOBJ.suggstion;
	}
	return suggstion;
};


s.getElongOLatency = function() {
	var latency = "";
	if (typeof(trackingOBJ) != "undefined" && typeof (trackingOBJ.oLatency) != "undefined") {
		latency = trackingOBJ.oLatency;
	}
	return latency;
}

s.getElongOFlight = function() {
	var flight = "";
	if (typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oDepartCityName) != "undefined" && typeof(trackingOBJ.oArriveCityName) != "undefined") {
		flight = trackingOBJ.oDepartCityName + "-" + trackingOBJ.oArriveCityName;
	}
	return flight;
}

s.AnalystSEKW = function(strHost,refUrl,strTarget)
{
	var keyword = "";
	if(strHost.indexOf("_bd_")>=0 && refUrl.indexOf("wd=")>=0)
	{
		keyword = "bd_" + getKeyword(refUrl,"wd=");
	}
	else if(strHost.indexOf("_gg_")>=0 && refUrl.indexOf("q=")>=0)
	{
		keyword = "gg_" + getKeyword(refUrl,"q=");
	}
	else if(strHost.indexOf("_ss_")>=0 && refUrl.indexOf("w=")>=0)
	{
		keyword = "ss_" + getKeyword(refUrl,"w=");
	}
	else if(strHost.indexOf("_sg_")>=0 && refUrl.indexOf("query=")>=0)
	{
		keyword = "sg_" + getKeyword(refUrl,"query=");
		if(strTarget.toLowerCase().indexOf("elong@sogou.com") > 0)
		{
			keyword += "_Ex";
		}
	}
	else if(strHost.indexOf("_yd_")>=0 && refUrl.indexOf("q=")>=0)
	{
		keyword = "yd_" + getKeyword(refUrl,"q=");
	}
	return keyword;
};
s.AnalystSE = function(refUrl,strTarget)
{
	var SEResult = refUrl;
	if(refUrl.indexOf("?")>=0)
	{
		SEResult = SEResult.replace(/http:\/\//g,'').split("/")[0];
	}
	if(refUrl.indexOf(".baidu.")>=0)
	{
		SEResult+="_bd_";
	}
	else if(refUrl.indexOf(".google.")>=0)
	{
		SEResult+="_gg_";
	}
	else if(refUrl.indexOf(".soso.")>=0)
	{
		SEResult+="_ss_";
	}
	else if(refUrl.indexOf(".sogou.")>=0)
	{
		SEResult+="_sg_";
	}
	else if(refUrl.indexOf(".youdao.")>=0)
	{
		SEResult+="_yd_";
	}
	if(strTarget.indexOf("ef_id")>=0 ||strTarget.indexOf("semid")>=0||strTarget.indexOf("banid")>=0)
	{
		SEResult += "_SEM";
	}
	else
	{
		SEResult += "_SEO";
	}
	return SEResult;
};
/* You may insert any plugins you wish to use here.                 */
/*
/*
 * Plugin: getQueryParam 1.1 - Return query string parameter values
 */
s.getPathFromUrl = function(str){
	if(str.length < 3 || str.indexOf("/") < 1)
	{
		return "direct";
	}
	return str.substring(0,str.lastIndexOf("/"));
};

s.getQueryParam=new Function("qp","d",""
+"var s=this,v='',d=d?d:'',i,t;while(qp){i=qp.indexOf(',');i=i<0?qp.l"
+"ength:i;t=s.gcgi(qp.substring(0,i));if(t)v+=v?d+t:t;qp=qp.substring"
+"(i==qp.length?i:i+1)}return v");
s.gcgi=new Function("k",""
+"var v='',s=this;if(k&&s.wd.location.search){var q=s.wd.location.sea"
+"rch.toLowerCase(),qq=q.indexOf('?');q=qq<0?q:q.substring(qq+1);v=s."
+"pt(q,'&','cgif',k.toLowerCase())}return v");
s.cgif=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),sk=i<0?t:t.substring(0,i),sv=i<0?"
+"'True':t.substring(i+1);if(sk.toLowerCase()==k)return s.epa(sv)}ret"
+"urn ''");

/* * Copyright 2011-2013 Adobe Systems, Inc. * s_getLoadTime v1.36 - Get page load time in units of 1/10 seconds */
s.getLoadTime=function(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT}

/*
 * Plugin: getElongPageName 1.0 (dmk) - Return a page name based on
 * custom Elong business rules
 */
s.getElongPageName=function(url,host)
{
	var pageHost='',
	pagePath='',
	pageFile='',
	pageQual='';
	var lcHost=host.toLowerCase();
	var lcUrl=url.toLowerCase();
	if(location.search!=''&&lcUrl.indexOf(location.search.toLowerCase())!=-1)
	{
		lcUrl=lcUrl.substring(0,lcUrl.indexOf(location.search.toLowerCase()));
	}
	if(lcUrl.indexOf(lcHost)+lcHost.length+1==lcUrl.length&&lcUrl.lastIndexOf('/')+1==lcUrl.length||lcUrl.indexOf(lcHost+'/default.asp')!=-1||lcUrl.indexOf(lcHost+'/index.asp')!=-1)
	{
		pageHost=lcHost;
		if(pageHost.indexOf('.cn')!=-1)
		{
			pageHost=pageHost.substring(0,pageHost.indexOf('.cn'));
		}
	}
	else
	{
		pageHost=lcHost;
	}
	var curPos=lcUrl.indexOf(lcHost)+lcHost.length;
	var nextPos=lcUrl.indexOf('/',curPos+1);
	while(nextPos!=-1)
	{
		pagePath=pagePath+'/'+lcUrl.substring(curPos+1,nextPos);
		curPos=nextPos;
		nextPos=lcUrl.indexOf('/',curPos+1);
	}
	if(pagePath.indexOf('#')>-1){
			pagePath=pagePath.substring(0,pagePath.indexOf('#'));
	}
	if(lcUrl.lastIndexOf('/')+1<lcUrl.length)
	{
		var page=lcUrl.substring(lcUrl.lastIndexOf('/')+1,lcUrl.length);
		if(!(page.indexOf('default.asp')!=-1||page.indexOf('index.asp')!=-1))
		{
			pageFile='/'+lcUrl.substring(lcUrl.lastIndexOf('/')+1,lcUrl.length);
		}
		if(pageFile.indexOf('#')>-1){
			pageFile=pageFile.substring(0,pageFile.indexOf('#'));
		}
	}

	if(s.getQueryParam('g'))
	{
		pageQual+=':'+s.getQueryParam('g');
	}
	if(s.getQueryParam('campaignid'))
	{
		pageQual+=':'+s.getQueryParam('campaignid');
	}
	else if(s.getQueryParam('campaign_id'))
	{
		pageQual+=':'+s.getQueryParam('campaign_id');
	}
	if(s.getQueryParam('class')){pageQual+=':return';}
	if(s.getQueryParam('hotelid')){pageQual+=':'+s.getQueryParam('hotelid');}
	if(s.getQueryParam('prodid')){pageQual+=':'+s.getQueryParam('prodid');}
	if(s.getQueryParam('fid')){pageQual+=':'+s.getQueryParam('fid');}
	if(s.getQueryParam('tid')){pageQual+=':'+s.getQueryParam('tid');}
	if(s.getQueryParam('uid')){pageQual+=':'+s.getQueryParam('uid');}
	if(s.getQueryParam('Rdrectreferer')){pageQual+=':entry';}
	return pageHost+pagePath+pageFile+pageQual;
};
s.getBrowser = function()
{
        var agent = navigator.userAgent;
        if (agent == undefined || agent == null) { return; }
        var browserArr = [/firefox\/(\d|\.)*/g, /chrome\/(\d|\.)*/g, /opera\/(\d|\.)*/g, /tencenttraveler (\d|\.)*/g, /maxthon (\d|\.)*/g, /360se/g, /se 2\.x/g, /msie (\d|\.)*/g];
        agent = agent.toLowerCase();
        for(var i = 0; i < browserArr.length; i++)
        {
            var result = agent.match(browserArr[i]);
            if(result != null && result.length > 0)
            {
                return result[0].replace(/ /g, "/");
            }
        }
        return null;
};
/*
 * Plugin: getElongChannel 1.0 (dmk) - Return a channel name based on
 * custom Elong business rules
 */
s.getElongChannel=function(url)
{
	var selfUrl=url.toString().toLowerCase();
	var host=location.host.toLowerCase();
	var val="";
	var lastp=selfUrl.indexOf(host)+host.length+1;
	var subUrl=selfUrl.substring(lastp,selfUrl.length);
	val=subUrl.substring(0,subUrl.indexOf('/'));
	if((val=="hotel" || host.indexOf("hotel.elong.")>=0))
	{
		if (selfUrl.indexOf("sourcetype=360")>=0) {
			val = "go360hotels";
		} else if (selfUrl.indexOf("sourcetype=2345")>=0) {
			val = "2345hotels";
		} else if (selfUrl.indexOf("hotel.elong.com/sign_")>=0) {
			val = "hotelnoncooppage";
		} else if (s.pageName == "hotel.elong.com") {
			val = "hotelhomepage";
		} else {
			val = "hotels";
		}
	}
	if(selfUrl.indexOf("big5.elong.com/gate/big5/hotel.elong.com") >= 0)
	{
		val = "hotels";
	}
	if(selfUrl.indexOf('hotel.elong.com/longcui') >= 0)
	{
		val = "longcui";
	}
	if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oWebChannel) != "undefined")
	{
		if(trackingOBJ.oWebChannel == "longcui")
		{
			val = "longcui";
		}
	}
	if((val=="globalhotel" || host.indexOf("globalhotel.elong.")>=0 || selfUrl.indexOf("globalhotel_p")>=0) && host.indexOf("my.elong.")==-1)  //ÕâÀï²»ÄÜ¸ÄÓÃelse if£¬ÒòÎªglobalhotelº¬ÁËhotel
	{
		if (selfUrl.indexOf('source=360')>=0) {
			val = "go360globalhotels";
		} else {
			val = "globalhotels";
		}
	}
	else if(val=="hotelreviews" || host.indexOf("dianping.elong.")>=0)
	{
		val = "dianping";
	}
	else if(val == "iflight" || host.indexOf("iflight.elong.")>=0)  //Õâ¸öÅÐ¶Ï±ØÐëÔÚflightÖ®ÉÏ¡£·ñÔò»áÈ«²¿Ëãµ½flightÃûÏÂ
	{
		val = "iflights";
	}
	else if(val=="flight" || host.indexOf("flight.elong.")>=0 || host.indexOf("air.elong.")>=0)
	{
		val = "flights";
	}
	else if(val=="mytrip" || val=="my" || host.indexOf("my.elong.")>=0)
	{
		val = "myelong";
	}
	else if(host.indexOf("tuan.elong.")>=0)
	{
		val = "tuan";
	}
	else if(host.indexOf("bid.elong.")>=0)
	{
		val = "bid";
	}
	else if(host.indexOf("huixuan.elong.")>=0)
	{
		val = "huixuan";
	}
	else if(host.indexOf("qiang.elong.")>=0)
	{
		val = "xianshiqiang";
	}
	else if(host.indexOf("jia.elong.")>=0)
	{
		val = "gongyu";
	}
	else if(host.indexOf("ihotel.elong.")>=0)
	{
		val = "ihotel";
	}
	else if(host.indexOf("train.elong.")>=0) {
		val = "train";
	}
	else if (host.indexOf("hzypms") >= 0)
	{
		val = "hzypms";
	}
	else if(host.indexOf("lvyou.elong.")>=0 || host.indexOf("trip.elong.")>=0)
	{
		val = "triplvyou";
	}
	else if(host.indexOf("secure.elong.")>=0 || host.indexOf("secure.elong.")>=0)
	{
		if(typeof(trackingOBJ) != "undefined" && typeof(trackingOBJ.oChannel) != "undefined")
		{
			switch(trackingOBJ.oChannel) {
				case "IHotel":
					val = "globalhotels";
					break;
				case "Hotel":
					val = "hotels";
					break;
				case "Flight":
					val = "flights";
					break;
				case "IFlight":
					val = "iflights";
					break;
				case "Bid":
					val = "bid";
					break;
				case "Opaque":
					val = "huixuan";
					break;
				case "IFlight":
					val = "iflights";
					break;
				default:
					val = 'secure';
					break;
			}
		}
	}
	else if(url == "http://www.elong.com/")
	{
		val = "elonghomepage"
	}

	return val;
};

s.getElongSubChannel=function(url)
{
	var selfUrl=url.toString().toLowerCase();
	var host=location.host.toLowerCase();
	var val="";
	var lastp=selfUrl.indexOf(host)+host.length+1;
	var subUrl=selfUrl.substring(lastp,selfUrl.length);
	val=subUrl.substring(0,subUrl.indexOf('/'));
	return val;
};

/*
 * Plugin Utilities v3.0 (Required For All Plugins)
 */
s.vpr=new Function("vs","v",
"var s=this,k=vs.substring(0,2)=='s_'?vs.substring(2):vs;s['vpv_'+k]="
+"v;s['vpm_'+k]=1");
s.dt=new Function("tz","t",
"var d=new Date;if(t)d.setTime(t);d=new Date(d.getTime()+(d.getTimezo"
+"neOffset()*60*1000));return new Date(Math.floor(d.getTime()+(tz*60*"
+"60*1000)))");
s.vh_gt=new Function("k","v",
"var s=this,vh='|'+s.c_r('s_vh_'+k),vi=vh.indexOf('|'+v+'='),ti=vi<0?"
+"vi:vi+2+v.length,pi=vh.indexOf('|',ti),t=ti<0?'':vh.substring(ti,pi"
+"<0?vh.length:pi);return t");
s.vh_gl=new Function("k",
"var s=this,vh=s.c_r('s_vh_'+k),e=vh?vh.indexOf('='):0;return vh?(vh."
+"substring(0,e?e:vh.length)):''");
s.vh_s=new Function("k","v",
"if(k&&v){var s=this,e=new Date,st=e.getTime(),y=e.getYear(),c='s_vh_"
+"'+k,vh='|'+s.c_r(c)+'|',t=s.vh_gt(k,v);e.setYear((y<1900?y+1900:y)+"
+"5);if(t)vh=s.rep(vh,'|'+v+'='+t+'|','|');if(vh.substring(0,1)=='|')"
+"vh=vh.substring(1);if(vh.substring(vh.length-1,vh.length)=='|')vh=v"
+"h.substring(0,vh.length-1);vh=v+'=[PCC]'+(vh?'|'+vh:'');s.c_w(c,vh,"
+"e);if(s.vh_gt(k,v)!='[PCC]')return 0;vh=s.rep(vh,'[PCC]',st);s.c_w("
+"c,vh,e)}return 1");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");
/*
 * Get visit start
 */
s.getVisitStart=new Function("c",""
+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
+")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");

/* WARNING: Changing the visitor namespace will cause drastic changes
to how your visitor data is collected.  Changes should only be made
when instructed to do so by your account manager.*/
s.visitorNamespace="elong";
s.trackingServer="elong.d2.sc.omtrdc.net"
};

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.24.3';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
+"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
+"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
+"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
+"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
+"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
+" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde"
+"fined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';"
+"s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa"
+"rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a"
+"pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd"
+"(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie"
+"=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s."
+"_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if("
+"x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return "
+"r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs"
+"oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi"
+"s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet"
+"('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun"
+"ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje"
+"ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p"
+"=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl"
+"(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window"
+".s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im."
+"s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if"
+"(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.na"
+"me&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg"
+"=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s"
+"=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCas"
+"e();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l"
+"=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.su"
+"bstring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f"
+"){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)"
+"&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)"
+"sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(s"
+"v)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk="
+"='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring("
+"0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv"
+"+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].tra"
+"ckEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.sub"
+"string(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';"
+"else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigra"
+"tionServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUp"
+"perCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='varia"
+"bleProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDep"
+"th')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connec"
+"tionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('"
+"c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else "
+"if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b="
+"='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=funct"
+"ion(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?"
+"t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=li"
+"f?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef'"
+",h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true"
+"');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||"
+"s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if"
+"(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.subs"
+"tring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toU"
+"pperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c"
+",n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),"
+"\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.s"
+"rc;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf('"
+",'+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&'"
+",'rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=functi"
+"on(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x i"
+"n s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q"
+"||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.leng"
+"th;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s"
+"=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'o"
+"nload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*="
+"100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,"
+"x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccoun"
+"tMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0"
+"?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substrin"
+"g(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in"
+"++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r"
+"._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._"
+"in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m."
+"_i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_"
+"l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if"
+"(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.lengt"
+"h;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+"
+"1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;"
+"b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.m"
+"axDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\""
+");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}r"
+"eturn o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};"
+"s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k]"
+"[x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)f"
+"or(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.d"
+"lt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250"
+";s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.ge"
+"tYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='"
+"',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&Str"
+"ing.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Funct"
+"ion('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'"
+"Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.doc"
+"umentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}cat"
+"ch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl"
+".length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight"
+"=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pag"
+"eURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,o"
+"c;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.ind"
+"exOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s."
+"linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o."
+"sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}"
+"else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s"
+".retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd"
+".s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.l"
+"ightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&"
+"&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s["
+"x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if"
+"(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLow"
+"erCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netsca"
+"pe6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netsc"
+"ape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s"
+".ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%"
+"C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,v"
+"isitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,"
+"retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s."
+"vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s."
+"vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaE"
+"nabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCo"
+"okieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlin"
+"eStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg="
+"pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=functio"
+"n(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
