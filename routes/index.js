const express = require('express')
const router = express.Router();
// //podemos enviar via json
// router.get('/',(req, res) => {
// 	const ToDo = {tarea_1: 'lavar platos',tarea_2: 'regar plantas',}
// 	res.json(ToDo)
// })
//podemos enviar pug
router.get('/',(req, res) => {
	
	res.render('hello')
})

module.exports = router