import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let app: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });
});
