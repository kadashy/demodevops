import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { VatCalculatorComponent } from './vat-calculator.component';

describe('VatCalculatorComponent', () => {
  let component: VatCalculatorComponent;
  let fixture: ComponentFixture<VatCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ VatCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'demodevops'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('demodevops');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bienvenidos a demodevops!');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('#calculateTax should return 0 if value is 0', () => {
    component.calculateTax(0);
    expect(component.afterTax).toEqual(0);
  });

  it ('#calculateTax should return 110 if value is 100', () => {
    component.calculateTax(100);
    expect(component.afterTax).toEqual(110);
  });

  it ('#calculateTax should return --- if value is not a number', () => {
    component.calculateTax('TEXTO');
    expect(component.afterTax).toEqual('---');
  });

  it('should render "Valor con impuesto: 110" in p with ID "afterTax" if value is 100', () => {
    component.calculateTax(100);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#afterTax').textContent).toContain('Valor con impuesto: 110');
  });

  it('should render "Impuesto: 10" in p with ID "tax" if value is 100', () => {
    component.calculateTax(100);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#tax').textContent).toContain('Impuesto: 10');
  });

  it ('#calculateTax should return 1099998.9 if value is 999999', () => {
    component.calculateTax(999999);
    expect(component.afterTax).toEqual(1099998.9);
  });

  it ('#calculateTax should return 1150000 if value is 1000000', () => {
    component.calculateTax(1000000);
    expect(component.afterTax).toEqual(1150000);
  });

  it ('#calculateTax should return 2300000 if value is 2000000', () => {
    component.calculateTax(2000000);
    expect(component.afterTax).toEqual(2300000);
  });

  it('should render "Valor con impuesto: 2300000" in p with ID "afterTax" if value is 2000000', () => {
    component.calculateTax(2000000);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#afterTax').textContent).toContain('Valor con impuesto: 2300000');
  });

});
