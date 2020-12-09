import {Vue, Component, Prop, Emit, Watch, Ref, Inject} from 'vue-property-decorator';

export default class BaseComponent extends Vue {
    protected get isLoading(): boolean {
        return this.$store.state.Global.isLoading;
    }

    protected set isLoading(val: boolean) {
        this.$store.commit('fetchLoading', val);
    }
}

export {Component, Prop, Emit, Watch, Ref, Inject};
