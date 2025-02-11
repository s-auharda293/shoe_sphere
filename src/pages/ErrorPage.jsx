/* eslint-disable react/prop-types */
import { useRouteError } from "react-router-dom";

export default function ErrorPage({ message }) {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="mt-[40vh] flex w-full items-center justify-center">
      <p className="text-2xl font-normal uppercase md:text-4xl">
        {message
          ? message
          : error?.statusText ||
            error?.message ||
            "An unexpected error has occurred"}
      </p>
    </div>
  );
}
