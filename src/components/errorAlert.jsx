import React, { useState } from "react";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";

export default function ErrorAlert({updated}) {
  const [isShowing, setIsShowing] = useState(true);
//   const [submitState, setSubmitState] = useState(updated)

  function state(){
    setIsShowing(false)
  }

  

  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="rounded-md bg-yellow-50 p-4" >
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className=" h-5 w-5 text-yellow-400 animate-ping"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-yellow-700">
              Error please try again
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-yellow-50 p-1.5 text-yellow-700 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-green-50"
                onClick={state}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
