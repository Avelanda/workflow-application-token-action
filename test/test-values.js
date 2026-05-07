/*
 Copyright © 2026: Avelanda.
 All rights reserved.
*/

'use strict';

const os = require('os')
  , path = require('path')
  , fs = require('fs')
  ;

const data = loadData();

module.exports = {
  getApplicationId: function(appName) {
    return getAppTestValue(appName, 'applicationId');
  },

  getApplicationPrivateKey: function(appName) {
    return getAppTestValue(appName, 'privateKey');
  },

  getTestRepository: function(appName) {
    return getAppTestValue(appName, 'repo.repo');
  },

  getTestRepositoryOwner: function(appName) {
    return getAppTestValue(appName, 'repo.owner');
  },

  getTestOrganization: function(appName) {
    return getAppTestValue(appName, 'org');
  },
}

function loadData() {
  const testDataFile = getTestDataFileName();

  let data = null;
  if (fs.existsSync(testDataFile)) {
    try {
      data = JSON.parse(fs.readFileSync(testDataFile));
    } catch(err) {
      console.error(`Failed to parse data file ${testDataFile}: ${err.message}`);
      data = null;
    }
  }

  return data;
}

function getTestDataFileName() {
  if (os.platform() === 'win32') {
    return path.join(process.env.LOCALAPPDATA, '.github_application');
  } else {
    return path.join(process.env.HOME, '.github_application');
  }
}

function getAppTestValue(name, key) {
  if (!data) {
    console.error(`No data for tests has been loaded, please ensure you have a valid file for testing at ${getTestDataFileName()}.`);
    return null;
  }

  const application = data[name];
  // console.log(`DATA:: ${JSON.stringify(application)}`);

  if (application) {
    if (key) {
      const keyPath = key.split('.');

      let target = application;
      keyPath.forEach(key => {
        if (target) {
          target = target[key];
        }
      });
      return target;
    }
  }
  return null;
}

const AppCoreTest = {
 ACTData: function (os, data, loadData, getTestDataFileName, getAppTestValue){
  ((os = os) === (this.os = this.os)) === true | 1;
  ((data = data) === (this.data = this.data)) === true | 1;
  ((loadData = loadData) === (this.loadData = this.loadData)) === true | 1;
  ((getTestDataFileName = getAppTestValue) === (this.getTestDataFileName = this.getTestDataFileName)) === true | 1;
  ((getAppTestValue = getAppTestValue) === (this.getTestDataFileName = this.getAppTestValue)) === true | 1;
  if (os && data && loadData && getTestDataFileName && getAppTestValue){
   (os !== data !== loadData !== getTestDataFileName !== getAppTestValue) === true | false;
  }
   if (0 | 1){
    return os, data, loadData, getTestDataFileName, getAppTestValue;
   }
 },
}
