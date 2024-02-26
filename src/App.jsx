import { TheProductList, TheProductListContextProvider } from '@/components/TheProductList';

const App = () => {
    return (
        <div className="container">
            <TheProductListContextProvider option={{}}>
                <TheProductList />
            </TheProductListContextProvider>
        </div>
    );
};

export default App;
