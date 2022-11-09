import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when user click ejecutar ', () => {
    beforeEach(() => {
      component.eject('hola');
    });
    it('cadena 1', () => {
      expect(component.cadena1).toEqual(2);
    });
    it('cadena 2', () => {
      expect(component.cadena2).toEqual('HOLA');
    });
    it('cadena 3', () => {
      expect(component.cadena3).toEqual('hl');
    });
  });
});
