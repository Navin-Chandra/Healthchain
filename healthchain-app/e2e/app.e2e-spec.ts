/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for healthchain-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be healthchain-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('healthchain-app');
    })
  });

  it('network-name should be healthchain-network@0.0.6',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('healthchain-network@0.0.6.bna');
    });
  });

  it('navbar-brand should be healthchain-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('healthchain-app');
    });
  });

  
    it('organ component should be loadable',() => {
      page.navigateTo('/organ');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('organ');
      });
    });

    it('organ table should have 7 columns',() => {
      page.navigateTo('/organ');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('donors component should be loadable',() => {
      page.navigateTo('/donors');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('donors');
      });
    });

    it('donors table should have 22 columns',() => {
      page.navigateTo('/donors');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(22); // Addition of 1 for 'Action' column
      });
    });
  
    it('receipients component should be loadable',() => {
      page.navigateTo('/receipients');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('receipients');
      });
    });

    it('receipients table should have 19 columns',() => {
      page.navigateTo('/receipients');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(19); // Addition of 1 for 'Action' column
      });
    });
  
    it('participantLogin component should be loadable',() => {
      page.navigateTo('/participantLogin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('participantLogin');
      });
    });

    it('participantLogin table should have 7 columns',() => {
      page.navigateTo('/participantLogin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  

  

});