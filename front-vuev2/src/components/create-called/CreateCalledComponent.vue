<template>
	<div class="container">
		<div class="card">
			<div class="card-header">
				<h3 class="fw-bold">Add Called</h3>
			</div>
			<div class="card-body">
				<form v-on:submit.prevent="handleSubmitForm()">
					<div class="form-group mb-3">
						<label class="fw-bold">Called Name</label>
						<input
							type="text" 
							id="name"
							name="name"
							class="form-control"
							placeholder="Type name Called"
							v-model="calledForm.name"
							:class="{'is-invalid': isSubmitted && $v.calledForm.name.$error,}"
						/>
						<div 
							v-if="isSubmitted && !$v.calledForm.name.required" 
								class="invalid-feedback">'Called Name' field is required!
						</div>
					</div>
					<div class="mb-3">
						<label class="fw-bold">State Called</label>
						<select 
							id="state"
							name="state" 
							class="form-select" 
							v-model="calledForm.state"
							:class="{ 
								'is-invalid' :isSubmitted && $v.calledForm.state.$error,
							}"
						>
						<div 
							v-if="isSubmitted && !$v.calledForm.state.required" 
								class="invalid-feedback">'Called State' field is required!
						</div>
								<option selected>Choose...</option>
      							<option value="1">New</option>
						</select>
					</div>
					<div class="mb-3">
						<label class="fw-bold">Category Called</label>
						<select 
							id="category" 
							name="category"
							class="form-select" 
							v-model="calledForm.category"
							:class="{ 'is-invalid' :isSubmitted && $v.calledForm.category.$error,}"
						>
						<div 
							v-if="isSubmitted && !$v.calledForm.category.required" 
								class="invalid-feedback">'Called Category' field is required!
						</div>
								<option selected>Choose...</option>
      							<option value="Urgente">Urgente</option>
      							<option value="Remoto">Remoto</option>
      							<option value="Nao-remoto">Não-Remoto</option>
						</select>
					</div>
					<div class="mb-3">
						<label class="fw-bold">Call Date</label>
						<input 
							type="date" 
							id="called_date"
							name="called_date"
							class="form-control" 
							placeholder="YYYY/MM/DD" 
							v-model="calledForm.called_date"
							:class="{ 'is-invalid' :isSubmitted && $v.calledForm.called_date.$error,}"
						>
						<div 
							v-if="isSubmitted && !$v.calledForm.called_date.required" 
								class="invalid-feedback">'Called Call Date' field is required!
						</div>
					</div>
					<div class="mb-3">
						<label class="fw-bold">Description of the Call</label>
						<input 
							type="text" 
							id="description"
							name="description"
							class="form-control" 
							placeholder="Enter call details" 
							v-model="calledForm.description"
							:class="{ 'is-invalid' :isSubmitted && $v.calledForm.description.$error,}" 
						>
						<div 
							v-if="isSubmitted && !$v.calledForm.description.required" 
							class="invalid-feedback">'Called Description' field is required!
						</div>
					</div>
					<div class="mb-3 ">
						<button @click="submitNewCalled" class="btn btn-primary">
							<font-awesome-icon :icon="['fa-solid', 'fa-file-circle-plus']" />
							CallOpener
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script >
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
</script>

