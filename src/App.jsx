import Dashboard from "./pages/Dashboard";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <Dashboard />
    </SidebarProvider>
  )
}

export default App;