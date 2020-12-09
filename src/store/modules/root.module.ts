import {Module, BaseModule, Mutation} from '@/utils/base-module';

@Module({namespaced: false})
class Root extends BaseModule {
    public isLoading: boolean = false;

    @Mutation
    public fetchLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

}

export default Root;
