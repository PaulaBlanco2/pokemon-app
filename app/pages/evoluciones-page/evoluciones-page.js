import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import '@pokedex/evolucion-ui/evolucion-ui.js';

class EvolucionesPage extends CellsPage {
  static get is() {
    return 'evoluciones-page';
  }

  static get properties() {
    return {
      pokemonName: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('navigate-to-pokemones', () => this.navigate('pokemones'));
  }

  updated(changedProperties) {
    if (changedProperties.has('routeParams')) {
      this.pokemonName = this.routeParams.name;
    }
  }

  render() {
    return html`
      <demo-app-template data-cells-type="template">
        <div slot="app_main">
          <evolucion-ui .pokemonName="${this.pokemonName}"></evolucion-ui>
        </div>
      </demo-app-template>
    `;
  }
}

window.customElements.define(EvolucionesPage.is, EvolucionesPage);