import $ from 'jquery';
import kuidropdown from 'kendo-ui-core/js/kendo.dropdownlist.js';
import React from 'react';
import ReactDOM from 'react-dom';

const KendoDropDownList = React.createClass({
	componentDidMount: function() {

		//reference to the the node passed in, or a div. And, ref to node wrapped with jQuery
		var elementNode;
		var $elementNode;
		this.elementNode = elementNode = ReactDOM.findDOMNode(this);
		this.$elementNode = $elementNode = $(this.elementNode);

		//instantiate the Kendo UI widget
		$elementNode.kendoDropDownList(this.props.KendoOptions);

		//setup static references on Widget
		this.span = $elementNode.getKendoDropDownList().span
	},
	componentWillUnmount: function() {
		$(ReactDOM.findDOMNode(this)).getKendoDropDownList().destroy();
	},
	render: function() {
		return this.props.children ? this.props.children : <div/>;
	}
});

export default KendoDropDownList
