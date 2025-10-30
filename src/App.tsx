// App.tsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Todoform from "./components/Todoform";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at top */}
      <div>
        <Navbar />
      </div>

      {/* Main content - grows to fill space */}
      <div className="flex-1">
        <Todoform />
      </div>

      {/* Footer at bottom */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
