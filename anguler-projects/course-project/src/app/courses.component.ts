//import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

//<button class="btn btn-primary" [class.active]="isActive">Save</button>
//isActive = true;
@Component({
    selector: 'courses',
    template: `
    {{ course.title | uppercase }} <br/> 
    {{ course.students | number }} <br/>
    {{ course.rating | number:'1.2-2' }} <br/>
    {{ course.price | currency:'USD':true:'2.2-2' }} <br/>
    {{ course.releaseDate | date: 'shortDate' }}`   
})
/*
        
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
*/
export class CoursesComponent {
    course = {
        title: "Angular BootCamp",
        rating: 4.9745,
        students: 666666,
        price: 36.66,
        releaseDate: new Date(2016, 3, 6)
    }   
}

/*
    title = "List of Courses";
    
    
    courses;
    
    
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onDivClicked() {
        console.log("Div was clicked");
    }
    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }
    email ="me@example.com";

    onKeyUp() {
        console.log(this.email);
    }
    */