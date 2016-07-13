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

var boo = '3';

//Kendo UI for jQuery Component
import KendoDropDownList from './kendoDropDownList.js';

var App = React.createClass({
  getInitialState: function() {
    return {now: Date.now()};
  },

  componentDidMount: function() {
    var foo = setInterval(function() {
			  boo = '2';
      this.setState({now: Date.now()});
  }.bind(this), 5000);

	setTimeout(function(){ clearInterval(foo); }, 5000);
  },

  render: function() {
	  return (
  		<div>
  			<KendoDropDownList
				//only updates upon state change from above if widget supports setOptions()
				options={{ //nothing new here, object of configuration options
					dataSource:data,
					dataTextField: "text",
					dataValueField: "value"
				}}
				//updates if object is different from initial mount
				methods={{ //name of method and array of arguments to pass to method
					open:[], //send empty array if no arguments
					value:[boo]
				}}
				//Right now, always updates
				events={{ //name of event, and callback
					close:function(){console.log('dropdown closed')},
					select:function(){console.log('item selected')},
					open:function(){console.log('dropdown opened')}
				}}
				//updates if object is different from initial mount
				unbindEvents={[ //name of event to unbind, string
					"select"
				]}
				//updates if object is different from initial mount
				triggerEvents={[ //name of event to trigger, string
					"open",
				]}>
					<input className="kendoDropDownList" />
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
