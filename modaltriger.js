$('.li-modal').on('click', function(e){
  e.preventDefault();
  $('#machineModal').modal('show').find('.modal-content').load($(this).attr('href'));
});
