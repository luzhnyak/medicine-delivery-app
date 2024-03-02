import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import Loader from "./Loader/Loader";
import Footer from "./Footer";

import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";

export const SharedLayout = () => {
  return (
    <div className="">
      <Header />

      <Suspense fallback={<Loader />}>
        <Container className="mt-2">
          <Outlet />
        </Container>
      </Suspense>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};
