import { CartProvider } from "./contexts/CartContext";
import { ToDoProvider } from "./contexts/TodoContext";
import ToDoMain from "./contextSample/ToDoMain";

function App() {
    return (
        <ToDoProvider>
            <CartProvider>
                <ToDoMain />
            </CartProvider>
        </ToDoProvider>
    );
}

export default App;

//index.js => App.js => Text.js => p