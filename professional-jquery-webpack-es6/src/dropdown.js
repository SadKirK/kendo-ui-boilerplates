import $ from 'jquery';

//import allofKendoUICore from 'kendo';
//or just what you want to use:
import kuidropdown from 'kendo/js/kendo.dropdownlist.js';

//CSS
import 'kendo/css/web/kendo.common.core.min.css';
import 'kendo/css/web/kendo.default.min.css';

//Template
import dropdownTemplate from './dropdownTemplate.txt';

//data
import dropdownData from './dropdownData.json';

//dropdown code

const view = $('<select></select>').appendTo('body');

const dropdown = new kendo.ui.DropDownList(view,{
    template: kendo.template(dropdownTemplate),
    dataTextField: 'ContactName',
    dataValueField: 'CustomerID',
    dataSource: dropdownData
});

export {dropdown};
