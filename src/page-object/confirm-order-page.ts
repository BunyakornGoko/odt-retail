import { Page, Locator } from "playwright";
export class ConfirmOrderPage {
    readonly page: Page
    readonly customerName: Locator
    readonly customerTel: Locator
    readonly customerEmail: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page
        this.customerName = this.page.locator('input[name="customerName"]')
        this.customerTel = this.page.locator('input[name="customerTel"]')
        this.customerEmail = this.page.locator('input[name="customerEmail"]')
        this.submitButton = this.page.locator('input[type="submit"]')
    }

    async fillInput(){
        await this.customerName.fill("Bunyakorn")
        await this.customerTel.fill("0800680597")
        await this.customerEmail.fill("bunyakorn")
    }

    async confirmOrder() {
        await this.submitButton.click()
    }
}