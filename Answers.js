 //Relationships Question

 function getRelationship(x, y) {
    // Your code goes here!
    function compareStuff(x,y){
        if(x>y){ return ">";}
        else if(x<y){return "<";}
        else return "=";
    }
    
    if(isNaN(x)){
        if(isNaN(y)) {
           return "Can't compare relationships because " + x + " and " + y +" are not numbers";}
        else return "Can't compare relationships because " + x +" is not a number";
    }
   else if(isNaN(y)){
            return "Can't compare relationships because " + y +" is not a number";
        }
   else return compareStuff(x,y);    
        
};


// Astronauts Question

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetSort(array){
    var newArray1 = [];
    
    for(i=0;i<array.length;i++){
       var store = 0;
        for(j=0;j<array.length;j++){
            if(array[i]>array[j]){
                store++;}
            }
        newArray1[store]=array[i];
    }
    return newArray1;
}


function alphabetizer(names) {
    // Your code goes here!
    var newArray = [];
    for(i=0;i<names.length;i++){
        var splitArray = names[i].split(" ");
        var revSplitArray = (splitArray[1]+ " "+ splitArray[0]).split(" ");
        //console.log(revSplitArray.join(","));
        newArray.push(revSplitArray.join(", "));    

}
 return  alphabetSort(newArray);
}


// PageSpeed Insights Directions

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    resultArray = [];
    var path = results.formattedResults["ruleResults"];
    for(var placeholder in path){
        resultArray.push(path[placeholder].localizedRuleName);
    }
return resultArray;
}


// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var totBytes = 0;
    for(var bytes in results.pageStats){
        if(bytes.indexOf("Bytes")!= -1){    
        totBytes = totBytes + Number(results.pageStats[bytes]);
    }
    }
                  
    return totBytes;
}
