/*!
 * Agile Notes 1.0
 *
 * Copyright 2013, Sihong Zhu and other contributors
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) version 2 licenses.
* This software is not distributed under version 3 or later of the GPL.
 *
 * http://agilemore.com/agilenotes
 */

(function( $, undefined ) {

$.widget( "an.listviewfield", $.an.field, {


	_create: function() {
		$.an.field.prototype._create.apply(this, arguments);
		this.element.addClass("an-listviewfield");
	},	

	_createControl : function() {
		var self = this, o = this.options, el = this.element;
		if (o.mobile) {
			var cl = this.element.find(".content").eq(0);
			var ul_element = $('<ul />').addClass('codiqa-control ui-listview').appendTo(cl);
			if(!o.label_theme){
				o.label_theme='b';
			}
			var label_li = $('<li />').addClass('ui-li ui-li-divider ui-bar-' + o.label_theme + ' ui-first-child').html(o.label).appendTo(ul_element);
			$.each(o.selectItems||[], function(k,v){
				button_li = $("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li' />").appendTo(ul_element);				
				$('<div class="ui-btn-inner ui-li" />').html('<div class="ui-btn-text"><a class="ui-link-inherit" >' + this.label + '</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow"> </span>')
														.appendTo(button_li);
														
				if(k==o.selectItems.length-1){
					button_li.addClass("ui-last-child");
				}
				
				if (!o.data_theme) {
					o.data_theme = 'c';
				}
				if (o.isInset) {
					ul_element.addClass("ui-listview-inset ui-corner-all ui-shadow");
				}
				button_li.addClass("ui-btn-up-" + o.data_theme);
				
				
				button_li.bind("click.listviewfield", function(e) {
					$(this).parent().find('.ui-btn-active').removeClass('ui-btn-active');
					$(this).addClass('ui-btn-active');
				});
				
			});						
		} 
	},
	
	_createLabel:function(){
		//this.element.find('label').remove();
		
	},

	_makeResizable : function() {
	},

	_browser : function() {
		//this.element.find('label').remove();
		//this.input.detach();
		/*var c = this.content;
		if (c.is(".ui-resizable")) c.resizable("destroy");
		c.html(this.options.value + "").css("display", "");*/
	},

	_edit : function() {
		//this.input.detach().val(this.options.value).appendTo(this.content.empty());
	},

	_design : function() {
		//this.input.detach();
		var self = this, o = this.options, c = this.content;
		if (c.is(".ui-resizable")) c.resizable("destroy");
		this.element.find('li').unbind();
		/*c.html(o.value + "").css({ width : o.width, height : o.height, display : "" }).resizable(
			{ stop : function(e, ui) {
				o.width = c.width();
				o.height = c.height();
				$.extend(true, o.metadata[self.widgetName], { width : o.width, height : o.height });
				self._updateMetadata();
				self._trigger("resize", null, { size : ui.size, oldSize : ui.originalSize });
			} });*/
	},



	/*highlight : function(highlight) {
		(this.options.mode == "edit" ? this.input : this.element).toggleClass("an-state-hover", highlight);
	},*/

	destroy : function() {
		//this.element.unbind(".listviewfield").remove();
		this.element.removeClass("an-listviewfield");
		return $.an.field.prototype.destroy.apply(this, arguments);
	} });
})( jQuery );