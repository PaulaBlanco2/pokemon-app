import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, LitElement } from 'lit-element';
import '@pokedex/pokemones-ui/pokemones-ui.js';

class PokemonesPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'pokemones-page';
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