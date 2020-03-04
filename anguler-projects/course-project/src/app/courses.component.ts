import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

//<button class="btn btn-primary" [class.active]="isActive">Save</button>
//isActive = true;
@Component({
    selector: 'courses',
    template: `
       <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
            `   
})
/*
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
*/
export class CoursesComponent {
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
    */
    email ="me@example.com";

    onKeyUp() {
        console.log(this.email)
    }
    
}