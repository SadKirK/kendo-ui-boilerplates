import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';
import './app.css';

var data = [{
	text: "Item1",
	value: "1"
}, {
	text: "Item2",
	value: "2"
}, {
	text: "Item3",
	value: "3"
}];

//Kendo UI for jQuery Component
import KendoDropDownList from './k-ui-dropdown.js';

var App = function(){
    return (<div><KendoDropDownList options={{dataSource:data, dataTextField: "text", dataValueField: "value"}} /></div>);
}

ReactDOM.render(<App />, document.getElementById('app'));
