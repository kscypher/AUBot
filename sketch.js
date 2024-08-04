let inputBox
let submitButton

function setup() {
  inputBox = createInput()
  submitButton = createButton('SUBMIT')
  submitButton.mouseClicked(submit)
}

function submit() {
  let inputText = inputBox.value()
  let voice = new p5.Speech()
  voice.speak(inputText)
}
