import { css } from 'lit-element';
export default css `
.tooltip-demo {
    position: relative;
    height: 60px;
    width: 250px;
    background: #f2395a;
    color: white;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    margin: 50px auto;
   }
  
  .tooltip-demo:before {
    position: absolute;
    z-index: 2;
    display: none;
    width: 100%;
    max-width: 100%;
    margin:0px 16px;
    min-height:54px;
    text-align:center;
    padding: 8px;
    font-size: 0.8em;
    border-radius: 4px;
    background-color: var(--primary-text);
    color: white;
    content: attr(txt);
  }

  .tooltip-demo:hover:before{
     display: inline-block;
   }

   .tooltip-demo.top:before {
    bottom: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
  }

   .tooltip-demo.right:before {
    top: 50%;
    left: calc(100% + 5px);
    transform: translateY(-50%);
  }

  .tooltip-demo.left:before {
    top: 50%;
    right: calc(100% + 5px);
    transform: translateY(-50%);
  }

  .tooltip-demo.bottom:before {
    top: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
  }
  `;
