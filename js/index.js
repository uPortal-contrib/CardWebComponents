/*jshint 'esversion: 6'*/
(function () {
  'use strict';
  /**
  /* const langPage is the language value of the host page
  */
  const langPage = document.documentElement.lang;
  
  /**
  /* let aplha is used to store the ID value of the webcomponent
  */
  let alpha;
  
  /**
  /* Define Class of the webcomponent myCard
  */
  class myCard extends HTMLElement {
    // Retrieve id of the webcomponent
    static get observedAttributes() { return ['id']; }
    // Retrieve the path of the messages displayed in the webcomponent
    static get observedAttributes() { return ['messagesPath']; }
    // Retrieve the path of the css imported into the webcomponent
    static get observedAttributes() { return ['cssPath']; }
    static get observedAttributes() { return ['source']; }

    constructor(...args){
      super(...args);
      var idComponent, urlMessages, urlCss;
      let path = `${this.getAttribute('messagesPath')}`;
      idComponent = `${this.getAttribute('id')}`;
      urlCss = `${this.getAttribute('cssPath')}`;
      
      /**
      /* Build the url of the messages according to host page language
      /* Supported language: en-US, fr-FR, es-ES, nl-NL (Can be extended...)
      /* if host language is unknowed default to en-US messages
      */
      switch (langPage) {
        case 'fr-FR':
          urlMessages = path + 'i18n/' + langPage;
          break;
        case 'es-ES':
          urlMessages = path + 'i18n/' + langPage;
          break;
        case 'en-US':
          urlMessages = path + 'i18n/' + langPage;
          break;
        case 'nl-NL':
          urlMessages = path + 'i18n/' + langPage;
          break;
        default:
          urlMessages = path + 'i18n/en-US';
      }
      
      this.SD = this.attachShadow({mode: 'open'});
      this.baseId = idComponent;
      this.base = urlMessages;
      this.baseCss = urlCss;
      this.data = [];
      //console.log(langePage);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      //console.log(name + ':' + newValue);
    }

    connectedCallback(){
      this.root = hyperHTML.bind(this.SD);
      this.getMessages();
      /**
      /* Send the id to the component when this one id added to the DOM
      */
      alpha = `${this.baseId}`;
      return alpha;
    }
    
    /**
    /* function onclick. use to open the toggle menu in the ShadowDOM
    /* keyboard and touch accessible (WCAG 2.1) exterimental CSS :focus-visible enabled in Chrome
    /* focus is managed
    */
    onclick(event) {
      event.preventDefault();
      let shadowroot = document.getElementById(alpha).shadowRoot;
      let shadowList = ".card__share";
      shadowList.toString();
      let shadowListSocial = ".card__social";
      shadowListSocial.toString();
      let shadowFirstItem = ".share-toggle";
      shadowListSocial.toString();
      
      const articleList = shadowroot.querySelector(shadowListSocial);
      // console.log( articleList);
      const articleListFirstItem = shadowroot.querySelector(shadowFirstItem);
      const articleToggle = shadowroot.querySelector(shadowList);
      articleList.classList.toggle('card__social--active');
      articleToggle.classList.toggle('share-expanded');
      
      if (articleToggle.getAttribute('aria-expanded') === 'false') {
        
        articleToggle.setAttribute('aria-expanded', 'true');
        
      }
      else {
        
        articleToggle.setAttribute('aria-expanded', 'false');
        articleToggle.focus();

      }
    }

    /**
    /* function getMessages. fetch the messages.json
    */
    getMessages(){
      fetch(`${this.base}/messages.json`).then( r => r.json() )
        .then(this._renderData.bind(this));
    }

    _renderData(data){
      
      this.data = data;
      /**
      /* build the import style tag into the Shadow DOM and append it to the ShadowDOM
      */
      let stylesImportTag = document.createElement("style");  
        stylesImportTag.lang = "css";  
        stylesImportTag.innerHTML = "@import '" + `${this.baseCss}` + "/my-card.css';";
        stylesImportTag.toString();
      this.root`
<style lang="css">
@import 'https://use.fontawesome.com/releases/v5.4.2/css/all.css';
</style>
<style lang="css">
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';
</style>



  <div data-magic="${data.magic}" class="card-wrapper">
    <div class="card radius shadowDepth1">
      <div class="card__image border-tlr-radius">
        <!--<img src="csm_hellink_268d15ec81 - Copie.jpg" alt="image" class="border-tlr-radius" />-->
        <img src="${data.imgsrc}" alt="" class="border-tlr-radius" />
      </div>
      <div class="card__content card__padding">
        <div id="what-is-uportal-i18n-list" class="card__share" tabindex="-1">
          <div class="card__social card__fix--width">
            <a id="${data.linkMenu1.id}" tabindex="0" class="${data.linkMenu1.cssClass}" href="${data.linkMenu1.link}" title="${data.linkMenu1.label}" aria-label="${data.linkMenu1.label}" target="_blank" rel="noopener noreferrer"><span class="${data.linkMenu1.glyphicon}"></span></a>
            <a id="${data.linkMenu2.id}" tabindex="0" class="${data.linkMenu2.cssClass}" href="${data.linkMenu2.link}" title="${data.linkMenu2.label}" aria-label="${data.linkMenu2.label}" target="_blank" rel="noopener noreferrer"><span class="${data.linkMenu2.glyphicon}"></span></a>
            <a id="${data.linkMenu3.id}" tabindex="0" class="${data.linkMenu3.cssClass}" href="${data.linkMenu3.link}" title="${data.linkMenu3.label}" aria-label="${data.linkMenu3.label}" target="_blank" rel="noopener noreferrer"><span class="${data.linkMenu3.glyphicon}"></span></a>
          </div>
          <a class="share-toggle share-icon"  onclick="${this.onclick}" href="javascript:void(0);" aria-controls="what-is-uportal-i18n-list" aria-expanded="false" aria-label="Menu"><i class="fa fa-ellipsis-v"></i></a>

          
        </div>
        <div class="card__meta">
          <i class="fa fa-tags" aria-label="Tag" lang="en"></i>&nbsp;:
          <span>${data.List.map(l => ` <a href="javascript:void(0);">${l.tag}</a> -`)}</span>&nbsp;
          <time>${data.time}</time>
        </div>
        <div class="card__article">
          <h2>${data.title}</h2>
          <div>${data.paragraphs.map(p => `<p>${p.para}</p>`)}</div>
        </div>
      </div>
      <div class="card__action">
        <a href="${data.button1.link}" class="${data.button1.cssClass}" title="${data.button1.label}" rel="noopener noreferrer">${data.button1.name}&nbsp;<span class="${data.button1.glyphicon}" aria-hidden="true"></span></a>&nbsp;
        <a href="${data.button2.link}" class="${data.button2.cssClass}" title="${data.button2.label}" rel="noopener noreferrer">${data.button2.name}&nbsp;<span class="${data.button2.glyphicon}" aria-hidden="true"></span></a>
      </div>
    </div>
  </div>

`.appendChild(stylesImportTag);
    }
  }

  /**
  /* Register the new item my-card
  /* (customizable)
  */
  customElements.define('my-card', myCard);
}());
