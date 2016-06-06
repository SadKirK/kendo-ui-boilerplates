import $ from 'jquery';

//import allofKendoUICore from 'kendo-ui-core';
//or just what you want to use:
import kuidropdown from 'kendo-ui-core/js/kendo.dropdownlist.js';

//CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css!';
import 'kendo-ui-core/css/web/kendo.default.min.css!';

//Template
import dropdownTemplate from './dropdownTemplate.txt!text';

//data
import dropdownData from './dropdownData.json!json';

//dropdown code

const view = $('<select></select>').appendTo('body');

const dropdown = new kendo.ui.DropDownList(view,{
    template: kendo.template(dropdownTemplate),
    dataTextField: 'ContactName',
    dataValueField: 'CustomerID',
    dataSource: dropdownData
});

export {dropdown};
