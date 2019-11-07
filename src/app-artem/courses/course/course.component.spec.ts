import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser/src/dom/debug/by';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CourseComponent } from './course.component';
import { ArtemDurationPipe } from '../../common/duration.pipe';
import { inspect } from 'util';
import { CourseModel } from './course.model';

describe('Course Component', () => {
    let fixture: ComponentFixture<CourseComponent>;
    let comp: CourseComponent;
    let de: DebugElement;
    let el: HTMLElement;
    
    beforeEach(async() => {   // for async template, but works without it as well
        TestBed.configureTestingModule({
            declarations: [CourseComponent, ArtemDurationPipe],
    
            // If you are not testing router related stuff, 
            // you can configure the test to ignore unknown directives with 'NO_ERRORS_SCHEMA'
            schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();   // for async template, but works without it as well
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('.course-video'));
        el = de.nativeElement;
    });

    it('should contain "Edit course" in the template', () => {
        expect(el.textContent).toContain('Edit course');
    });
    it('should el be instanceof CourseComponent', () => {
        expect(comp instanceof CourseComponent).toBe(true);
    });

    describe('template contents', () => {
        beforeEach(() => {
            comp.courseInput = {
                id: 'fake id',
                topRated: true,
                title: 'fake title',
                duration: 999,
                description: 'fake description',
                publishedDate: new Date()
            }
            fixture.detectChanges();
        })
        it('has video__information__title', () => {    
            let titleEl = fixture.debugElement.query(By.css('.course-video__information__title')).nativeElement;
            expect(titleEl.textContent)
                .toContain(comp.courseInput.title.toUpperCase());
        });
        // it('has video__information__duration', () => {    
        //     let durationEl = fixture.debugElement.query(By.css('.course-video__information__duration')).nativeElement;
        //     expect(durationEl.textContent)
        //         .toContain(ArtemDurationPipe.transform(comp.courseInput.duration));
        // });
        
        it('has video__information__date-published', () => {    
            let publishedDate = fixture.debugElement.query(By.css('.course-video__information__date-published')).nativeElement;
            expect(publishedDate.textContent)
                .toContain(comp.courseInput.publishedDate.toString());
        });
    });
});
