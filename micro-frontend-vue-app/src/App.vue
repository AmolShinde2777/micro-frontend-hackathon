<template>
  <div class="form-wrap container">
    <div v-if="!submitted">
      <div class="form-group-css form-group">
        <label for="firstname">First Name</label>
        <input v-model="firstname" v-bind:class="{ 'form-control': true }" />
        <label for="lastname">Last Name</label>
        <input v-model="lastname" v-bind:class="{ 'form-control': true }" />
        <label for="dob">Date of Birth</label>
        <input v-model="dob" v-bind:class="{ 'form-control': true }" />
        <label for="gender">Gender</label>
        <input v-model="gender" v-bind:class="{ 'form-control': true }" />
        <label for="address">Address</label>
        <input v-model="address" v-bind:class="{ 'form-control': true }" />
      </div>
      <div class="form-group">
        <a
          type="submit"
          href="#"
          v-on:click.stop.prevent="submit"
          class="btn btn-lg btn-success"
          >Submit</a
        >
      </div>
    </div>
    <!-- <div v-else class="alert alert-success" role="alert">
      <h5>Thank you</h5>
      <p>Your validation was a success!</p>
    </div> -->
  </div>
  <!--end form-wrapper-->
</template>

<script>
export default {
  data: function () {
    return {
      firstname: "",
      lastname: "",
      dob: "",
      gender: "",
      address: "",
      valid: false,
      submitted: false,
    };
  },
  methods: {
    submit: function () {
      this.valid = true;
      if (this.valid) {
        //THIS IS WHERE YOU SUBMIT DATA TO SERVER
        var dataArray = [];
        var data;
        if (typeof localStorage !== "undefined") {
          if (localStorage.getItem("editRecord") !== "undefined") {
            var editRecord = JSON.parse(localStorage.getItem("editRecord")),
              studentdata = JSON.parse(localStorage.getItem("studentData")),
              updateRecord = studentdata.find((item) => item.id === editRecord.id);
            updateRecord.firstname = this.firstname;
            updateRecord.lastname = this.lastname;
            updateRecord.dob = this.dob;
            updateRecord.gender = this.gender;
            updateRecord.address = this.address;
            localStorage.setItem("studentData", JSON.stringify(studentdata));
            localStorage.setItem("editRecord", undefined);
          } else {
            data = JSON.parse(localStorage.getItem("studentData"));
            if (data) {
              dataArray = data;
            } else {
              dataArray = [];
            }
            var nextID = dataArray.length + 1;
            dataArray.push({
              id: nextID,
              firstname: this.firstname,
              lastname: this.lastname,
              dob: this.dob,
              gender: this.gender,
              address: this.address,
            });
            localStorage.setItem("studentData", JSON.stringify(dataArray));
          }
           this.submitted = true;
        } else {
          alert('Error: Localstorage not available');
        }
        
        this.$emit('submit','fromvueapp');

      }
    }, //end submit
    loadData: function () {
      if (typeof localStorage !== "undefined" && localStorage.getItem("editRecord") != "undefined") {
        var data = JSON.parse(localStorage.getItem("editRecord"));
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.dob = data.dob;
        this.gender = data.gender;
        this.address = data.address;
        //localStorage.setItem("editRecord", undefined);
      } else {
        this.firstname = "";
        this.lastname = "";
        this.dob = "";
        this.gender = "";
        this.address = "";
      }
    },
  },
  beforeMount() {
    var me = this;
    me.loadData();
  }
};
</script>
<style>
.form-wrap {
  padding-top: 35px;
}

.form-group-css {
  line-height: 40px;
}

label {
  font-weight: bold;
}

.alert {
  padding-top: 1.5rem;
}
.alert h5 {
  margin-bottom: 0rem;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>