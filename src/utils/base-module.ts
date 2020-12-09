import { VuexModule, Module, Mutation, Action, MutationAction } from 'vuex-module-decorators';
class BaseModule extends VuexModule {
    public version: string = '1.0';
}

export {Module, Mutation, Action, MutationAction, BaseModule}
