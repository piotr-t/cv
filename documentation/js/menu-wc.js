'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cv documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' : 'data-bs-target="#xs-components-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' :
                                            'id="xs-components-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' }>
                                            <li class="link">
                                                <a href="components/AboutProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArrowUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArrowUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AsideComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsideComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkilsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkilsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' : 'data-bs-target="#xs-directives-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' :
                                        'id="xs-directives-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' }>
                                        <li class="link">
                                            <a href="directives/AsideIconsDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsideIconsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/CircleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CircleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/CounterDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CounterDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' : 'data-bs-target="#xs-pipes-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' :
                                            'id="xs-pipes-links-module-AppModule-105cad21d0f46995608492c547e50e6aa79d56a68fc22a9c656e56a5f9ebe17b39f2bad1ca5fb8cd492d17821e5f889bea08e085d50d3e58abd500670df6d1af"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Common.html" data-type="entity-link" >Common</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AsideServiceService.html" data-type="entity-link" >AsideServiceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});