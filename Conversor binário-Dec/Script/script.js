function converter(){
    let num = document.querySelector('input#binnumber').value
    let res = document.querySelector('input#decimal')
    res.value = parseInt(num, 2).toString(10)
}
function converter2(){
    let nume = document.querySelector('input#decimal1').value
    let resp = document.querySelector('input#bin')
    resp.value = parseInt(nume, 10).toString(2)
    console.log(nume)
}