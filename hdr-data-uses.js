import {
  html,
  css,
  LitElement,
} from "https://unpkg.com/lit-element/lit-element.js?module";
import { unsafeHTML } from "https://unpkg.com/lit-html/directives/unsafe-html.js?module";
const LOADER_GIF = `https://storage.googleapis.com/hdruk-gateway_prod-cms/web-assets/Loader.gif`;
const HDR_LOGO = `https://storage.googleapis.com/hdruk-gateway_prod-cms/web-assets/colour.svg`;
const DATA_SVG_ICON = `<svg width="100%" height="100%" class="badgeSvg mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 22 22" xmlns:xlink="http://www.w3.org/1999/xlink" data-testid="datauseicon"><path fill="#fff" d="M10 0a4.167 4.167 0 0 1 .833 8.25v2.162l2.667 1.969a4.144 4.144 0 0 1 2.125-.71l.208-.004a4.167 4.167 0 1 1-3.508 1.917L10 11.868l-2.325 1.717c.382.594.616 1.291.653 2.04l.005.208A4.167 4.167 0 1 1 6.5 12.381l2.667-1.969V8.25A4.168 4.168 0 0 1 10 0zM4.167 13.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm11.666 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM10 1.667a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"></path></svg>`;
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

class HDRDataUses extends LitElement {
  static get styles() {
    return css`
      * {
        font-family: "museo-sans-rounded";
      }

      .header {
        margin-left: -10px;
        margin-top: 10px;
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
        background-color: #f6f7f8;
      }
      .col {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
      }
      .collection-rectangle {
        word-break: break-word;
        width: 100%;
        box-shadow: 1px 1px 3px 0 #00000017;
        background-color: #fff;
        padding: 24px 0 8px 0;
        padding-right: 15px;
        padding-left: 15px;
      }
      .purple-bold-16 {
        font-size: 16px !important;
        color: #475da7 !important;
        font-weight: 700 !important;
      }
      .gray800-14 {
        font-size: 14px !important;
        color: #3c3c3b !important;
        font-weight: 500;
      }
      .badge-datause {
        background-color: #e07410 !important;
        color: white !important;
        display: inline-block !important;
        padding: 2px 8px 3px 8px;
        border-radius: 16px !important;
        font-size: 14px !important;
        line-height: 20px !important;
        font-weight: 300 !important;
        margin-bottom: 4px !important;
        margin-right: 5px;
      }

      .gray800-14-opacity {
        font-size: 14px !important;
        color: #3c3c3b !important;
        font-weight: 500;
        opacity: 0.7;
      }
      .gray800-14 {
        font-size: 14px !important;
        color: #3c3c3b !important;
        font-weight: 500;
      }
      .pad-top-16 {
        padding-top: 16px !important;
      }

      .badge-tag {
        display: inline-block !important;
        padding: 2px 8px 3px 8px;
        border-radius: 16px !important;
        font-size: 14px !important;
        line-height: 20px !important;
        font-weight: 300 !important;
        margin-bottom: 4px !important;
        background-color: #f3f3f3;
        color: #3c3c3b !important;
        margin-right: 3px;
        margin-left: -1px;
      }

      .pad-bottom-24 {
        padding-bottom: 24px !important;
      }

      .pad-top-8 {
        padding-top: 8px !important;
      }
      .badgeSvg {
        width: 12px;
        height: 12px;
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

  renderHeaderHTML() {
    this.setupFontFaces();
    const subHeading =
      this.data &&
      html`${this.data.length} ${decodeURIComponent(this.custodianName)} data
      uses available on the Health Data Research Innovation Gateway`;
    return html`<div class="header">
      <div class="col-12"><span class="sponsor">Powered by:</span></div>
      <br />
      <div class="col-12">
        <img src="${HDR_LOGO}" width="127" height="53" alt="" />
      </div>
      <br />
      <div class="col-12"><span class="heading">Data use register</span></div>
      <div class="col-12"><span class="sub-heading">${subHeading}</span></div>
    </div>`;
  }

  renderErroMessageHTML(message) {
    return html`<div class="error">${message}</div>`;
  }

  setupFontFaces() {
    if (
      document.querySelector(
        'style[data-description="hdr-data-use-font-faces"]'
      )
    ) {
      return;
    }
    const style = document.createElement("style");
    style.dataset.description = "hdr-data-use-font-faces";
    style.appendChild(document.createTextNode(FONT_FACES));
    document.head.appendChild(style);
  }

  generateContent() {
    if (this.data) {
      return this.data.slice(0, 3).map((value, i) => {
        return html`<br />
          <div class="collection-rectangle">
            <div class="noMargin row">
              <div class="col-lg-10 col-sm-10">
                <a
                  class="purple-bold-16"
                  href="${this.WEB_URL}/datause/${value.id}"
                  >${value.projectTitle}
                </a>
                <p class="gray800-14">${value.organisationName}</p>
              </div>
              <div class="pad-right-24 col-lg-2 col-sm-2"></div>
              <div class="pad-top-16 col">
                <span class="badge-datause">
                  <span>${unsafeHTML(DATA_SVG_ICON)}Data use</span>
                </span>
                <span id="keywords-${i}">
                  ${value.keywords.map((keyword) => {
                    return html`&nbsp;<span class="badge-tag"
                        >${keyword}</span
                      >`;
                  })}
                </span>

                <div class="pad-top-16 row">
                  <div class="gray800-14-opacity col-md-3">Datasets</div>
                  <div class="gray800-14 col-md-9" id="dataset-titles-${i}">
                    ${value.gatewayDatasetsInfo.map((dataset) => {
                      return html` <a
                        href="${this.WEB_URL}/dataset/${dataset.pid}"
                      >
                        <div class="badge-tag">${dataset.name}</div>
                      </a>`;
                    })}
                    ${value.nonGatewayDatasets.map((dataset) => {
                      return html`<div class="badge-tag">${dataset}</div>`;
                    })}
                  </div>
                </div>  
                <div class="pad-bottom-24 pad-top-8 row">
                    <div class="gray800-14-opacity col-md-3">
                      Data custodian
                    </div>
                    <div class="gray800-14 col-md-9">
                      &nbsp;&nbsp;${decodeURIComponent(this.custodianName)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
      });
    }
  }

  render() {
    let content;
    if (!this.custodianName) {
      content = this.renderErroMessageHTML("Custodian name not provided");
    } else {
      const viewAllURL =
        this.data &&
        html`<br /><a
            class="btn btn-primary-hdr"
            href="${this.WEB_URL}/search?search=&datausedatacustodian=${this
              .custodianName}&tab=Datauses"
            role="button"
            >View all data uses
          </a>`;
      content = this.data
        ? html`<div id="content" class="col-12">${this.generateContent()}</div>
            <div id="view-all-button" class="col-12">${viewAllURL}</div>`
        : this.renderErroMessageHTML(
            html`<img src="${LOADER_GIF}" alt="Loading..." />`
          );
    }
    return html`
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <div class="container-body">
        <div class="container">
          <div class="row">
            <div id="logo" class="col-12">${this.renderHeaderHTML()}</div>
            ${content}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("hdr-data-uses", HDRDataUses);
