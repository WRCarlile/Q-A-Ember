import Ember from 'ember';

export default Ember.Component.extend({
  delete(question) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
});