import {
  html,
  css,
  LitElement,
} from "https://unpkg.com/lit-element/lit-element.js?module";

import GAnalytics from "https://unpkg.com/ganalytics?module";

import commonStyles from "./styles/main.js";

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
    return [
      commonStyles,
      css`
        .logo-wrapper {
          display: flex;
          justify-content: flex-end;
        }

        .logo {
          width: 127px;
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
          font-style: normal;
          font-weight: normal;
          font-size: 11px;
          color: #29235c;
        }

        .container-body {
          padding: 40px;
          background-color: #f6f7f8;
        }

        .error {
          margin-top: 30px;
          margin-left: 20px;
          margin-bottom: 20px;
        }
      `,
    ];
  }
  static get properties() {
    return {
      data: { type: Array },
      custodianName: { type: String },
    };
  }
  constructor() {
    super();
    this.ga = GAnalytics("UA-62201190-1");
    this.WEB_URL = this.getAttribute("baseURL");
    this.API_URL = this.getAttribute("apiURL");
    this.custodianName = this.getAttribute("publisher");

    console.log("this.custodianName", this.custodianName);
  }

  async connectedCallback() {
    super.connectedCallback();

    this.data = this.custodianName && (await this.fetchData());
  }

  async fetchData() {
    try {
      const response = await fetch(this.API_URL);
      const { dataUseRegisterResults } = await response.json();

      return dataUseRegisterResults.data;
    } catch (e) {
      console.error("Error:", e);
      this.renderErrorMessageHTML("Oops somethingwent wrong");
    }
  }

  renderLogo() {
    return html`<div class="logo">
      <div class="sponsor">Powered by:</div>
      <div>
        <img src="${HDR_LOGO}" width="127" height="53" alt="" />
      </div>
    </div>`;
  }

  renderErrorMessageHTML(message) {
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

  handleOnclick() {
    this.ga.send("event", {
      ec: "DataUseWidget",
      ea: "Clicked",
      el: window.location,
    });
    window.open(
      `${this.WEB_URL}/search?search=&datausedatacustodian=${this.custodianName}&tab=Datauses`,
      "_blank"
    );
  }

  render() {
    this.setupFontFaces();

    const formattedCustodianName = this.custodianName
      ? decodeURIComponent(this.custodianName)
      : "";

    const subHeading =
      this.data &&
      html`${this.data.length} Data uses available to view on the Health Data
      Research Innovation Gateway`;

    const disabled = this.data && this.data.length ? "" : "disabled";

    const viewAllURL = html`
      <button
        type="button"
        target="_blank"
        class="btn-hdr btn-primary-hdr"
        @click="${this.handleOnclick}"
        title="View all data uses"
        ${disabled}
      >
        View data uses
      </button>
    `;

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
            <div class="mb-1">
              <span class="heading"
                >${formattedCustodianName} Data Use Register</span
              >
            </div>
            <div class="mb-3">
              <span class="sub-heading">${subHeading}</span>
            </div>
            ${viewAllURL}
          </div>
          <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 logo-wrapper">
            ${this.renderLogo()}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("hdruk-data-uses", HDRUKDataUses);
