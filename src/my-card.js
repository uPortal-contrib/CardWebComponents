"use strict";

import { bind } from "hyperhtml";

/**
/* Define Class of the webcomponent myCard
*/
class myCard extends HTMLElement {
  // Retrieve id of the webcomponent
  // and the path of the messages displayed in the webcomponent
  // and the path of the css imported into the webcomponent
  static get observedAttributes() {
    return ["cssPath", "id", "messagesPath"];
  }

  constructor(...args) {
    const self = super(...args);

    self.render = self.render.bind(self);
    self.onclick = self.onclick.bind(self);
    self.getMessages = self.getMessages.bind(self);

    const path = self.getAttribute("messagesPath");
    const pageLang = document.documentElement.lang;

    self.baseId = self.getAttribute("id");
    self.base = self.urlMessages(path, pageLang);
    self.baseCss = self.getAttribute("cssPath");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // skip if values have not changed
    if (oldValue === newValue) {
      return;
    }

    // update internal value with attribute value
    switch (name) {
      case "cssPath": {
        this.baseCss = newValue;
        break;
      }
      case "id": {
        this.baseId = newValue;
        break;
      }
      case "messagePath": {
        const pageLang = document.documentElement.lang;
        this.base = this.urlMessage(newValue, pageLang);
        this.getMessages();
        break;
      }
    }

    // re-render view with new values
    this.render();
  }

  connectedCallback() {
    // only generate HTML context once the element is being added to the page
    this.SD = this.attachShadow({ mode: "open" });
    this.root = bind(this.SD);

    this.getMessages();
  }

  /**
   * Build the url of the messages according to host page language
   * Supported language: en-US, fr-FR, es-ES, nl-NL (Can be extended...)
   * if host language is unknowed default to en-US messages
   */
  urlMessages(path, pageLang) {
    switch (pageLang) {
      case "fr-FR":
      case "es-ES":
      case "en-US":
      case "nl-NL": {
        return path + "i18n/" + pageLang;
      }
      default: {
        return path + "i18n/en-US";
      }
    }
  }

  /**
   * function onclick. use to open the toggle menu in the ShadowDOM
   * keyboard and touch accessible (WCAG 2.1) exterimental CSS :focus-visible enabled in Chrome
   * focus is managed
   */
  onclick(event) {
    event.preventDefault();
    const { SD: shadowroot } = this;

    const articleList = shadowroot.querySelector(".card__social");
    const articleToggle = shadowroot.querySelector(".card__share");
    articleList.classList.toggle("card__social--active");
    articleToggle.classList.toggle("share-expanded");

    if (articleToggle.getAttribute("aria-expanded") === "true") {
      articleToggle.setAttribute("aria-expanded", "false");
    } else {
      articleToggle.setAttribute("aria-expanded", "true");
      articleToggle.focus();
    }
  }

  /**
   * function getMessages. fetch the messages.json
   */
  async getMessages() {
    try {
      const response = await fetch(`${this.base}/messages.json`);
      const messages = await response.json();
      this.data = messages;
      this.render();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  render() {
    const { baseCss, data, onclick, root } = this;

    // exit early if no data is present
    if (!data) {
      return;
    }

    /**
     * build the import style tag into the Shadow DOM and append it to the ShadowDOM
     */
    var preloadLink = document.createElement("link");
    let temphrefcss = `${baseCss}` + "/my-card.css";
    preloadLink.href = temphrefcss.toString();
    preloadLink.rel = "preload";
    preloadLink.as = "style";
    preloadLink.toString();
    const stylesImportTag = document.createElement("style");
    stylesImportTag.lang = "css";
    stylesImportTag.innerHTML = "@import '" + `${baseCss}` + "/my-card.css';";
    stylesImportTag.toString();
    root`
<link rel="preload" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" as="style" crossorigin="anonymous">
<link rel="preload" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" as="style" crossorigin="anonymous">
<style lang="css" media="all">
@import 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';
</style>



  <div data-magic="${data.magic}" class="card-wrapper">
    <div class="card radius shadowDepth1">
      <div class="card__image border-tlr-radius">
        <!--<img src="csm_hellink_268d15ec81 - Copie.jpg" alt="image" class="border-tlr-radius" />-->
        <img src="${data.imgsrc}" alt="" class="border-tlr-radius" />
      </div>
      <div class="card__content card__padding">
        <div id="what-is-uportal-i18n-list" class="card__share" tabindex="-1" role="menu">
          <div class="card__social card__fix--width">
            <a role="menuitem" id="${data.linkMenu1.id}" tabindex="0" class="${
      data.linkMenu1.cssClass
    }" href="${data.linkMenu1.link}" title="${
      data.linkMenu1.label
    }" aria-label="${
      data.linkMenu1.label
    }" target="_blank" rel="noopener noreferrer"><span class="${
      data.linkMenu1.glyphicon
    }"></span></a>
            <a role="menuitem" id="${data.linkMenu2.id}" tabindex="0" class="${
      data.linkMenu2.cssClass
    }" href="${data.linkMenu2.link}" title="${
      data.linkMenu2.label
    }" aria-label="${
      data.linkMenu2.label
    }" target="_blank" rel="noopener noreferrer"><span class="${
      data.linkMenu2.glyphicon
    }"></span></a>
            <a role="menuitem" id="${data.linkMenu3.id}" tabindex="0" class="${
      data.linkMenu3.cssClass
    }" href="${data.linkMenu3.link}" title="${
      data.linkMenu3.label
    }" aria-label="${
      data.linkMenu3.label
    }" target="_blank" rel="noopener noreferrer"><span class="${
      data.linkMenu3.glyphicon
    }"></span></a>
          </div>
          <a class="share-toggle share-icon"  onclick="${onclick}" href="javascript:void(0);" aria-controls="what-is-uportal-i18n-list" aria-expanded="false" aria-haspopup="true" aria-label="Menu"><i class="fa fa-ellipsis-v"></i></a>


        </div>
        <div class="card__meta">
          <i class="fa fa-tags" aria-label="Tag" lang="en"></i>&nbsp;:
          <span>${data.List.map(
            l => ` <a href="javascript:void(0);">${l.tag}</a> -`
          )}</span>&nbsp;
          <time>${data.time}</time>
        </div>
        <div class="card__article">
          <h2>${data.title}</h2>
          <div>${data.paragraphs.map(p => `<p>${p.para}</p>`)}</div>
        </div>
      </div>
      <div class="card__action">
        <a href="${data.button1.link}" class="${
      data.button1.cssClass
    }" title="${data.button1.label}" rel="noopener noreferrer">${
      data.button1.name
    }&nbsp;<span class="${
      data.button1.glyphicon
    }" aria-hidden="true"></span></a>&nbsp;
        <a href="${data.button2.link}" class="${
      data.button2.cssClass
    }" title="${data.button2.label}" rel="noopener noreferrer">${
      data.button2.name
    }&nbsp;<span class="${
      data.button2.glyphicon
    }" aria-hidden="true"></span></a>
      </div>
    </div>
  </div>

`
      .appendChild(preloadLink)
      .appendChild(stylesImportTag);
  }
}

/**
 * Register the new item my-card
 * (customizable)
 */
customElements.define("my-card", myCard);
