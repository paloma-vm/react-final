import data from './todays-menu.json'

data.forEach((obj, i) => {
	obj.id = i
})

export default data