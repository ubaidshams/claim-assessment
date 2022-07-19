<template>
  <div class="ma-7 mainBlock">
    <div class="claimHeader pa-3">
      <p class="claimNumber ma-5">Claim Number - 4340002739</p>
      <v-divider vertical></v-divider>
      <p class="newClaim ma-5">FEATURE CLAIM</p>
      <v-spacer></v-spacer>
      <p class="viewDetails mt-3 mr-5"><b>View Details</b></p>
    </div>

    <div class="d-flex my-5">
      <h2 class="pageHeader">Claim Assessment Sheets</h2>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            flat
            v-bind="attrs"
            v-on="on"
            class="white--text text-caption"
            color="#E46A25"
          >
            <v-icon left color="white"> mdi-file-export-outline </v-icon>
            <v-divider vertical class="mx-3 grey lighten-5"></v-divider>
            Export As
          </v-btn>
        </template>
        <v-list
          v-for="link in links"
          :key="link.text"
          style="border: 1px solid #c1c8cc"
        >
          <v-list-item>
            <v-icon :color="link.color" class="pr-3"
              >mdi-{{ link.icon }}</v-icon
            >
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- form -->
    <v-form>
      <v-layout wrap class="pt-4">
        <v-flex class="form-group">
          <label class="form-label">
            <b>Type Of Settlement &nbsp; <span class="required">*</span></b>
          </label>
          <v-select
            class="input"
            placeholder="Select"
            :items="typeOfSettlement"
            solo
            dense
            outlined
          >
          </v-select>
        </v-flex>

        <v-flex class="form-group">
          <label class="form-label">
            <b>Reason For Settlement &nbsp;<span class="required">*</span></b>
          </label>
          <v-select
            class="input"
            placeholder="Select"
            solo
            dense
            outlined
            :items="reasonForSettlement"
          ></v-select>
        </v-flex>

        <v-flex class="form-group">
          <label class="form-label">
            <b>Payment Processing &nbsp;<span class="required">*</span></b>
          </label>
          <v-select
            class="input"
            placeholder="Select"
            solo
            dense
            outlined
            :items="paymentProcessing"
          ></v-select>
        </v-flex>

        <v-flex class="form-group">
          <label class="form-label">
            <b>Payment to &nbsp;<span class="required">*</span></b>
          </label>
          <v-select
            class="input"
            placeholder="Select"
            solo
            dense
            outlined
            :items="paymentTo"
          ></v-select>
        </v-flex>

        <v-flex class="form-group">
          <label class="form-label"> <b>Transaction Type</b></label>
          <v-select
            class="input"
            placeholder="Partial Payment"
            solo
            dense
            outlined
            :items="transactionType"
          ></v-select>
        </v-flex>

        <!-- 2nd line -->
        <v-flex class="form-group">
          <label class="form-label"> <b>Amount Paid Till Date</b></label>
          <v-text-field
            class="input"
            placeholder="Enter..."
            solo
            dense
            outlined
          ></v-text-field>
        </v-flex>
        <!--  -->

        <v-flex class="form-group">
          <label class="form-label">
            <b>Currency</b> &nbsp; <span class="required">*</span></label
          >
          <v-select
            class="input"
            placeholder="Select"
            solo
            dense
            outlined
            :items="currency"
          ></v-select>
        </v-flex>
        <v-flex class="form-group">
          <label class="form-label">
            <b>Exchange Rate</b> &nbsp; <span class="required">*</span></label
          >
          <v-text-field
            class="input"
            placeholder="Enter..."
            solo
            dense
            outlined
          ></v-text-field>
        </v-flex>

        <v-flex class="form-group" style="margin-right: 300px">
          <label class="form-label">
            <b>Agreed Value </b>&nbsp;<span class="required"> % *</span></label
          >
          <v-text-field
            class="input"
            placeholder="Enter..."
            solo
            dense
            outlined
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-form>
    <claim-table />
    <!-- --------------------------BUTTONS---------------------------------- -->
    <v-card flat>
      <v-layout class="py-4">
        <v-btn elevation="3" class="red--text mr-4 btnDanger" outlined
          ><v-icon>mdi-backspace-outline</v-icon
          ><v-divider vertical class="red mx-2 lighten-4"></v-divider>
          <span class="textField">Reset</span></v-btn
        >
        <v-spacer></v-spacer>
        <v-btn elevation="3" class="white--text mr-4 btnSuccess" dark
          ><v-icon class="icon">mdi-checkbox-marked-circle</v-icon
          ><v-divider vertical class="green mx-2 lighten-4"></v-divider>
          <span class="textField">Save</span></v-btn
        >

        <v-btn elevation="3" class="white--text btnSuccess" color="#23b1a9"
          ><v-icon class="icon">mdi-arrow-right-circle</v-icon
          ><v-divider vertical class="green mx-2 lighten-4"></v-divider>
          <span class="textField">Submit</span></v-btn
        >
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import ClaimTable from "./ClaimTable.vue";
export default {
  components: { ClaimTable },
  name: "MainComp",
  data() {
    return {
      links: [
        { icon: "file-pdf-box", text: "PDF Document", color: "red" },
        { icon: "file-excel", text: "Excel Document", color: "#1d813f" },
      ],
      typeOfSettlement: ["Type 1", "Type 2", "Type 3", "Type 4"],
      reasonForSettlement: ["A", "B", "C", "D"],
      paymentProcessing: ["Type 1", "Type 2", "Type 3", "Type 4"],
      paymentTo: ["A", "B", "C", "D"],
      transactionType: ["A", "B", "C", "D"],
      currency: ["USD", "INR", "YEN", "EURO"],
    };
  },
};
</script>

<style scoped>
.required {
  font-weight: 600 !important;
  font-size: 14px !important;
  color: #999 !important;
}
</style>
