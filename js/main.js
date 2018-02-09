
// lets wrap the solution in one function and call it later. name is getResult
function getResult(){
    // get a value of the user put and save it in a variable
    var search = $('#term').val();

    // lets call the data with ajax calling through the wiki api.
    $.ajax({
        url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+search+'&format=json&callback=?',
        dataType:'json',

        // when api calling runs successfully, lets display the data in our html
        success: function(data){
            // console it to check if its successful
            console.log(data)
            // when new input is entered after first trial, lets wipe the elements from div to display the new input data. 
            $('#answers').html('');
            // using for loop to get the data in array and display it.
            for(i = 0; i < data[1].length; i++){
            // appending the whole html elements and data in our answer div. 
            $('#answers').append("<a target='blank' class='link' href="+data[3][i]+"><div id='desc' class='animated fadeInUp col-sm-10 col-sm-offset-1'><h3>"+data[1][i]+"</h3><p>"+ data[2][i] + "</p></div></a>")

            }
        },
        // when we cant retrieve data, alert the user with a notice.
        error: function(errorMessege){
            alert('We cannot retrieve your data!')
        }
    })
}
// run function when pressed enter key
$(document).keypress(function(e) {
    if(e.which == 13) {
       getResult();
    }
});
// run function when pressed the button search.
$('#button').click(getResult)
