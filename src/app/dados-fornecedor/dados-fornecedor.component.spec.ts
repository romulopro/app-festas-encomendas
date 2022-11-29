import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosFornecedorComponent } from './dados-fornecedor.component';

describe('DadosFornecedorComponent', () => {
  let component: DadosFornecedorComponent;
  let fixture: ComponentFixture<DadosFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosFornecedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
