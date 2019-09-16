import React, { Component } from 'react';
import CourseItem from './CourseItem';


export default class CourseList extends Component {
    render() {
        return (
            <div>
                <CourseItem price="1.000.000" img="images/reactjs.jpg">LẬP TRÌNH REACT JS</CourseItem>
                <CourseItem price="2.000.000" img="images/angularjs.jpg">LẬP TRÌNH ANGULAR JS</CourseItem>
                <CourseItem price="3.000.000" img="images/vujs.jpg">LẬP TRÌNH VU JS</CourseItem>
                <CourseItem price="4.000.000" img="images/nodejs.jpg">LẬP TRÌNH NODE JS</CourseItem>
                <CourseItem price="5.000.000" img="images/php.png">LẬP TRÌNH PHP</CourseItem>
                <CourseItem price="6.000.000" img="images/asp.jpg">LẬP TRÌNH ASP</CourseItem>

            </div>

        );
    }
}
