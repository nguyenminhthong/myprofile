import Vue, { VNode } from 'vue';
declare global {
    interface Window {
        core: any,
        ui: any
    }

    interface String {
        isNullOrEmpty(): boolean;
    }
}
