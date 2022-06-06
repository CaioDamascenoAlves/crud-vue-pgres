<template>
  <div>
    <h3 class="text-center">List All Calleds</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Called Name</th>
          <th class="text-center">State</th>
          <th class="text-center">Category</th>
          <th class="text-center">Called Date</th>
          <th class="text-center">Description</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="called in calleds" :key="called.called_id">
          <td>{{ called.name }}</td>
          <td>{{ called.state }}</td>
          <td>{{ called.category }}</td>
          <td>{{ called.called_date }}</td>
          <td>{{ called.description }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: called.called_id } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'user-edit']" /> Edit
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

<script src="./ListCalled.js"></script>

<style src="" scoped></style>
