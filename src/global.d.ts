declare global {
	interface HTMLElementTagNameMap {
		"table-of-contents": HTMLElement & {
			init?: () => void;
		};
	}

	interface Window {
		// Define swup type directly since @swup/astro doesn't export AstroIntegration
		swup: any;
		pagefind: {
			search: (query: string) => Promise<{
				results: Array<{
					data: () => Promise<SearchResult>;
				}>;
			}>;
		};
		translate?: {
			changeLanguage: (language: string) => void;
			service: {
				use: (service: string) => void;
			};
			language: {
				setLocal: (language: string) => void;
				getCurrent: () => string;
				getLocal: () => string;
			};
			setAutoDiscriminateLocalLanguage: () => void;
			ignore: {
				class: string[];
				tag: string[];
			};
			selectLanguageTag: {
				show: boolean;
				refreshRender?: () => void;
			};
			listener: {
				start: () => void;
			};
			execute: () => void;
			to: string;
			storage: {
				set: (key: string, value: string) => void;
			};
		};
		mobileTOCInit?: () => void;
		galleryManager?: GalleryManager;
		iconifyLoaded?: boolean;
		semifullScrollHandler?: any;
		initSemifullScrollDetection?: any;
		closeAnnouncement?: any;
		__iconifyLoader?: any;
		loadTranslateScript?: () => Promise<void>;
	}
}

interface SearchResult {
	url: string;
	meta: {
		title: string;
	};
	excerpt: string;
	content?: string;
	word_count?: number;
	filters?: Record<string, unknown>;
	anchors?: Array<{
		element: string;
		id: string;
		text: string;
		location: number;
	}>;
	weighted_locations?: Array<{
		weight: number;
		balanced_score: number;
		location: number;
	}>;
	locations?: number[];
	raw_content?: string;
	raw_url?: string;
	sub_results?: SearchResult[];
}

interface GalleryManager {
	isInitialized: boolean;
	clickHandler: ((e: Event) => void) | null;
	init(): void;
	cleanup(): void;
	handleClick(e: Event): void;
}

export {};
