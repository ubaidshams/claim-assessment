<template>
  <div class="dropdown d-flex flex-column">
    <v-container fluid class="header d-flex">
      <h3>Indemnity Details</h3>
      <v-spacer></v-spacer>
      <div class="headerBtns">
        <v-btn depressed class="mx-2 red--text" @click="handleReset"
          >RESET</v-btn
        >
        <v-btn @click="handleDropdown('')" depressed class="mx-2 cyan--text"
          >SAVE & CLOSE</v-btn
        >
      </div>
    </v-container>
    <v-simple-table>
      <thead class="cyan">
        <tr>
          <th v-for="header in tableHeader" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableData.length !== 0">
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ item.categoryOfAssessedAmount }}</td>
            <td>{{ item.commodity }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.rate }}</td>
            <td>{{ item.totalAmount }}</td>
            <td>
              <v-btn icon
                ><v-icon color="red" @click="handleDeleteRow(index)"
                  >mdi-delete-outline</v-icon
                ></v-btn
              >
            </td>
          </tr>
        </template>
        <tr>
          <td>
            <v-select
              :items="category"
              class="mt-3"
              outlined
              dense
              label="Enter"
              v-model="categoryOfAssessedAmount"
            >
            </v-select>
          </td>

          <td>
            <v-text-field
              v-model="commodity"
              class="mt-3"
              outlined
              dense
              label="Enter..."
            >
            </v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="quantity"
              class="mt-3"
              outlined
              dense
              label="Enter..."
            >
            </v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="rate"
              class="mt-3"
              outlined
              dense
              label="Enter..."
            >
            </v-text-field>
          </td>
          <td>
            <v-text-field
              v-model.number="totalAmount"
              class="mt-3"
              disabled
              outlined
              dense
            >
            </v-text-field>
          </td>
          <td>
            <v-btn icon
              ><v-icon color="red" @click="dialog = !dialog"
                >mdi-delete-outline</v-icon
              ></v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h5 cyan">
              <span>Confirm Deletion</span>
              <v-spacer></v-spacer>
              <v-btn color="" @click="dialog = false" text
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </v-card-title>

            <v-card-text class="cardBody mt-5">
              <h3>Are you sure, You want to delete record?</h3>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="" class="" @click="dialog = false"> Cancel </v-btn>
              <v-btn
                color="red"
                class="white--text"
                @click="handleConfirmDelete(index)"
              >
                Yes Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <v-btn
      class="text-cyan my-3 mx-auto"
      color="white"
      flat
      dense
      width="100"
      @click="handleAddRow"
      ><v-icon color="cyan">mdi-plus</v-icon> Add Row</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "DropdownTable",
  data() {
    return {
      tableHeader: [
        "Category of Assessed Amount *",
        "Commodity  *",
        "Quantity *",
        "Rate *",
        "Total Amount *",
        "Action",
      ],
      categoryOfAssessedAmount: "",
      commodity: "",
      quantity: "",
      rate: "",
      totalAmount: 0,
      category: ["Type 1", "Type 2", "Type 3", "Type 4"],
      dialog: false,
      tableData: [],
      deleteRowIndex: null,
    };
  },
  watch: {
    quantity() {
      this.totalAmount = this.calTotal();
    },
    rate() {
      this.totalAmount = this.calTotal();
    },
  },
  computed: {
    getCurrentData() {
      return {
        categoryOfAssessedAmount: this.categoryOfAssessedAmount,
        commodity: this.commodity,
        quantity: this.quantity,
        rate: this.rate,
        totalAmount: this.totalAmount,
      };
    },
  },
  props: ["handleDropdown"],
  methods: {
    calTotal() {
      return this.quantity * this.rate;
    },
    handleAddRow() {
      this.tableData.push(this.getCurrentData);
      this.$emit("newDataAdd",this.totalAmount)
      this.categoryOfAssessedAmount = "";
      this.quantity = "";
      this.commodity = "";
      this.rate = "";
      this.totalAmount = "";
    },
    handleReset() {
      this.categoryOfAssessedAmount = "";
      this.quantity = "";
      this.commodity = "";
      this.rate = "";
      this.totalAmount = "";
    },
    handleDeleteRow(index) {
      this.dialog = true;
      this.deleteRowIndex = index;
    },
    handleConfirmDelete(index) {
      console.log(index);
      this.tableData.splice(this.deleteRowIndex, 1);
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  background: #f5f5f5;
}
.header {
  width: 100%;
}
th {
  color: #fff !important;
  font-weight: bold !important;
  font-size: 14px !important ;
}
button {
  text-transform: uppercase;
}
.cardBody {
  min-height: 200px;
}
</style>
