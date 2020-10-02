var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './tooltip-demo-css';
let OrxeTooltipDemo = class OrxeTooltipDemo extends LitElement {
    constructor() {
        super(...arguments);
        this.tooltipText = '';
        this.position = '';
    }
    render() {
        return html `
      <div class="tooltip-demo ${this.position}" txt="${this.tooltipText}">
      <slot></slot>
      </div>
    `;
    }
};
OrxeTooltipDemo.styles = styles;
__decorate([
    property({ type: String, reflect: true, attribute: 'tooltip-text' }),
    __metadata("design:type", Object)
], OrxeTooltipDemo.prototype, "tooltipText", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'position' }),
    __metadata("design:type", Object)
], OrxeTooltipDemo.prototype, "position", void 0);
OrxeTooltipDemo = __decorate([
    customElement('orxe-tooltip-demo')
], OrxeTooltipDemo);
export default OrxeTooltipDemo;
