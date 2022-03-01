/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

export type StrapiData<T> = {
	id: number,
	attributes: T
}

export type Page = {
	heading: {
		header: string,
		subHeader: string
	}
}