import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    text: DS.attr(),
    notes: DS.attr(),
    qAndA: DS.attr(),
});
