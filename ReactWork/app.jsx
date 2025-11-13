const parent=document.getElementById('parent')
console.log(parent)
const root=ReactDOM.createRoot(parent)
const h2=React.createElement("h2",{style:{color:"brown", backgroundColor:"aqua"}},"ABES Engineering College")
const li1=React.createElement("li",{},"React")
const li2=React.createElement("li",{},"Java")
const li3=React.createElement("li",{},"python")

const ul=React.createElement("ul",{style:{backgroundColor:"black",color:"white"}},li1,li2,li3)

const img=React.createElement("img",{src:"https://img.freepik.com/free-vector/cute-student-cartoon-character_1308-133976.jpg?semt=ais_hybrid&w=740&q=80",style:{height:"100px"}})

const name=React.createElement("h3",{style:{marginLeft:"50px"}},"Kirti Jain")
const box=React.createElement("div",{style:{display:"flex", alignItems:"center"}},img,name)

const wrapper=React.createElement("div",{},h2,box,ul)
// root.render(h2)
root.render(wrapper)