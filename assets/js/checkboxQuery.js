function checkFluency()
{
    $('input[name=checkbox_1]').prop('checked', true);
    $( ".oddhoverable" ).css( "background-color", "#FEFBCC" );
    $( ".evenhoverable" ).css( "background-color", "#FEFBCC" );

}
$(document).ready(function(){
$('#checkboxAll').change(function() {

if(this.checked != true){
    $('input[name=checkbox_1]').prop('checked', false);
    $( ".oddhoverable" ).css( "background-color", "white" );
    $( ".evenhoverable" ).css( "background-color", "white" );

}
});
});
