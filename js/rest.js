$(function() {
                $(".submit").click(function() {
                    var CustomerFirstName = $("#CustomerFirstName").val();
                    var CustomerLastName = $("#CustomerLastName").val();
                    var Phone = $("#Phone").val();
                    var Postcode = $("#Postcode").val();
                    var CustomerEmail = $("#CustomerEmail").val();
                    var VenueID = $("#VenueID").val();
                     var dataString = 'CustomerFirstName=' + CustomerFirstName + '&CustomerLastName=' + CustomerLastName + '&Phone=' + Phone + '&Postcode=' + Postcode + '&CustomerEmail=' + CustomerEmail;
                     console.log(dataString);
                     var myObject = new Object();
                      myObject.CustomerFirstName = CustomerFirstName;
                      myObject.CustomerLastName = CustomerLastName;
                      myObject.Phone = Phone;
                      myObject.Postcode = Postcode;
                      myObject.CustomerEmail = CustomerEmail;
                      myObject.VenueID = VenueID;
                   // var dataString = 'CustomerFirstName=' + CustomerFirstName + '&CustomerLastName=' + CustomerLastName + '&Phone=' + Phone + '&Postcode=' + Postcode + '&CustomerEmail=' + CustomerEmail;
                    //alert(myObject);

                    //console.log(myObject);
                    //console.log(JSON.parse(myObject));
                    //console.log(newdata);
                    
                    var accountInfo = {
                      "CustomerFirstName": CustomerFirstName,
                      "CustomerLastName": CustomerLastName,
                      "Phone": Phone,
                      "Postcode": Postcode,
                      "CustomerEmail": CustomerEmail
                    };
                    var contactinfo = JSON.stringify(accountInfo);
                    console.log(contactinfo);
                    var token = "eyJhbGciOiJIUzI1NiIsImtpZCI6IjEiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdG9rZW4iOiJaQTJqc1c1QmNEYnpUMHFxOGVwbUR0UEMiLCJjbGllbnRfaWQiOiI3ajNmcWowbjBucTdrd2dmNGE5NmE4ZGIiLCJlaWQiOjEwMDAxNDU0Miwic3RhY2tfa2V5IjoiUzEwIiwicGxhdGZvcm1fdmVyc2lvbiI6MiwiY2xpZW50X3R5cGUiOiJTZXJ2ZXJUb1NlcnZlciJ9.yzPyn2Wq8lDRsGAXlAS2aqDbeQsxPsQpK41LNLlZzGE.TJzxDP--flwGpeijn777NuMjFHREArkJ7kD_BJxTnmE2Y6L_MQYowUnaFVdCJBM_b-rjf1fcXErj5x2-v3nAsgaHbTwb_AXd-1Mrauxhx8ktv5WxcB8JWQZXG0noaQLPGWNQu7fXJHPkBYQDsfJegiBUkf_kDkHnfRQ1w-C89JJRW1CJEAw";
                    if (CustomerFirstName == '' || Postcode == '' || Phone == '' || CustomerEmail == '') {
                        $('.success').fadeOut(200).hide();
    
                        $('.error').fadeOut(200).show();
                        
                    }
                    
                    else {
                        $.ajax({
                            type: "POST",
                            contentType: 'application/json',
                            crossOrigin: true,
                            data: contactinfo,
                            cache :false,
                            url: "https://mc7l7fypk60zp-h7jf6n349dqp54.rest.marketingcloudapis.com/messaging/v1/messageDefinitionSends/key:45632/send",
                            headers: {
                            'Authorization': 'Bearer'+token,
                            },
                            dataType: 'json',
                            success: function(responseData, status, xhr) {
                            console.log(responseData);
                            },
                            error: function(request, status, error) {
                            console.log(request.responseText);
                            }
                        });
    
                    }
    
                    return false;
                });
    
            });