import React from 'react';
import ReactDOM from 'react-dom';

//Kendo UI for jQuery Component
import KendoDropDownList from './kendoDropDownList.js';

//CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';
import './app.css';

//Static Data
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

var fakeApropChange = '3';

var App = React.createClass({
  getInitialState: function() {
    return {now: Date.now()};
  },

  componentDidMount: function() {
	//demonstrate that state changes from above, means props can change and prop changes change widget
	var changeStateInterval = setInterval(function() {
		fakeApropChange = '2';
		this.setState({now: Date.now()});
	}.bind(this), 4000);

	setTimeout(function(){ clearInterval(changeStateInterval); }, 5000);
  },

  render: function() {
	  return (
  		<div>
  			<KendoDropDownList
				//only updates upon state change from above if widget supports setOptions()
				//don't define events here, do it in events prop
				options={{ //nothing new here, object of configuration options
					dataSource:data,
					dataTextField: "text",
					dataValueField: "value"
				}}
				//updates if object is different from initial mount
				methods={{ //name of method and array of arguments to pass to method
					open:[], //send empty array if no arguments
					value:[fakeApropChange]
				}}
				//Right now, always updates
				events={{ //name of event, and callback
					close:function(){console.log('dropdown closed')},
					select:function(){console.log('item selected')},
					open:function(){console.log('dropdown opened')}
				}}
				//updates if array is different from initial mount
				unbindEvents={[ //name of event to unbind, string
					"select"
				]}
				//updates if array is different from initial mount
				triggerEvents={[ //name of event to trigger, string
					"open",
				]}>
					<input className="kendoDropDownList" />
			</KendoDropDownList>
			&nbsp;&nbsp;&nbsp;
			<KendoDropDownList>
				<select>
					<option>S - 6 3/5"</option>
					<option>M - 7 1/4"</option>
					<option>L - 7 1/8"</option>
					<option>XL - 7 5/8"</option>
				</select>
			</KendoDropDownList>

  		</div>
  	);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));

{/*<KendoDropDownList>
	<select>
		<option>S - 6 3/4"</option>
		<option>M - 7 1/4"</option>
		<option>L - 7 1/8"</option>
		<option>XL - 7 5/8"</option>
	</select>
</KendoDropDownList>*/}
