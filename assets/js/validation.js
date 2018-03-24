function validation()
            {
                var x=document.getElementById("name").value;
                 var pass=document.getElementById("pass").value;
                if(x=="" && pass=="")
                    {
                        alert("Please Enter Username & Password!!");
                      //  documnet.form.name.focus();
                        return false;

                    }
                    else {

                          if( x=="admin"&& pass=="admin")
                         {
                        window.open("inbox.html");
                         }
                       else {
                         alert("Please Enter Correct username and password...!!!!!!");
                          //window.open("index.html");
                      }

                    }
            }
