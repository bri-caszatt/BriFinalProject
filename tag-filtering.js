//get just "color" tags from box social
$.getJSON("box-social.json", function(data){ // data variable is the JSON object
    let storyText; // Define a new variable to hold all text
    storyText = "<p>"; // Open the starting tags
    // Now you can iterate (map) over the data variable’s .paragraphs property:
    data.paragraphs.map(function(paragraph){ // We get a variable, paragraph; iterating forward
      // Define a blank paraText.
      console.log(typeof(data.paragraphs)); //data.paragraphs is an object
      let paraText = "";
      // Now iterate over each paragraph.
        paragraph.map(function(paragraph){
            let wordString;
            wordString = paragraph.text;
            paraText = paraText + wordString + "<br>"; // Add the paragraph to the paraText variable with breaks
        });
        // Add paraText with a break to the storyText
        storyText = storyText + paraText + "<br/>";
    });
    // Close the storyText tags
    storyText = storyText + "</p>";
    // Replace the content of #color
    $("#color").html(storyText);
  }); // Close the getJSON method and callback function


  var data = {
    name: 'Bob',
    friends: [
      {name: 'Ashley (Family)'},
      {name: 'Steven (Non-Family)'},
      {name: 'Chris (Family)'}
    ]
  };
  
  var family = data.friends.filter(f => f.name.indexOf('(Family)') > -1);
  
  console.log(family);
