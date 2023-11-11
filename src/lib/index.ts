// place files you want to import through the `$lib` alias in this folder.

import { compareSync } from 'bcrypt-ts';

export function enterGate() {
	console.log(import.meta.env.VITE_SECRET)
	return compareSync(localStorage.getItem('current')!, import.meta.env.VITE_SECRET);
}
