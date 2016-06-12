import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        text: this.get('text') ? this.get('text') : "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
