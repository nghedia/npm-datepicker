/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE_PROVIDER } from './core/date-adapter';
import { MAT_DATE_FORMATS } from './core/date-formats';
import { NativeDateAdapter } from './core/native-date-adapter';
import { MAT_NATIVE_DATE_FORMATS } from './core/native-date-formats';

export * from './core/date-adapter';
export * from './core/date-formats';
export * from './core/native-date-adapter';
export * from './core/native-date-formats';

@NgModule({
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    MAT_DATE_LOCALE_PROVIDER
  ]
})
export class NativeDateModule {}

@NgModule({
  imports: [NativeDateModule],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }]
})
export class MatNativeDateModule {}