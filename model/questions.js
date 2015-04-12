Questions = new Mongo.Collection("questions");

Questions.allow({
  insert: function (technology, level, question, answer, parentQuestionId) {
    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }
    return true;
    // var id = Questions.insert({
    //   technology: technology,
    //   level: level,
    //   question: question,
    //   answer: answer,
    //   createdAt: new Date(),
    //   // owner: Meteor.userId(),
    //   // username: Meteor.user().username
    // });

    // if(parentQuestionId === undefined || parentQuestionId === null){
    //   return;
    // }

    /**
     Link the new question to its parent. We want the navigation to be top down
     but only link if we actually add the new question.
     **/
    // var parentQuestion = Questions.findOne(parentQuestionId);
    // if(parentQuestion.linkedQuestions === undefined) {
    //   parentQuestion.linkedQuestions = [id];
    // } else {
    //   parentQuestion.linkedQuestions.push(id);
    //   Questions.update(parentQuestion);
    // }
  },

  remove: function (questionId) {
    // var question = Questions.findOne(questionId);
    // if (question.private && question.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can delete it
    //   throw new Meteor.Error("not-authorized");
    // }
    return true;
    // Questions.remove(questionId);
  }
});

Meteor.methods({ 

});