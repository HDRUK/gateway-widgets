import {
  html,
  css,
  LitElement,
} from "https://unpkg.com/lit-element/lit-element.js?module";
import { unsafeHTML } from "https://unpkg.com/lit-html/directives/unsafe-html.js?module";
const LOADER_GIF = `https://storage.googleapis.com/hdruk-gateway_prod-cms/web-assets/Loader.gif`;
const HDR_LOGO = `https://storage.googleapis.com/hdruk-gateway_prod-cms/web-assets/colour.svg`;
const FONT_FACES = `@font-face {
  font-family:"museo-sans-rounded";
  src:url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:300;
  }
  
  @font-face {
  font-family:"museo-sans-rounded";
  src:url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:700;
  }
  
  @font-face {
  font-family:"museo-sans-rounded";
  src:url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:500;
  }`;

class HDRUKDataUses extends LitElement {
  static get styles() {
    return css`
      * {
        font-family: "museo-sans-rounded";
      }

      .logo {
        margin-left: -10px;
        margin-top: 5px;
      }
      .heading {
        font-size: 24px;
        line-height: 20px;
        color: #29235c;
      }
      .sub-heading {
        font-size: 18px;
        line-height: 30px;
        color: #29235c;
        font-weight: 400;
      }
      .sponsor {
        position: absolute;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        color: #29235c;
      }
      .container-body {
        padding: 25px;
        background-color: #f6f7f8;
      }
      .col {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
      }

      .btn {
        font-weight: 100 !important;
        margin-bottom: 30px;
      }
      .btn-primary-hdr {
        color: #fff;
        background-color: #475da7;
        border-color: #475da7;
        font-size: 14px;
      }
      .btn-primary-hdr:hover {
        color: #fff;
        background-color: #3c4e8c;
        border-color: #384983;
      }

      .error {
        margin-top: 30px;
        margin-left: 20px;
        margin-bottom: 20px;
      }
    `;
  }
  static get properties() {
    return {
      data: { type: Array },
      custodianName: { type: String },
    };
  }
  constructor() {
    super();
    this.WEB_URL = `https://web.uat.healthdatagateway.org`;
    this.API_URL = `https://api.uat.healthdatagateway.org`;
    this.custodianName = this.getAttribute("id");
  }

  async connectedCallback() {
    super.connectedCallback();
    this.data = this.custodianName && (await this.fetchData());
  }

  async fetchData() {
    try {
      const URL = `${this.API_URL}/api/v1/search?search=&datausedatacustodian=${this.custodianName}&tab=Datauses`;
      const response = await fetch(URL);
      const { dataUseRegisterResults } = await response.json();
      return dataUseRegisterResults.data;
    } catch (e) {
      console.error("Error:", e);
      this.renderErroMessageHTML("Oops somethingwent wrong");
    }
  }

  renderLogo() {
    return html`<div class="logo">
      <div class="col-12"><span class="sponsor">Powered by:</span></div>
      <br />
      <div class="col-12">
        <img src="${HDR_LOGO}" width="127" height="53" alt="" />
      </div>
    </div>`;
  }

  renderErroMessageHTML(message) {
    return html`<div class="error">${message}</div>`;
  }

  setupFontFaces() {
    if (document.querySelector('style[data-description="hdruk-font-faces"]')) {
      return;
    }
    const style = document.createElement("style");
    style.dataset.description = "hdruk-font-faces";
    style.appendChild(document.createTextNode(FONT_FACES));
    document.head.appendChild(style);
  }

  render() {
    this.setupFontFaces();
    const subHeading =
      this.data &&
      html`${this.data.length} ${decodeURIComponent(this.custodianName)} data
      uses available on the Health Data Research Innovation Gateway`;
    const disabled = this.data && this.data.length ? "" : "disabled";
    const viewAllURL = html`<br /><a
        class="btn btn-primary-hdr ${disabled}"
        href="${this.WEB_URL}/search?search=&datausedatacustodian=${this
          .custodianName}&tab=Datauses"
        role="button"
        aria-disabled="true"
        >View all data uses
      </a> `;

    return html`
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <div class="container-body">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
            <div>
              <span class="heading">Data use register</span>
            </div>
            <br />
            <div>
              <span class="sub-heading">${subHeading}</span>
            </div>
            ${viewAllURL}
          </div>
          <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            ${this.renderLogo()}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("hdruk-data-uses", HDRUKDataUses);
