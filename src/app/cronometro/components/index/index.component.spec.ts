import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' start time',(done:DoneFn)=>{
    setTimeout(function() {
      expect(component.time).toEqual(1);
      done();
    }, 1000);
    component.start()

  });

  it(' stop time', ()=>{
    component.stop();
    expect(component.time).toEqual(0);
  });

});
