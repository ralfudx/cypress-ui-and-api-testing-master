export class HomePage {
    getElementsCard(): string {
        return ".top-card:nth-child(1)>div>div:nth-child(3)";
    }

    getFormsCard(): string {
        return ".top-card:nth-child(2)>div>div:nth-child(3)";
    }

    getWidgetsCard(): string {
        return ".top-card:nth-child(4)>div>div:nth-child(3)";
    }

    getInteractionsCard(): string {
        return ".top-card:nth-child(5)>div>div:nth-child(3)";
    }

    getHomePageCard(cardName: string): string {
        cardName = cardName.toLowerCase();
        switch (cardName) {
            case "elements":
                return this.getElementsCard();
            case "forms":
                return this.getFormsCard();
            case "widgets":
                return this.getWidgetsCard();
            case "interactions":
                return this.getInteractionsCard();
            default:
                return this.getElementsCard();
        }
    }

    clickHomePageCard(cardName: string) {
        cy.get(this.getHomePageCard(cardName))
        .should("be.visible")
        .click();
    }
}
