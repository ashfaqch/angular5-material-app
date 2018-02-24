import { TestBed, async } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('About Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AboutComponent,
            ],
            imports: [
            ],
            providers: [
            ]
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'About'`, async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('About');
    }));

});
