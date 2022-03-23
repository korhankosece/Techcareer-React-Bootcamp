import { CartProvider } from "./contexts/CartContext";
import { ToDoProvider } from "./contexts/TodoContext";
import 'antd/dist/antd.css';
import CustomerForm from "./antDesignSample/CustomerForm";

function App() {
    return (
        <ToDoProvider>
            <CartProvider>
                <CustomerForm />
            </CartProvider>
        </ToDoProvider>
    );
}

export default App;

//index.js => App.js => Text.js => p