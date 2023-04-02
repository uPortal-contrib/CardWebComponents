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
    self.baseLang = pageLang;
    self.baseSvg = path;
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
      case "ar":
      case "fr-CA":
      case "fr-FR":
      case "es-ES":
      case "en-US":
      case "de":
      case "it":
      case "nl-NL":
      case "zn-CN": {
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
    const toggle = shadowroot.querySelector(".share-toggle");
    articleList.classList.toggle("card__social--active");
    articleToggle.classList.toggle("share-expanded");

    if (articleToggle.getAttribute("aria-expanded") === "true") {
      articleToggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", this.data.toggle.stateClosed);
    } else {
      articleToggle.setAttribute("aria-expanded", "true");
      articleToggle.focus();
      toggle.setAttribute("aria-label", this.data.toggle.stateOpened);
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
    const { baseLang, baseSvg, baseCss, data, onclick, root } = this;

    // exit early if no data is present
    if (!data) {
      return;
    }

    /**
     * build the import style tag into the Shadow DOM and append it to the ShadowDOM
     */
    var head = document.head || document.getElementsByTagName("head")[0];
    var preloadLink = document.createElement("link");
    let temphrefcss = `${baseCss}` + "/my-card.css";
    preloadLink.href = temphrefcss.toString();
    preloadLink.rel = "preload";
    preloadLink.as = "style";
    head.appendChild(preloadLink);
    const stylesImportTag = document.createElement("style");
    stylesImportTag.lang = "css";
    stylesImportTag.innerHTML = "@import '" + `${baseCss}` + "/my-card.css';";
    var classlang =
      "card-wrapper" + " " + document.getElementsByTagName("html")[0].lang;

    root`




  <div data-magic="${data.magic}" class="${classlang}">
    <div class="card radius shadowDepth1">
      <div class="card__image border-tlr-radius">
        <!--<img src="csm_hellink_268d15ec81 - Copie.jpg" alt="image" class="border-tlr-radius" />-->
        <img src="${data.imgsrc}" alt="" class="border-tlr-radius" />
        <img src="./assets/triangle.png" alt="" class="mask" />
      </div>
      <div class="card__content card__padding">  
        <div class="card__article">
          <h2>${data.title}</h2>
          <section class="card__meta">
           <h3><img src="${
             baseSvg + "solid/tags.svg"
           }" class="icon-black" role="presentation" aria-hidden="true" alt="" />&nbsp;${
      data.tags
    }</h3>
          <div>${data.List.map(
            (l) =>
              ` <a href="#" lang="${baseLang}" aria-label="${l.tagLabel}">${l.tag}</a>,`
          )}</div>&nbsp;
            <time>${data.time}</time>
          </section>
          <div class="card__share" tabindex="-1" role="menu" aria-busy="true">
          <div class="card__social card__fix--width">
            <a role="menuitem" id="${data.linkMenu1.id}" tabindex="0" class="${
      data.linkMenu1.cssClass
    }" href="${data.linkMenu1.link}" title="${
      data.linkMenu1.label
    }" aria-label="${data.linkMenu1.label}" hreflang="${
      data.linkMenu1.reflang
    }" target="_blank" rel="noopener noreferrer">
              <img src="${baseSvg + data.linkMenu1.glyphicon}" class="${
      data.linkMenu1.iconColor
    }" aria-hidden="true" alt="" />
           </a>
           <a role="menuitem" id="${data.linkMenu2.id}" tabindex="0" class="${
      data.linkMenu2.cssClass
    }" href="${data.linkMenu2.link}" title="${
      data.linkMenu2.label
    }" aria-label="${data.linkMenu2.label}" hreflang="${
      data.linkMenu2.reflang
    }" target="_blank" rel="noopener noreferrer">
             <img src="${baseSvg + data.linkMenu2.glyphicon}" class="${
      data.linkMenu2.iconColor
    }" aria-hidden="true" alt="" />
           </a>
           <a role="menuitem" id="${data.linkMenu3.id}" tabindex="0" class="${
      data.linkMenu3.cssClass
    }" href="${data.linkMenu3.link}" title="${
      data.linkMenu3.label
    }" aria-label="${data.linkMenu3.label}" hreflang="${
      data.linkMenu3.reflang
    }" target="_blank" rel="noopener noreferrer">
             <img src="${baseSvg + data.linkMenu3.glyphicon}" class="${
      data.linkMenu3.iconColor
    }" aria-hidden="true" alt="" />
          </a>
        </div>
          <a class="share-toggle share-icon"  onclick="${onclick}" href="javascript:void(0);" aria-haspopup="true" aria-label="${
      data.toggle.stateClosed
    }">
            <img src="${
              baseSvg + "solid/ellipsis-v.svg"
            }" class="icon-black" aria-hidden="true" alt="" />
          </a>


      </div>
          <div class="text">${data.paragraphs.map(
            (p) => `<p>${p.para}</p>`
          )}</div>
        </div>
      </div>
      <div class="card__action">
        <a href="${data.button1.link}" class="${
      data.button1.cssClass
    }" title="${data.button1.label}" hreflang="${
      data.button1.reflang
    }" rel="noopener noreferrer">${data.button1.name}&nbsp;<img src="${
      baseSvg + data.button1.glyphicon
    }"  class="${data.button1.iconColor}"  alt="" aria-hidden="true"></a>&nbsp;
        <a href="${data.button2.link}" class="${
      data.button2.cssClass
    }" title="${data.button2.label}" hreflang="${
      data.button2.reflang
    }"  rel="noopener noreferrer">${data.button2.name}&nbsp;<img src="${
      baseSvg + data.button2.glyphicon
    }"  class="${data.button2.iconColor}"  alt="" aria-hidden="true"></a>
      </div>
    </div>
  </div>

`.appendChild(stylesImportTag);
  }
}

/**
 * Register the new item my-card
 * (customizable)
 */
customElements.define("my-card", myCard);
