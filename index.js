
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const students = [
    {id:1, name: 'Suriano', age: 20, inscrito: true},
    {id:2, name: 'Rodrigo', age: 21, inscrito: true},
    {id:3, name: 'Alberto', age: 21, inscrito: true},
    {id:4, name: 'Daniel', age: 22, inscrito: true},
    {id:5, name: 'Javier', age: 22, inscrito: true},
    {id:6, name: 'Edgar', age: 21, inscrito: true},

];

app.get('/',(req, res )=> {
    res.send('Prueba pipeline corriendo');
})

// app.get('/api/students',(req,res)=>{
//     res.send(students)
// });

app.get('/api/students/:id',(req ,res) =>{
    const student = students.find(c => c.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('Estudiante no encontrado');
    else res.json(student);
});



app.listen(PORT,()=>console.log(`funcionando en el puerto ${PORT}`));