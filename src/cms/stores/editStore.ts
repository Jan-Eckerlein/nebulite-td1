import { writable } from 'svelte/store';

export const editMode = writable<boolean>(false)