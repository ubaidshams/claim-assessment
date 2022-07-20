<template>
  <div>
    <v-simple-table height="500">
      <thead class="">
        <tr>
          <th v-for="header in tableHeader" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Leakage</td>
          <td>25,00,000</td>
          <td>16,25,123</td>
          <td>25,23,178</td>
          <td>
            <v-btn
              depressed
              color="transparent"
              @click="handleDropdown('Leakage')"
              >ADD/MODIFY</v-btn
            >
          </td>
        </tr>
        <tr v-show="dropdownTable == 'Leakage'">
          <td colspan="5">
            <dropdown-table
              :handleDropdown="handleDropdown"
              @newDataAdd="handleNewData"
            />
          </td>
        </tr>
        <tr>
          <td>Damage</td>
          <td>25,00,000</td>
          <td>16,25,123</td>
          <td>25,23,178</td>
          <td>
            <v-btn
              depressed
              color="transparent"
              @click="handleDropdown('Damage')"
              >ADD/MODIFY</v-btn
            >
          </td>
        </tr>
        <tr v-show="dropdownTable == 'Damage'">
          <td colspan="5">
            <dropdown-table :handleDropdown="handleDropdown" />
          </td>
        </tr>
        <tr>
          <td>Shortage</td>
          <td>25,00,000</td>
          <td>16,25,123</td>
          <td>25,23,178</td>
          <td>
            <v-btn
              depressed
              color="transparent"
              @click="handleDropdown('Shortage')"
              >ADD/MODIFY</v-btn
            >
          </td>
        </tr>
        <tr v-show="dropdownTable == 'Shortage'">
          <td colspan="5">
            <dropdown-table :handleDropdown="handleDropdown" />
          </td>
        </tr>
        <tr>
          <td>Non-Delivery of Total Consignment</td>
          <td>25,00,000</td>
          <td>16,25,123</td>
          <td>25,23,178</td>
          <td>
            <v-btn
              depressed
              color="transparent"
              @click="handleDropdown('non-delivery')"
              >ADD/MODIFY</v-btn
            >
          </td>
        </tr>
        <tr v-show="dropdownTable == 'non-delivery'">
          <td colspan="5">
            <dropdown-table
              :handleDropdown="handleDropdown"
              @newDataAdd="handleNewData"
            />
          </td>
        </tr>
        <tr>
          <td>Total<span class="required">*</span></td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Agreed Value Amount <span class="required">*</span></td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Gross Total <span class="required">*</span></td>
          <td>25,00,000</td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Repair, Repacking,Reprocessing etc.</td>
          <td>25,00,000</td>
          <td>16,25,123</td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Additional Freigh/Incidentals</td>
          <td>25,00,000</td>
          <td>16,25,123</td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Duties</td>
          <td></td>
          <td>16,25,123</td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Total Indemnity Amount (A) <span class="required">*</span></td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Less Salvage (B)</td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Less Other Adjustment (C)</td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Less Deductible (D)</td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Less Deduction - Recovery Rights (E)</td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Total Payable Amount <span class="required">*</span></td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Amount Held <span class="required">*</span></td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Held % <span class="required">*</span></td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
        <tr>
          <td>Net Amount Payable <span class="required">*</span></td>
          <td></td>
          <td></td>
          <td>25,23,178</td>
          <td></td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import DropdownTable from "./DropdownTable.vue";
export default {
  components: { DropdownTable },
  name: "ClaimTable",
  data() {
    return {
      tableHeader: [
        "Indemnity Details",
        "Assessed Amount (Foreign Currency)",
        "Assessed Amount (INR)  *",
        "Total INR Admissable Amount  *",
        "Action",
      ],
      dropdownTable: "",
    };
  },
  methods: {
    handleDropdown(val) {
      this.dropdownTable = val;
    },
    handleNewData(newTotal) {
      console.log(newTotal);
    },
  },
};
</script>

<style lang="scss" scoped>
thead {
  background: #23b1a9;
}
th {
  font-weight: bold !important;
  font-size: 0.9rem !important;
  color: #fff !important;
}
button {
  color: #2d21b2 !important;
}
.required {
  font-weight: 600 !important;
  font-size: 14px !important;
  color: #999 !important;
}
</style>
