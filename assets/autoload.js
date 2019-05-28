try {
    $("<link>").attr({href: "/assets/waifu.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: "/assets/waifu-tips.js", dataType:"script", cache: true, success: function() {
        $.ajax({url: "/assets/live2d.js", dataType:"script", cache: true, success: function() {
            /* 可直接修改部分参数 */
            live2d_settings['hitokotoAPI'] = 'jinrishici.com'; // 一言 API
            live2d_settings['modelId'] = 2;                    // 默认模型 ID
            live2d_settings['modelTexturesId'] = 6;            // 默认材质 ID
            live2d_settings['modelStorage'] = false;           // 不储存模型 ID
            live2d_settings['canCloseLive2d'] = false;         // 隐藏 关闭看板娘 按钮
            live2d_settings['canTurnToHomePage'] = false;      // 隐藏 返回首页 按钮
            live2d_settings['waifuSize'] = '280x250';          // 看板娘大小
            live2d_settings['waifuTipsSize'] = '250x70';      // 提示框大小
            live2d_settings['waifuFontSize'] = '12px';         // 提示框字体
            live2d_settings['waifuEdgeSide'] = 'left:30';     // 看板娘贴边方向
            live2d_settings['waifuToolFont'] = '14px';         // 工具栏字体
            live2d_settings['waifuToolLine'] = '20px';         // 工具栏行高
            live2d_settings['waifuToolTop'] = '0px';         // 工具栏顶部边距
            live2d_settings['waifuDraggable'] = 'disable';      // 拖拽样式
            /* 在 initModel 前添加 */
			live2d_settings['modelId'] = 1;
			live2d_settings['modelTexturesId'] = 87;
			initModel('/assets/waifu-tips.json');
        }});
    }});
} catch(err) { console.log("[Error] JQuery is not defined.") }