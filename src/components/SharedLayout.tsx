import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Header from "./Header";

import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";

export const SharedLayout = () => {
  return (
    <div className="">
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <Container className="mt-2">
          <Outlet />
        </Container>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};
