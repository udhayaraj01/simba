var root=window.location.pathname;

function ValidateEmail(mail)   
{  
  console.log("email",mail);
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}  

$(document).ready(function(){
  
   $("form").submit(function(e){
    console.log('form_id',$(this).attr("id"));
    form_submit($(this).attr("id"));

    e.preventDefault();
  });


});

function form_submit(form_id){
  console.log('form_id',form_id);
  $("#"+form_id).find("#invalid_email").text("");
  
  $("#"+form_id).find("#invalid_phone").text("");
  $("#"+form_id).find("#invalid_wordcnt").text("");
  $("#"+form_id).find("#success_msg").text("");
  
    $("#"+form_id).find("input").css("border-color","");
  
     var emailfilter = /^([a-zA-Z0-9_\.\-+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!emailfilter.test($("#"+form_id).find("#email").val())) {
    
        //alert('Message: Please Enter a valid email address');
        $("#"+form_id).find("#invalid_email").text("Please Enter a valid email address");
        $("#"+form_id).find("#email").css("border-color","red");
        $("#"+form_id).find("#email").focus();
        return false;
     }
if(form_id!="career_form"){

     if(isNaN(parseInt($("#"+form_id).find("#phone").val()))){
     
     console.log("phone");
      
      $("#"+form_id).find("#invalid_phone").text("Please Enter a valid Phone Number");
        //alert('Message: Please Enter a valid Phone Number');
       $("#"+form_id).find("#phone").css("border-color","red");
        $("#"+form_id).find("#phone").focus();
        return false;
     }
     
     

   }
    
    
      
    var url="mail.php";
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $("#"+form_id).serialize(), 
      async:true,
      success: function(data)
      {
        console.log(data);
        if(data.trim()=="success")
        {
          //alert('Message: Your Message Sent Successfully!');
          $("#"+form_id).find("#success_msg").text("Your Message Sent Successfully!");
          $("#"+form_id).trigger("reset");
        }
        else{
           $("#"+form_id).find("#success_msg").text("Your Message Sending Faild!");
          
        }
      },
      error: function(jqXHR, textStatus, errorMessage) {
          alert('Message: Requested page  '+errorMessage);
      }
    });
    
    

}

