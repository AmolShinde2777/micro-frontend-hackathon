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
  props: {
    id: {
      type: String,
      default: "",
    },
    editFlag: {
      type: String,
      default: "",
    },
  },
  data: function () {
    return {
      firstname: "",
      lastname: "",
      dob: "",
      gender: "",
      address: "",
      valid: false,
      submitted: false,
      idProp: "",
      editFlagProp: "",
    };
  },
  watch: {
    id: function (newVal) {
      this.idProp = newVal;
    },
    editFlag: function (newVal) {
      this.editFlagProp = newVal;
      this.editFlagProp ? this.fetchData(this.idProp) : "";
    },
  },
  methods: {
    submit: function () {
      this.valid = true;
      if (this.editFlagProp) {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname: this.firstname,
            lastname: this.lastname,
            dob: this.dob,
            gender: this.gender,
            address: this.address,
          }),
        };
        fetch(
          "http://localhost:3000/studentData/" + this.idProp,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => (this.idProp = data.id));
        this.$emit("submit", "fromvueapp");
      } else {
        if (this.valid) {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstname: this.firstname,
              lastname: this.lastname,
              dob: this.dob,
              gender: this.gender,
              address: this.address,
            }),
          };
          fetch("http://localhost:3000/studentData", requestOptions)
            .then((response) => response.json())
            .then((data) => (this.id = data.id));
          this.$emit("submit", "fromvueapp");
        }
      }
      this.editFlagProp = false;
      this.submitted = true;
    }, //end submit

    setData: function (data) {
      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.dob = data.dob;
      this.gender = data.gender;
      this.address = data.address;
      console.log(data);
    },

    fetchData: function (value) {
      fetch("http://localhost:3000/studentData/" + value)
        .then((response) => response.json())
        .then((data) => this.setData(data));
      this.editFlagProp = true;
    },
  },
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