var productName, description, model, year;
function form() {   
    console.log(productName);
    debugger;
    productName = document.getElementById("productName").value;
    console.log(productName);
    alert(productName);
    description = document.getElementsByName("description")[0].value;
    model = document.getElementsByName("model")[0].value;
    year = document.getElementsByName("year")[0].value;
}
// function show()
// {
//     alert(productName);
// }