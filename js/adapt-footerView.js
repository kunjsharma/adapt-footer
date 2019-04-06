define([
    'core/js/adapt'
], function(Adapt) {

    var InlineMenuView = Backbone.View.extend({

        className: "footer",

        initialize: function() {
            this.template = "footer";
            this.render();
            
        },

        postRender: function() {
            //$('.footer').hide();
            this.$('.footer-item-title-container').each(function(item, index) {
                $(this).children('.footer-item-title').css('width', (100/$(this).children('.footer-item-title').length)+'%');
            });
        },

        render: function() {
            var collectionData = this.collection.toJSON();
            var modelData = this.model.toJSON();
            var template = Handlebars.templates["footer"];
            this.$el.html(template(modelData)).insertAfter('#wrapper');
            _.defer(_.bind(this.postRender, this));
            return this;
        },

    });

    return InlineMenuView;
});