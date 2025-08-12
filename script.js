const saveButton = document.getElementById("saveButton")
const textArea = document.getElementById("entry")
// Saving the value of the text box
// Get value of text box -> retrieve local storage -> add entry to local storage -> clear text box
function saveEntry(){
    const text = entry.value;
    // Check if text is empty
    if (!text){
        return;
    }
    localStorage.setItem("jorunal1", text)

    textArea.value = ""


}

saveButton.addEventListener('click', saveEntry)