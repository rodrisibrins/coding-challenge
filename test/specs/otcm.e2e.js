import OtcmPage from  '../pageobjects/otcm.page';

let openValue, marketCapQuoteValue, marketCapSecValue, marketCapSecDate;

describe('OTCM E2E', () => {

    beforeAll('Open Page', async () => {
        OtcmPage.open();
    });

    it('should search otcm in the quote textbox and navigate to its page', async () => {
        await OtcmPage.quoteSearchbar.waitForEnabled();
        await OtcmPage.quoteSearchbar.setValue('otcm');
        await browser.pause(1000);
        await OtcmPage.otcmDisplay.waitForDisplayed();
        await OtcmPage.otcmDisplay.waitForClickable();
        await OtcmPage.otcmDisplay.click();
        await OtcmPage.h1Title.waitForDisplayed();
        await expect(OtcmPage.h1Title).toHaveText('OTCM');
        await expect(OtcmPage.h1Subheading).toHaveText('OTC Markets Group Inc.')
    });

    it('should navigate to quote tab', async () => {
        await OtcmPage.quoteTab.waitForClickable();
        await OtcmPage.quoteTab.click();
        await expect(browser).toHaveUrlContaining('quote');
    });

    it('get values from Open & Market cap', async () => {
        await OtcmPage.openValue.waitForDisplayed();
        await OtcmPage.marketCapQuoteValue.waitForDisplayed();
        let open = await OtcmPage.openValue;
        openValue = await open.getText();
        marketCapQuoteValue = await OtcmPage.marketCapQuoteValue.getText();
    });

    it('should navigate to security details tab', async () => {
        await OtcmPage.securityDetailsTab.waitForClickable();
        await OtcmPage.securityDetailsTab.click();
        await expect(browser).toHaveUrlContaining('security');
    });

    it('market cap value should match between Quote Page and Security Details Page', async () => {
        await OtcmPage.marketCapSecValue.waitForDisplayed();
        await OtcmPage.marketCapSecDate.waitForDisplayed();
        marketCapSecValue = await OtcmPage.marketCapSecValue.getText()
        marketCapSecDate = await OtcmPage.marketCapSecDate.getText();
        console.log("Market Cap $", marketCapSecValue, "On", marketCapSecDate);
        await expect(marketCapSecValue).toEqual(marketCapQuoteValue);
    });
});
