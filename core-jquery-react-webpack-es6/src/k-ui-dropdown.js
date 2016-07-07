import $ from 'jquery';
import kuidropdown from 'kendo-ui-core/js/kendo.dropdownlist.js';
import React from 'react';
import ReactDOM from 'react-dom';

const KendoDropDownList = React.createClass({
	componentDidMount: function() {
		//const { text, className, ...options } = this.props;
		$(ReactDOM.findDOMNode(this)).kendoDropDownList(this.props.options);
	},
	componentWillUnmount: function() {
		$(ReactDOM.findDOMNode(this)).getKendoDropDownList().destroy();
	},
	render: function() {
		return <input className="kendoDropDownList" /> ;
	}
});

export default KendoDropDownList
