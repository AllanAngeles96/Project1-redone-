var yodaAPI = 'https://api.funtranslations.com/translate/yoda.json?text='
var recipeAPI = 'https://www.themealdb.com/api/json/v1/1/random.php'
var bleh = ''
document.getElementById('button').addEventListener('click', function(){
    // start: first call
    $.ajax({url: recipeAPI, success:function(result1){
        console.log(result1);
        $('#recipe-list').text(result1.meals[0].strInstructions)
        bleh = result1.meals[0].strInstructions;
        
        
        // start: second call
        $.ajax({url: yodaAPI + bleh, success: function(result2){
            console.log(result2);
            console.log(bleh);
            $('#yoda-says').text(result2.contents.translated)
        }})
        // end: second call
        
    }});
    // end: first call
      
});
