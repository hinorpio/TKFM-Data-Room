import { Dispatch } from '@/interface/global/dispatch';
import { DispatchType } from '../enums';
import dispatchData from '@/static/data/dispatch';

export default {
    getDispatch(type: DispatchType): Dispatch | undefined {
        const foundDispatch = dispatchData.find((dispatch: Dispatch) => dispatch.type === type);
        if (foundDispatch) {
            return foundDispatch;
        } else {
            throw new Error("DISPATCH_NOT_FOUND");
        }
    },

    getAllDispatch(): Dispatch[] {
        return dispatchData;
    }
};