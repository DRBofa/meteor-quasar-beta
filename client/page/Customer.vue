<template>
<div>
    <ul>
        <li
            v-for="(todo,index) in todos"
            :key="index">
            {{ todo.name }} _ {{todo.age}} _ {{todo.address}}
            <button
          @click="btnDelete(todo._id)"
        >X{{index}}</button>
            <button @click="btnEdit(todo)">Edit</button>
        </li>
    </ul>Name:
    <input v-model="name">
    <br>Age:
    <input v-model="age">
    <br>Address:
    <input v-model="address">
    <br>
    <button @click="btnSubmit">{{formType}}</button>
    <button @click="getData">Find</button>
</div>
</template>

<script>
// import {Meteor} from 'meteor/meteor'
export default {
    data() {
        return {
            formType: "Add",
            todos: [{
                name: "Jon",
                age: 20,
                address: "Battambang"
            }],
            list: ["2", "3"],
            form: {
                age: "qww",
                name: "55555"
            },
            _id: "",
            name: "Mama",
            age: 20,
            address: "Battambang",
            index: null
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            Meteor.call("findStudent", (err, result) => {
                if (!err) {
                    this.todos = result;
                    console.log(result);
                }
            });
        },
        btnSubmit() {
            if (this.formType == "Add") {
                let doc = {
                    name: this.name,
                    age: this.age,
                    address: this.address
                };
                Meteor.call("insertStudent", doc, (err, result) => {
                    if (result) {
                        alert("Saved !");
                        this.getData();
                    } else console.log(err);
                });
            } else {
                let doc = {
                    _id: this._id,
                    name: this.name,
                    age: this.age,
                    address: this.address
                };
                Meteor.call("updateStudent", doc, (err, result) => {
                    if (!err) {
                        alert("Updated !");
                        this.getData();
                    }
                });
                this.formType = "Add";
            }
        },
        btnEdit(todo) {
            this._id = todo._id;
            this.formType = "Update";
            this.name = todo.name;
            this.age = todo.age;
            this.address = todo.address;
        },
        btnDelete(id) {
            Meteor.call('removeStudent', id, (err, result) => {
                if (result) {
                    alert('Deleted !')
                    this.getData()
                }
            })
            console.log(this.form);
            console.log(this.todos);
        },
        btnPush() {
            let doc = {
                name: this.name,
                age: this.age,
                address: this.address
            };
            this.todos.push(doc);
            this.name = "";
            this.age = null;
            this.address = "";
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 2em;
    text-align: center;
}
</style>
