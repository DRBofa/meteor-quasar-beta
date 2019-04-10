import { Meteor } from 'meteor/meteor';
import Student from '/both/collection'

Meteor.startup(() => {
// import '../both/methods'
Meteor.methods({
    insertStudent(doc){
      return Student.insert(doc)
    },
    findStudent(){
      return Student.find().fetch();
    },
    removeStudent(id){
      return Student.remove({_id:id})
    },
    updateStudent(doc){
      return Student.update({_id:doc._id},{$set:doc})
    }
  })

});
