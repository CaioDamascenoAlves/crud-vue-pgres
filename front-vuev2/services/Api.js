/**
 * file: src/services/Api.js
 * data 04/06/2022
 * description: arqivo responsavbem por nicializar o 'axios' e as requisições
 */

import axios from 'axios';

export default () => axios.create({
	// 'baseURL' do Back_End -> data a comunicação do front com o Beck
	baseURL: 'http://localhost:3000/api'
})