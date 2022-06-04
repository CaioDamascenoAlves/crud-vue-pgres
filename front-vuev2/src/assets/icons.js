/**
 * file: assets/icons.js
 * date: 04/06/2022
 * description: arquivo responsavem por lidar com a logica do icones na aplicação
 */

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserPlus, faUserEdit, faTrash, faFileCirclePlus );
Vue.component('font-awesome-icon', FontAwesomeIcon);