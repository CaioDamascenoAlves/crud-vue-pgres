/**
 *  file: src/components/create-called/createCalled.js
 * data: 05/06/2022
 * description: arquivo responsável pela logica do componente
	'CreateComponentCalled'
*/

import { required } from 'vuelidate/lib/validators';
import CalledService from '../../../services/CalledService';

export default {
	components: { 
		name: 'CreateCalledComponent'
	},
  data() {
    return {
		calledForm: {
			name: null,
			state : null,
			category: null,
			called_date: null,
			description: null 
		},
		isSubmitted: false,
    };
	
  },
  validations: {
	  calledForm: {
		  name: { required },
		  state: { required },
		  category: { required },
		  called_date: { required },
		  description: { required },
	  },
  },
  methods: {
	handleSubmitForm() {},

	async submitNewCalled() {
		try {
		this.isSubmitted = true;

		this.$v.$touch();
		if (this.$v.$invalid){
			this.$swal('Oops!', 'You need to include all required fields', 'error');
			return;
			}

			await CalledService.createNewCalled(this.calledForm);
			this.$swal({
				title: 'Called added successfully!',
				icon: 'success',
				showConfirmButton: true,
				allowOutsideClick: false,
				allowEnterKey: true,
				allowEscapeKey: false,
			}).then((data) => {
				this.$router.push({
				name:'list',
				});
			});
		} catch (error) {
			console.log(error);
		}
	},
  },
};