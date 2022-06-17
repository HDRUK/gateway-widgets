import { css } from "https://unpkg.com/lit-element/lit-element.js?module";

export default css`
  * {
    font-family: "museo-sans-rounded";
  }

  .btn-hdr {
    border-width: 2px;
    border-style: solid;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    background: #475da7;
    border-color: #475da7;
    color: #fff;
    fill: #fff;
    font-size: 13px;
    padding: 10px 16px;
    border-radius: 4px;
    gap: 6px;
    font-weight: 400;
  }

  .btn-primary-hdr {
    background: #475da7;
    color: #fff;
  }

  .btn-primary-hdr:hover {
    border-color: #384b91;
    background: #384b91;
  }

  .btn-primary-hdr:disabled {
    border-color: #c6cee5;
    background: #c6cee5;
    color: #a2aed3;
  }
`;
