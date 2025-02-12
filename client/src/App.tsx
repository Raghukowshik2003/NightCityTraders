import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/privacy-policy"; // Import Privacy Policy
import RefundPolicy from "@/pages/refund-policy"; // Import Refund Policy
import CancellationPolicy from "@/pages/cancellation-policy"; // Import Cancellation Policy

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} /> {/* Add Privacy Policy route */}
      <Route path="/refund-policy" component={RefundPolicy} /> {/* Add Refund Policy route */}
      <Route path="/cancellation-policy" component={CancellationPolicy} /> {/* Add Cancellation Policy route */}
      <Route component={NotFound} /> {/* Fallback for unmatched routes */}
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;