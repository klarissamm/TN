var App = App || {};

App.init = function() {
  this.$button        = $('button');
  this.$modalContent  = $('.modal-content');

  this.$button.on('click', this.cta.bind(this));

};


App.cta = function() {
  console.log('clicked');
  this.$modalContent.addClass('modalStyle');
  this.$modalContent.html(`
      <div class='modal-header'>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h3 class='modal-title'>CTA</h3>
      </div>
      <div class='modal-body'>
      <h3>This is a call to action!</h3>
      <button type="button" name="button" class="closeModal">Do something</button>
      </div>`);

  $('.modal').modal('show');

};


$(App.init.bind(App));
