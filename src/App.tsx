import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";

import { ErrorBoundary } from "./components";
import { Page1 } from "./pages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 5 * 60 * 1000, // 5 mims
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Layout style={{ minHeight: "100vh" }}>
          <Layout>
            <Layout.Content>
              <Routes>
                <Route path="/" element={<Navigate replace to="page1" />} />
                <Route path="page1" element={<Page1 />} />
              </Routes>
            </Layout.Content>
          </Layout>
        </Layout>
      </QueryClientProvider>
    </div>
  );
};

export default App;
