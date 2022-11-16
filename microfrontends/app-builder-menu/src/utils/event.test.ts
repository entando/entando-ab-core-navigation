import { sendTutorialNextStepEvent } from './events';

describe('sendTutorialNextStepEvent', () => {
  it('should dispatch a tutorial event', () => {
    const nextStep = 1;
    const event = new CustomEvent('tutorial', {
      detail: { nextStep }
    });
    window.dispatchEvent = jest.fn();
    sendTutorialNextStepEvent(nextStep);
    expect(window.dispatchEvent).toHaveBeenCalledWith(event);
  });
});
