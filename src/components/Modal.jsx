/* eslint-disable react/prop-types */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ toggleModal, handleUpdate }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const handleSave = () => {
    toggleModal();
    handleUpdate(title, link);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white p-8 flex flex-col space-y-4">
                  <div className="flex flex-col space-y-4">
                    <Dialog.Title as="h3" className="text-base font-semibold">
                      Create Your Bookmark
                    </Dialog.Title>
                    <div className="flex flex-col space-y-4">
                      <div>
                        <p>Title</p>
                        <input
                          value={title}
                          className="border border-blue-500 rounded w-full"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div>
                        <p>Description</p>
                        <input
                          value={link}
                          className="border border-blue-500 rounded w-full"
                          onChange={(e) => setLink(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="rounded-md p-2 text-sm font-semibold  shadow-sm ring-1 sm:mt-0 sm:w-auto"
                      onClick={handleSave}
                      ref={cancelButtonRef}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default Modal;
