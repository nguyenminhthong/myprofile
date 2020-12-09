import Vue, { VNode } from 'vue';
declare global {
    interface Window {
        core: any
    }

    interface String {
        isNullOrEmpty(): boolean;
    }
}
