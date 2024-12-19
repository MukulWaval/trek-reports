import React from "react";

const NotFound: React.FC = () => {
  return (
    <section className="h-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-content md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-accent">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a href="/" className="btn btn-primary">
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
