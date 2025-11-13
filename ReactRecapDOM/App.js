const parent =document.getElementById('parent')
console.log(parent)
const root=ReactDOM.createRoot(parent)
// const h2=React.createElement('h2',{style:{color:"brown"}},"welcome to html")
const h2=<h2>using jsx</h2>
root.render(h2)
