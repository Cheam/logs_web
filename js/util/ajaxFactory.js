(function($, myWindow) {
	var $z = {
		LOGIN_FAIL_CODE: 101,
		PLEASELOGIN_CODE: 102,
		SUCCCSS_CODE: 200,
		FAIL_CODE: 500,
		/**
		 * 处理返回信息的公共方法
		 */
		dealCommonResult: function dealCommonResult(data, func) {

			if (data.code == $z.SUCCCSS_CODE) {
				func();
			} else if (data.code == $z.LOGIN_FAIL_CODE) {
				layer.alert("<em style='color:black'>用户名或密码错误</em>", {
					icon: 5,
					offset: "200px",
					title: '错误'
				});
			} else if (data.code == $z.PLEASELOGIN_CODE) {
				layer.alert("<em style='color:black'>请登录后再进行操作！</em>", {
					icon: 5,
					offset: "200px",
					title: '提示'
				});
				MprogressEnd();
			} else if (data.code == $z.FAIL_CODE) {
				layer.alert("<em style='color:black'>" + data.msg + "</em>", {
					icon: 5,
					offset: "200px",
					title: '错误'
				});
				MprogressEnd();
			}
		},
		// RequestBody接收 async(是否异步)
		ajaxStrAndJson: function ajaxStrAndJson(allData) {
			$.ajax({
				url: allData.url,
				type: "post",
				headers: {
					Accept: "application/json; charset=utf-8"
				},
				xhrFields: {
					withCredentials: true //允许发送cookie
				},
				crossDomain: true,
				async: allData.async,
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(allData.data),
				beforeSend: allData.beforeSend,
				success: allData.success,
				complete: function(XMLHttpRequest) {},
				error: function(data, status, e) {
					layer.alert("<em style='color:black'>服务器连接失败</em>", {
						icon: 5,
						offset: "200px",
						title: '错误'
					});
					MprogressEnd();
				}
			});
		},
		// 普通参数或对象接收
		ajaxFormAndJson: function ajaxFormAndJson(allData) {
			$.ajax({
				url: allData.url,
				type: "post",
				headers: {
					Accept: "application/json; charset=utf-8"
				},
				xhrFields: {
					withCredentials: true //允许发送cookie
				},
				crossDomain: true,
				async: allData.async,
				data: allData.data,
				beforeSend: allData.beforeSend,
				success: allData.success,
				complete: function(XMLHttpRequest) {},
				error: function(data, status, e) {
					layer.alert("<em style='color:black'>服务器连接失败</em>", {
						icon: 5,
						offset: "200px",
						title: '错误'
					});
					MprogressEnd();
				}
			});
		}
	};
	myWindow.$z = $z;
})(jQuery, window);
