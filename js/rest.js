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

              
                if(data.status == 'success'){


                    window.location.href = 'booking.html?user='+newData.username;


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

    var slotNo=document.getElementById("slotNo").value;   
    var vehicleNo=document.getElementById("vehicleNo").value;   


    newData =JSON.parse('{ "slotNo":"'+slotNo+'", "vehicleNo":"'+vehicleNo+'", "name":"'+user+'"}');

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


                    document.getElementById("slotNo").value="";   
                    document.getElementById("vehicleNo").value="";   

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