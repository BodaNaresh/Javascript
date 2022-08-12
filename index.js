function showdetails(){
    var name1=document.getElementById("name").value;
    var email1=document.getElementById("email").value;
    document.write("Name is"+name1+" -"+"email is"+email1); 
}
function Show(){
    var x=document.getElementById("input1").value;
    var y=document.getElementById("input2").value;
    document.write(x+y);
}
function get(x,y){
return x+y;
}
document.write(get(23,45));

function employee(id,name,salary,city){
  this.id=id;
  this.name=name;
  this.salary=salary;
  this.city=city;
}
var emp= new employee(23,"naresh",2345,"Hyd");
document.write("Id:"+emp.id+" "+"Name:"+emp.name+"Salary:"+emp.salary+"city:"+emp.city);

var flag=false;
function showcommentform() {  
    var data="Name:<input type='text' name='name'><br>Comment:<br><textarea rows='5' cols='80'></textarea><br><input type='submit' value='Post Comment'>";
    if(flag){
        document.getElementById('mylocation').innerHTML=cform;  
        flag=false; 
    }  else{
    document.getElementById('mylocation').innerHTML=data;  
    flag=true;
 }  
}

function validate() {  
    var msg;  
    if(document.Form.userPass.value.length>5){  
    msg="good";  
    }  
    else{  
    msg="poor";  
    }  
    document.getElementById('location').innerText=msg;  
     }  