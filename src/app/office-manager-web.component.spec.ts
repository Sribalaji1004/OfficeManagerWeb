import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { OfficeManagerWebAppComponent } from '../app/office-manager-web.component';

beforeEachProviders(() => [OfficeManagerWebAppComponent]);

describe('App: OfficeManagerWeb', () => {
  it('should create the app',
      inject([OfficeManagerWebAppComponent], (app: OfficeManagerWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'office-manager-web works!\'',
      inject([OfficeManagerWebAppComponent], (app: OfficeManagerWebAppComponent) => {
    expect(app.title).toEqual('office-manager-web works!');
  }));
});
