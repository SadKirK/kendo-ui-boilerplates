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

var App = React.createClass({
  getInitialState: function() {
    return {now: Date.now()};
  },

  componentDidMount: function() {
    var foo = setInterval(function() {
      this.setState({now: Date.now()});
    }.bind(this), 1000);

	setTimeout(function(){ clearInterval(foo); }, 1000);

  },

  render: function() {
	  return (
  		<div>
  			<KendoDropDownList kendoOptions={{dataSource:data, dataTextField: "text", dataValueField: "value"}} kendoMethods={{toggle:[]}} kendoEvents={{open:function(){console.log('open')}}} kendoUnbindEvents={{}}><input className="kendoDropDownList" /></KendoDropDownList>
			{this.state.now}
  			<KendoDropDownList>
  				<select>
  	                <option>S - 6 3/4"</option>
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
