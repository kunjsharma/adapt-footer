define([
    'backbone',
    'core/js/adapt',
], function(Backbone, Adapt) {

    function setupFooter(footerData) {
        var footerModel = new Backbone.Model(footerData);
        var footerCollection = new Backbone.Collection(footerModel.get('_footerItems'));

        new FooterView({
            model: footerModel,
            collection: footerCollection
        }).$el;
    }

    function initFooter() {
        var _oFooter = Adapt.course.get('_footer');
        if (!_oFooter || _oFooter._isEnabled === false) return;
        setupFooter(_oFooter);
    }

    var FooterView = Backbone.View.extend({

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

    Adapt.on('adapt:start', initFooter);
});