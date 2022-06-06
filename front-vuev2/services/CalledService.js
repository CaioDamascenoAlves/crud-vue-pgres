/**
 * file: src/services/CalledService
 * data: 04/06/2022
 * description: arquivo responsavel pelos metodos de requisições das Apis via HTTP
 */

import Api from './Api';

export default {

	/**
	 * Metodo responsavel por criar um novo 'Called'
	 */

	async createNewCalled(called){
		try {
			const response = await Api().post('/calleds', called);
			return response.data;
		} catch (error) {
			return console.log(error);
		}
	},

	/**
	 * Metodo responsavel por listar todos os 'Calleds'
	 */
	async getCalleds() {
		try {
			const response = await Api().get('/calleds');
			return response.data;
		}catch (error) {
			return console.log(error);
		}
	},

		/**
	 * Metodo responsavem por listar por Id um Determinado 'Called'
	 * (GET): localhost/3000/api/calldes/:id
	 */

	async getCalledsId(id) {
		try{
			const response = await Api().get(`/calleds/${id}`);
			return response.data;
		}catch (error) {
			return console.log(error);
		}
	},

	/**
	 * Metodo responsavel por atualizar um determinada 'Called' por Id
	 * (PUT): localhost:3000/api/calldes/:id
	 */

	async updateCalleds(id) {
		try {
			const response = await Api().put(`/calleds/${id}`);
			return response.data;
		} catch (error) {
			return console.log(error);
		}
	},

	/**
	 * Metodo responsavel por excluir determinada 'Called' por Id
	 * (DELETE): localhost:3000/api/calldes/:id
	 */
	async deleteCalled(id) {
		try {
			const response = await Api().delete(`/calleds/${id}`);
			return response.data;
		} catch (error) {
			return console.log(error);
		}
	}

};

