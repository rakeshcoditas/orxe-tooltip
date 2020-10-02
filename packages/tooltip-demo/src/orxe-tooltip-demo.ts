import { html, customElement, LitElement, property } from 'lit-element';
import styles from './tooltip-demo-css';

@customElement('orxe-tooltip-demo')
export default class OrxeTooltipDemo extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   * 
   */
 
  @property({ type: String, reflect: true, attribute: 'tooltip-text' })
  tooltipText = '';

  @property({ type: String, reflect: true, attribute: 'position' })
  position = '';


  render() {
    return html`
      <div class="tooltip-demo ${this.position}" txt="${this.tooltipText}">
      <slot></slot>
      </div>
    `;
  }
  

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
