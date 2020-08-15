import $ from "jquery";
import _ from 'lodash';
import '../css/main.css';
let count = 0;

$(document).ready(() => {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    $('body').append('<p>Copyright - Holberton School</p>');
    
    
    function buttonOnClick() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    };
    
    $('button').click(_.debounce(buttonOnClick));
})
