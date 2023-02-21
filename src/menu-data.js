import data from './menu-data.json'

data.forEach((obj, i) => {
	obj.id = i
})

export default data