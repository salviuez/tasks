async function getWord() {                                                                   //Introduced function name
    var word = document.getElementById('txt').value;                                        //will get output in front webpage & linked ID of HTML
    console.log(word);                                                                      //will get output in console page

    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);        //fetching api of Dictionary
    let result = await res.json();                                                           //to get result of api as JSON format
    console.log(result);                                                                     //get output in console page

    var dict = document.getElementById("dictionary");                                          //will display output in front webpage & linked ID of HTML
    dict.innerHTML = `<div class="card mb-3">                                                    
  <img src="https://t3.ftcdn.net/jpg/02/26/25/76/360_F_226257619_yl8zDKOAgEFQjv0zRYWIaR6KAlgsHX96.jpg" class="card-img-top" alt="..." style="height:70vh">
  <div class="card-img-overlay"
  <div class="card-body">
    <h2 class="card-title">Search Result</h2>
    <p class="card-text">Meaning: ${result[0].meanings[0].definitions[0].definition}</p>
  </div>
</div>
</div>`

}