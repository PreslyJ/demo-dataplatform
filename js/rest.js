DEMO_URL="";





function login (e){

    e = e || window.event;

  //  e.preventDefault();

    var user=document.getElementById("username").value;   
    var password=document.getElementById("password").value;   


    newData =JSON.parse('{ "username":"'+user+'", "password":"'+password+'"}');

    var data = JSON.stringify(newData);


    try {
        
        $.ajax({
            url: 'http://13.75.65.67/nodered/tenant1/login',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: data,
            async:true,
            processData: false,
            success: function( data, textStatus, jQxhr ){
                //alert(data);

              
                if(data.emp){

                    window.location.href = 'booking.html?user='+user+'&firstName='+data.emp[0].firstName+'&lastName='+data.emp[0].lastName;


                }else{

                    alert('login failed');

                }



            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert(errorThrown);
            }
        });

    } catch (error) {
        alert(error);    
    }

}


function getDetails (user){

   


    try {
        
        $.ajax({
            url: 'http://13.75.65.67/nodered/tenant1/loadcontent?user='+user,
            dataType: 'json',
            type: 'GET',
            contentType: 'application/json',
            async:true,
            processData: false,
            success: function( data, textStatus, jQxhr ){
                //alert(data);

              
                if(data){

                    
                    userna  =   data['emp'][0].firstName+' '+data['emp'][0].lastName;



                    document.getElementById("userwelcome").innerHTML= 'Welcome  '+userna;


                }


            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert(errorThrown);
            }
        });

    } catch (error) {
        alert(error);    
    }



}



function book (){

    var vehicleNo=document.getElementById("vehicleNo").value;   

    if(!vehicleNo || vehicleNo.length < 1){

        alert("Vehicle No can't be empty");
        return;

    }

    newData =JSON.parse('{  "vehicleNo":"'+vehicleNo+'", "name":"'+user+'"}');

    var data = JSON.stringify(newData);


    try {
        
        $.ajax({
            url: 'http://13.75.65.67/nodered/tenant1/carpark/book',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: data,
            async:true,
            processData: false,
            success: function( data, textStatus, jQxhr ){
                //alert(data);

              
                if(data.status == 'success'){


                    alert('Booking success');
                    
                    qr(data.slotNo);

                    document.getElementById("msg").innerHTML="Your Car Park Slot No - "+data.slotNo;   

                }else{

                    alert('Booking failed');

                }



            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert(errorThrown);
            }
        });

    } catch (error) {
        alert(error);    
    }

}


function downloadqr(){

    var d= document.getElementById("qr1").src;


    jQuery.ajax({
        url: d,
        xhrFields:{
            responseType: 'blob'
        },
        success: function(data){            
            var blobData = data;
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(data);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = "q.png";
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
          
        }
    });

  }