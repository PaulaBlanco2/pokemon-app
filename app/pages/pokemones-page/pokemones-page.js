import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, LitElement } from 'lit-element';
import '@pokedex/pokemones-ui/pokemones-ui.js';

class PokemonesPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'pokemones-page';
  }

  connectedCallback() {
    super.connectedCallback();

    // Escuchar el evento de navegación de `PokemonesUi`
    this.addEventListener('navigate-to-evolution', (e) => {
      const pokemonName = e.detail.pokemonName;
      this.navigate(`evoluciones/${pokemonName}`);
    });
  }

  _initPage() {
    this.requestUpdate();
  }

  render() {
    return html`
            <demo-app-template data-cells-type="template">
                <div slot="app_main">
                    <pokemones-ui></pokemones-ui>
                </div>
            </demo-app-template>
        `;
  }
}

window.customElements.define(PokemonesPage.is, PokemonesPage);