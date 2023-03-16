describe("template spec", () => {
  it("passes", () => {
    const exportFileName = 'File-Topography'
    const exportArtifactName = 'Object-Topography'
    cy.visit("https://example.cypress.io");
    cy.readFile(`./cypress/downloads/${exportFileName}.zip`, "binary").then(
      (content) => {
        expect(content.includes(`${exportArtifactName}.dxf`)).to.be
          .true; //have to slice to make my test pass
        return cy.wrap(null);
      }
    );
  });
});
