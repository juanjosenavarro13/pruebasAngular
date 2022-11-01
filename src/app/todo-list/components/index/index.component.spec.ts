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

  it('add item', ()=>{
    component.addItem('hola');
    expect(component.items.length === 1);
  });

  it('remove item', ()=>{
    component.addItem('hola');
    component.addItem('hola');
    component.removeItem(1);

    expect(component.items.length === 1);
  });

});
