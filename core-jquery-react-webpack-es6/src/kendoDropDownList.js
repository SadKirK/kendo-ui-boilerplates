import $ from 'jquery';
import kuidropdown from 'kendo-ui-core/js/kendo.dropdownlist.js';
import React from 'react';
import ReactDOM from 'react-dom';

const KendoDropDownList = React.createClass({
	componentDidMount: function() {
		//store reference to:
		//1. element node widget is invoked on
		//2. element node widget, wrapped with jQuery
		//3. instance of widget
		var elementNode, $elementNode, widgetInstance;
		this.elementNode = elementNode = ReactDOM.findDOMNode(this);
		this.$elementNode = $elementNode = $(elementNode);

		//instantiate the Kendo UI widget from props or one prop called kendoOptions
		$elementNode.kendoDropDownList(this.props.kendoOptions);

		//saved instance reference now that it is created
		this.widgetInstance = widgetInstance = $elementNode.getKendoDropDownList();

		//if props are avaliable for events, unbind events, or methods make it happen
		this.props.kendoEvents ? this.bindEventsToKendoWidget(this.props.kendoEvents) : null;
		this.props.kendoMethods ? this.callKendoWidgetMethods(this.props.kendoMethods) : null;
		this.props.kendoTriggerEvents ? this.triggerKendoWidgetEvents(this.props.kendoTriggerEvents) : null;
		this.props.kendoUnbindEvents ? this.unbindEventsToKendoWidget(this.props.kendoUnbindEvents) : null;
	},
	triggerKendoWidgetEvents:function(events){
		events.forEach(function(event){
			this.widgetInstance.trigger(event);
		}, this);
	},
	bindEventsToKendoWidget:function(events){
		Object.keys(events).forEach(function(event){
			this.widgetInstance.bind(event,events[event]);
		}, this);
	},
	unbindEventsToKendoWidget:function(events){
		events.forEach(function(event){
			this.widgetInstance.unbind(event);
		}, this);
	},
	callKendoWidgetMethods:function(methods){
		Object.keys(methods).forEach(function(method){
		    this.widgetInstance[method](...methods[method])
		}, this);
	},
	componentWillReceiveProps: function(newProps) {
	    console.log(newProps);
  	},
	shouldComponentUpdate: function(){
		return false;
	},
	componentWillUnmount: function() {
		$(ReactDOM.findDOMNode(this)).getKendoDropDownList().destroy();
	},
	render: function() {
		return this.props.children ? this.props.children : <div/>;
	}
});

export default KendoDropDownList
