<template>
  <div>
    <h3 class="text-center">List All Calleds</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Called Name</th>
          <th class="text-center">State Called</th>
          <th class="text-center">Category Called</th>
          <th class="text-center">Call Data</th>
          <th class="text-center">Description</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="called in calleds" :key="called.called_id">
          <td>{{ called.name }}</td>
          <td>{{ called.job_role }}</td>
          <td>{{ called.salary }}</td>
          <td>{{ called.birth }}</td>
          <td>{{ called.called_registration }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: called.called_id } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'file-pen']" /> Edit
            </router-link>
          </td>
          <td>
            <button @click="removeCalled(called.called_id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" /> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
</script>
