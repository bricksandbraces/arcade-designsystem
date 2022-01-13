describe("Accordion Tests", () => {
  function snapshotComponent() {
    cy.get(".bb--accordion-list").toMatchImageSnapshot({
      threshold: 0.01,
      thresholdType: "percent"
    });
  }

  function openAndCloseSecondElement() {
    snapshotComponent();
    cy.get("button#c2_label").click().should("be.focused");
    snapshotComponent();
    cy.get("button#c2_label").click().should("be.focused");
    snapshotComponent();
  }
  it("Uncontrolled -- Should open and close", () => {
    cy.visit(
      "/iframe.html?id=components-accordion--uncontrolled&args=&viewMode=story"
    );
    openAndCloseSecondElement();
  });

  it("Controlled -- Should open and close", () => {
    cy.visit(
      "/iframe.html?id=components-accordion--controlled&args=&viewMode=story"
    );
    openAndCloseSecondElement();
  });
});