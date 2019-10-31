/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox"],function(a,g){(function(){a.Pa("oj.ojCheckboxset",g.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:!1,value:void 0},refresh:function(){this._super();this.ab()},widget:function(){return this.nLa},Yf:function(b,d){var e=[],f;this._super(b,d);a.Ge.Ap([{ha:"disabled",Td:!0},{ha:"title"},{ha:"placeholder"},{ha:"required",xh:!0,Td:!0}],d,this);this.ug=this.HS();void 0===d.value&&
(f=this.ug.filter(":checked"),0<f.length&&(f.each(function(){e.push(g(this).val())}),this.option("value",e,{_context:{Ed:!0,nb:!0}})),void 0===this.options.value&&(this.options.value=[]))},_ComponentCreate:function(){this._super();if(this.element.is("fieldset"))throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");this.ug._ojRadioCheckbox();this.nLa=this.element.addClass("oj-checkboxset oj-component").attr("role","group").wrapInner("\x3cdiv class\x3d'oj-checkboxset-wrapper'\x3e\x3c/div\x3e");
this._on(this.uq);this.ab()},qQ:function(){this.ug=this.HS();this.ug.filter(".oj-checkbox").each(function(){var a=void 0!==g(this).attr("disabled")?!!g(this).prop("disabled"):!1;g(this)._ojRadioCheckbox("option","disabled",a)});this.ug.not(".oj-checkbox")._ojRadioCheckbox()},Focus:function(){this.Xf().first().focus();return!0},tQ:function(){},HS:function(){var b=this.element.find("input[type\x3dcheckbox]:first");0===b.length&&a.t.warn("Could not find any input type\x3dcheckbox within this element");
b=b.attr("name");return void 0===b?(b=this.element.find("input[type\x3dcheckbox]"),b.not("[name]")):this.element.find("input[type\x3dcheckbox][name\x3d"+b+"]")},qh:function(a,b,e){a=this.element.find("input[type\x3dcheckbox]:tabbable").first();this.rh(b,e,{launcher:a})},_GetMessagingLauncherElement:function(){return this.widget()},ab:function(){this.ft(this.options.disabled);null!==this.ug&&(1===this.ug.length?this.element.addClass("oj-checkboxset-single"):this.element.removeClass("oj-checkboxset-single"))},
uq:{change:function(a){this.hH(a)}},hH:function(a){var d;d=this.ug;0<d.length&&d.each(function(){this===a.target&&g(this)._ojRadioCheckbox("setSelectedClass",a.target.checked)});d=this.Ri();this.yc(d,a,b)},Ri:function(){return this.Yx()},Jl:function(a){var b=this.ug.length,e,f,h;for(f=0;f<b;f++){h=g(this.ug[f]);e=h[0].value;e=a.indexOf(e);var k=h._ojRadioCheckbox("option","checked");-1!==e?k||h._ojRadioCheckbox("option","checked",!0):k&&h._ojRadioCheckbox("option","checked",!1)}},Yx:function(){var a=
[],b=this.ug.filter(":checked");if(0===b.length)return[];b.each(function(){a.push(g(this).val())});return a},_GetDefaultStyleClass:function(){return"oj-checkboxset"},Xf:function(){if(null!=this.ug)return this.ug;this.HS()},nQ:function(){},IB:function(){return!0},ft:function(a){a=!!a;this.ug.each(function(){g(this).data("oj-_ojRadioCheckbox").eC(a)});this.ug._ojRadioCheckbox("refreshDisabled")},_setOption:function(a,b,e){this._super(a,b,e);"disabled"===a&&this.ft(b)},getNodeBySubId:function(a){var b=
this._super(a);return b||(a=a.subId,"oj-checkboxset-inputs"!==a)?b||null:this.ug.get()},_destroy:function(){var a=this._super(),b=this.element[0].firstChild;this.ug&&this.ug._ojRadioCheckbox("destroy");g(b).contents().unwrap();return a}});var b={Ew:!1}})();a.Components.Wa("ojCheckboxset","editableValue",{properties:{disabled:{type:"boolean"},value:{type:"Array"}},methods:{destroy:{},refresh:{},widget:{}},extension:{_widgetName:"ojCheckboxset"}});a.Components.register("oj-checkboxset",a.Components.getMetadata("ojCheckboxset"))});