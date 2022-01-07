import Page from './page';

class OtcmPage extends Page {
   
    get quoteSearchbar() {
        return $(`(//input[@placeholder='Quote'])[1]`);
    }

    get otcmDisplay() {
        return $(`(//img[@src='/icons/tier/qx.png'])[1]`);
    }

    get h1Title() {
        return $('h1:first-child');
    }

    get h1Subheading() {
        return $('h1:nth-child(2)');
    }

    get quoteTab() {
        return $('a[href$="quote"]');
    }

    get openValue() {
        return $('//label[contains(.,"Open")]/following-sibling::p');
    }

    get marketCapQuoteValue() {
        return $('span + p');
    }

    get securityDetailsTab() {
        return $('a[href$="security"]');
    }

    get marketCapSecValue() {
        return $('//div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[2]/div[2]');
    }

    get marketCapSecDate() {
        return $('h4 + div div:nth-child(3)');
    }

    

    open() {
        return super.open();
    }
}

export default new OtcmPage();
