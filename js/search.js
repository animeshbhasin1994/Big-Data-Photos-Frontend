$(document).ready(function() {

    function callSearchApi(message) {
        // params, body, additionalParams
        return sdk.searchGet({'q': message,'x-api-key':'2eCQlxGHp5a8S7qi7sVEm6SwY7BaYpNXapcy15av'}, {}, {});
      }


    $('.search_button').click(function() {
        //insertMessage();
        console.log("search clicked");

        document.getElementById("image_grid").innerHTML='';

        msg = $('.message-input').val();
        //console.log(msg);
        
        if ($.trim(msg) == '') {
          console.log("no input");
          return false;
        }
        callSearchApi(msg).then((response) => {
          
          listy =response.data.results;
          console.log(listy.length);
          var i;
          for(i=0; i<listy.length; i++)
          {

            var elem = document.createElement("img");
            console.log(listy[i].url)
            elem.setAttribute("src", listy[i].url);
            elem.setAttribute("height", "100");
            elem.setAttribute("width", "100");
            document.getElementById("image_grid").appendChild(elem);
          }

          //<p><img id="output" width="200" /></p>


        
        }).catch((error) => {
          console.log('an error occurred', error);
          //insertResponseMessage('Oops, something went wrong. Please try again.');
        });
        

      });

      $('.upload_button').click(function() {
        //insertMessage();
        console.log("upload clicked")
      });
});