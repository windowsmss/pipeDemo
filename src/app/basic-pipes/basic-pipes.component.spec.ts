import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPipesComponent } from './basic-pipes.component';

describe('BasicPipesComponent', () => {
  let component: BasicPipesComponent;
  let fixture: ComponentFixture<BasicPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
