let frm = document.getElementById("frm")
let i1 = document.getElementById("i1").value
let i2 = document.getElementById("i2").value
let btn = document.getElementById("btn")
let tbody = document.getElementById("tbody")
//dataset
let data = []
//(R)READ
function readdata(){
    tbody.innerHTML="" //stop the duplication of data in table
    data.map((e,i) => {
     console.log(e.name)
     console.log(e.age)
    let tr = document.createElement("tr")
    tr.innerHTML = `
        <td>${i+1}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td><button onclick="editdata(${i})">Edit</button></td>
        <td><button onclick="deletedata(${i})">Delete</button></td>
        `
    tbody.append(tr)

})
}
readdata()
//(C)ADD//UPDATE
let editindex=null
frm.addEventListener("submit",(e)=>{ // It ia an eventIt is used to add or suibmit in js,
    e.preventDefault() //prevent to hide the autorefresh of the page
    let i1=document.getElementById("i1").value
    let i2=document.getElementById("i2").value
    let obj={name:i1,age:i2}
    if(editindex==null){
        data.push(obj);
    }
    else{
        data[editindex]=obj
        editindex=null
        document.getElementById("btn").innerHTML="Save"
        document.getElementById("hd").innerHTML="Crud Operation"
    }
    readdata()
    frm.reset()
})

function deletedata(i){
    if(window.confirm("Are you sure?")){
        data.splice(i,1) //the first i is for indtex number aand the 1 is the number how much mdata we want to delete
        readdata()
        frm.reset()

    }
}
function editdata(i){
    document.getElementById("i1").value=(data[i].name)
    document.getElementById("i2").value=(data[i].age)
    document.getElementById("btn").innerHTML="Update"
    document.getElementById("hd").innerHTML="Update Form"
    editindex=i
}
