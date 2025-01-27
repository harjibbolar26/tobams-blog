// /* eslint-disable @typescript-eslint/no-namespace */
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       disableAnimations(): Chainable<void>;
//     }
//   }
// }

// Cypress.Commands.add("disableAnimations", () => {
//   cy.document().then((doc) => {
//     const style = doc.createElement("style");
//     style.innerHTML = `
//       * {
//         transition: none !important;
//         animation: none !important;
//       }
//     `;
//     doc.head.appendChild(style);
//   });
// });

// // Use this command in your tests
// beforeEach(() => {
//   cy.disableAnimations();
// });
  