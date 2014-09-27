define(function (require, exports, module) {	var	$ = require('../lib/jquery-1.10.2.min');	/**	 * @exports base	 * @description base对象提供一些UI工具	 */	var _base = module.exports = {		/**		 *		 * @param {String|Array} id 模板的id		 * @returns {HtmlString} 模板字符串		 */		getInlineTpl: function (id) {			var idArr, result = [];			$.type(id)=='string' && (idArr = []) && idArr.push(id);			$.isArray(id) && (idArr = id);			$.each(idArr, function (index,item) {				result.push($('#'+item).html());			});			return result.join('');		},        toDom:function(html){            var div=document.createElement('div');            div.innerHTML=html;            return div.childNodes[0];        }	};});