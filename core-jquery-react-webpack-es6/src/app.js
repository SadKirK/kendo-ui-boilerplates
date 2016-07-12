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
import KendoDropDownList from './kendoDropDownList.js';

var App = function(){
    return (
		<div>
			<KendoDropDownList kendoOptions={{dataSource:data, dataTextField: "text", dataValueField: "value"}}><input className="kendoDropDownList" /></KendoDropDownList>

			<KendoDropDownList>
				<select>
	                <option>S - 6 3/4"</option>
	                <option>M - 7 1/4"</option>
	                <option>L - 7 1/8"</option>
	                <option>XL - 7 5/8"</option>
		        </select>
			</KendoDropDownList>

			<KendoDropDownList dataSource={data} dataTextField="text" dataValueField="value" />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
