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
          showCloseRow();
          count=0;
           $("#count").hide();
       });

      var count=0;

      $('input[name=default]').click(function(){
                var selected = [];

         if ($(this).is(":checked")) {
             selected.push($(this).attr('name'));
             incCount();
         }else {
           decCount();
         }

        $("#count").show();
         document.getElementById("count").innerHTML = count;

      });

      function incCount(){
          document.getElementById("count").innerHTML = ++count;
          $("#count").show();
      }

      function decCount(){
          document.getElementById("count").innerHTML = --count;
          if(count<=0){
              count=0;
            $("#count").hide();
          }
      }

      // function showCloseRow(){
      //     $('#reportsTable_29394607').show();
      //     $('#reportsTable_29331719').show();
      //      $('#reportsTable_29331658').show();
      //       $('#reportsTable_29332021').show();
      // }

      function hideCloseRow(id){
          $(id).hide();
      }

      $('.closebadge').click(function(){
          if ($('input[id=close]').is(":checked")) {
              $('input[id=close]').prop('checked', false);
             decCount();
             // showCloseRow();
             $('#reportsTable_29394607').show();
             $('#reportsTable_29331719').show();
              $('#reportsTable_29331658').show();
          }else{
              $('input[id=close]').prop('checked', true);
              incCount();
              hideCloseRow('#reportsTable_29394607');
               hideCloseRow('#reportsTable_29331719');
                hideCloseRow('#reportsTable_29331658');
          }

        });

      $('.openbadge').click(function(){
          if ($('input[id=open]').is(":checked")) {
              $('input[id=open]').prop('checked', false);
             decCount();
             // showCloseRow();
             $('#reportsTable_29332021').show();
          }else{
              $('input[id=open]').prop('checked', true);
              incCount();
              hideCloseRow('#reportsTable_29332021');
          }

        });

    //***************************************************


    $('#checkboxAll').change(function() {

   if (this.checked != true) {
     $("#button_exportButton").hide();
     $('input[name=checkbox_1]').prop('checked', false);
     $(".oddhoverable").css("background-color", "white");
     $(".evenhoverable").css("background-color", "white");

   } else {
     $('input[name=checkbox_1]').prop('checked', true);
     $("#button_exportButton").show();
     $(".oddhoverable").css("background-color", "#FEFBCC");
     $(".evenhoverable").css("background-color", "#FEFBCC");
   }
 });
 
 $('input[name=checkbox_1]').change(function() {

   if (this.checked != true)
   {
     $("#reportsTable_29394607").css("background-color", "white");

   } else {
     $("#reportsTable_29394607").css("background-color", "#FEFBCC");
   }
 });

 $('input[name=checkbox_2]').change(function() {

   if (this.checked != true)
   {
     $("#reportsTable_29332021").css("background-color", "white");

   } else {
     $("#reportsTable_29332021").css("background-color", "#FEFBCC");
   }
 });
 $('input[name=checkbox_3]').change(function() {

   if (this.checked != true)
   {
     $("#reportsTable_29331719").css("background-color", "white");

   } else {
     $("#reportsTable_29331719").css("background-color", "#FEFBCC");
   }
 });
 $('input[name=checkbox_4]').change(function() {

   if (this.checked != true)
   {
     $("#reportsTable_29331658").css("background-color", "white");

   } else {
     $("#reportsTable_29331658").css("background-color", "#FEFBCC");
   }
 });

});
