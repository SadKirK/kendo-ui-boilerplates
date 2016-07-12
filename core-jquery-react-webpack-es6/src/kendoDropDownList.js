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

		//setup static references (i.e. fields) on Widget
		this.span = widgetInstance.span;
		console.log($elementNode.getKendoDropDownList());
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
