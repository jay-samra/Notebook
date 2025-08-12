const saveButton = document.getElementById("saveButton")
const textArea = document.getElementById("entry")
const entryButton = document.getElementById("entryButton")

var journalNumbers = 1;
localStorage.setItem("Journal Counter", journalNumbers)
// Saving the value of the text box
// Get value of text box -> retrieve local storage -> add entry to local storage -> clear text box
function saveEntry(){
    const text = entry.value;
    // Check if text is empty
    if (!text){
        return;
    }
    localStorage.setItem('Journal ' + journalNumbers, text)
    console.log("Saving " + journalNumbers)
    journalNumbers++;
    textArea.value = ""


}
// Have 2 rereive functions, 1 for specific number and 1 for all entries
function loadEntries(){
    const entryText = localStorage.getItem('Journal ' + journalNumbers);
    console.log("Retrieving " + journalNumbers)
    console.log(entryText);
}

saveButton.addEventListener('click', saveEntry)
entryButton.addEventListener('click', loadEntries)