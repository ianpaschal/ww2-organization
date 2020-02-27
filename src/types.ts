export interface Term {
	official: string;
	display?: string;
	nicknames?: string[];
	abbreviation?: string;
}

export interface Role extends Term {
	specNumber?: number;
}
