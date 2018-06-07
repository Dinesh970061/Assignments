
function form()
{
    var count = localStorage.getItem("count");
    count++;
    localStorage.setItem("productName"+count,document.getElementById('productName').value);
    localStorage.setItem("description"+count,document.getElementById('description').value);
    localStorage.setItem("model"+count,document.getElementById('model').value);
    localStorage.setItem("year"+count,document.getElementById('year').value);
    localStorage.setItem("count",count);
    alert("success!");
}

function sel()
{
    for(var yr=1996;yr<2019;yr++)
    {
        document.write("<option value="+yr+">"+yr+"<\option>");
    }
}
function show()
{
    var count=localStorage.getItem("count");
    for(var j=1;j<=count;j++)
    {
        var name=localStorage.getItem("productName"+j);
        var des=localStorage.getItem("description"+j);
        var model=localStorage.getItem("model"+j);
        var year=localStorage.getItem("year"+j);
        document.write("<tr>");
        document.write("<td>"+name+"</td>");
        document.write("<td>"+des+"</td>");
        document.write("<td>"+model+"</td>");
        document.write("<td>"+year+"</td>");
        document.write("<td><button>X</button></td>");
        
        document.write("</tr>");
    }
}