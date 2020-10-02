import { OrxeTooltipDemo } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-tooltip-demo-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let TooltipDemo;

  beforeEach(async () => {
    OrxeTooltipDemo;
    document.body.appendChild(document.createElement('TooltipDemo'));
    TooltipDemo = document.querySelector('TooltipDemo') as OrxeTooltipDemo;
  });

  afterEach(() => {
    TooltipDemo.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(TooltipDemo);
    expect(result).toHaveNoViolations();
  });
});
