/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

jest.disableAutomock();

const processMask = require('processMask');

describe('processMask', () => {

  describe('color processing', () => {
    var maskJson = processMask({
      colors: ['#0000', 'white', 'transparent', 'rgba(1,1,1,0.5)']
    });
    expect(maskJson.colors).toEqual([0, 1, 0, 1]);
  });
});
