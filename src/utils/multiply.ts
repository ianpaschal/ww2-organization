export default (count: number, thing: any): any[] => {
	const array = [];
	for(let i = 0; i < count; i++) {
		array.push(thing);
	}
	return array;
};
