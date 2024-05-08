declare const useGuideHook: (initialState: string) => {
    state: string;
    handleChange: (newValue: string) => void;
};
export default useGuideHook;
