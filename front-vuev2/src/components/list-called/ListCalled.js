/**
 *  file: src/components/list-called/ListCalled.js
 * data: 06/06/2022
 * description: arquivo responsável pela logica do componente
	'ListCalledComponents'
*/

import CalledService from '../../../services/CalledService';


export default {
  name: 'ListCalledComponent',
  data() {
    return {
      calleds: [],
    };
  },
  mounted() {
    this.listAllCalleds();
  },
  methods: {
    async listAllCalleds() {
      const response = await CalledService.getCalleds();
      this.calleds = response;
    },
	}
};