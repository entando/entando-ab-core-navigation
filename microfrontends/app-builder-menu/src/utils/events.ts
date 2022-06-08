export const sendTutorialNextStepEvent = (nextStep: number) => {
  const event = new CustomEvent('tutorial', {
    detail: { nextStep }
  });
  window.dispatchEvent(event);
};
