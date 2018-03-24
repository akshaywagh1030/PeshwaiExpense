$(document).ready(function(){

    $("#profile_image").click(function(){
        $("#myModal2").modal({backdrop: false});
    });


    //*************Akshay********************************

    $( 'input[name="date"]').datepicker({
       autoclose: true
     });


       $("#showfilter").click(function(){
          if($("#selectfilter").is(":visible")){
              $("#selectfilter").hide();
              $("#show").show();
              $("#hide").hide();
            }else {
              $("#selectfilter").show();
              $("#show").hide();
              $("#hide").show();
            }
      });

       $('#resetbtn').click(function(){
          $('input[type="text"]').val('');
          $('input[name=default]').prop('checked', false);
          count=0;
           $("#count").hide();
       });

      var count=0;

      $('input[name=default]').click(function(){
                var selected = [];

         if ($(this).is(":checked")) {
             selected.push($(this).attr('name'));
             count++;
         }else {
           count--;
         }

        $("#count").show();
         document.getElementById("count").innerHTML = count;
         if(count==0){
           $("#count").hide();
         }
      });

    //***************************************************


     $('#checkboxAll').change(function() {

     if(this.checked != true){
         $('input[name=checkbox_1]').prop('checked', false);
         $( ".oddhoverable" ).css( "background-color", "white" );
         $( ".evenhoverable" ).css( "background-color", "white" );

     }
     });


});

function checkFluency()
{
    $('input[name=checkbox_1]').prop('checked', true);
    $( ".oddhoverable" ).css( "background-color", "#FEFBCC" );
    $( ".evenhoverable" ).css( "background-color", "#FEFBCC" );

}
