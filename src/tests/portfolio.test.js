const portfolioService = new Portfolio();

describe('Lender Portfolio', () => {
    it('must show list all of current user portfolio', async () => {
        const userId = '';
        const result = portfolioService.listPortfolio(userId);
        expect(result[0]).toHaveProperty('_id');
    });
});
